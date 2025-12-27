import {
  ASTNode,
  ASTNodeType,
  ProgramNode,
  ProcDeclarationNode,
  VariableDeclarationNode,
  CallExpressionNode,
  BinaryExpressionNode,
  LiteralNode,
  IdentifierNode,
  AssignmentExpressionNode,
  ReturnStatementNode,
  NoOpNode,
} from "./ast";
import { Token, TokenType } from "./tokenizer";

export class Parser {
  private tokens: Token[];
  private cursor = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  parse(): ProgramNode {
    const body: ASTNode[] = [];

    while (this.peek().type !== TokenType.EOF) {
      body.push(this.parseStatement());
    }

    return { type: ASTNodeType.Program, body };
  }

  private peek(offset = 0): Token {
    return this.tokens[this.cursor + offset];
  }

  private consume(expectedType: TokenType, expectedValue: string | null = null): Token {
    const token = this.peek();

    if (token.type !== expectedType || (expectedValue && token.value !== expectedValue)) {
      throw new Error(
        `Parser Error: Expected ${expectedType}${
          expectedValue ? ` ('${expectedValue}')` : ""
        } but got ${token.type} ('${token.value}') at ${token.line}:${token.column}`
      );
    }

    this.cursor++;
    return token;
  }

  private parseStatement(): ASTNode {
    const token = this.peek();

    switch (token.type) {
      case TokenType.KEYWORD_PROC:
        return this.parseProcDeclaration();
      case TokenType.KEYWORD_VAULT:
      case TokenType.KEYWORD_SEAL:
        return this.parseVariableDeclaration();
      case TokenType.BUILTIN_IMPORT:
        this.parseImportStatement();
        return { type: ASTNodeType.NoOp } as NoOpNode;
      case TokenType.KEYWORD_RETURN:
        return this.parseReturnStatement();
      default:
        return this.parseExpressionStatement();
    }
  }

  private parseImportStatement(): void {
    this.consume(TokenType.BUILTIN_IMPORT);
    this.consume(TokenType.SEPARATOR_LPAREN);
    this.consume(TokenType.LITERAL_STRING);
    this.consume(TokenType.SEPARATOR_RPAREN);
    this.consume(TokenType.SEPARATOR_SEMICOLON);
  }

  private parseReturnStatement(): ReturnStatementNode {
    this.consume(TokenType.KEYWORD_RETURN);
    const argument = this.parseExpression();
    this.consume(TokenType.SEPARATOR_SEMICOLON);

    return {
      type: ASTNodeType.ReturnStatement,
      argument,
    };
  }

  private parseProcDeclaration(): ProcDeclarationNode {
    this.consume(TokenType.KEYWORD_PROC);
    const name = this.consume(TokenType.LITERAL_IDENTIFIER).value as string;

    this.consume(TokenType.SEPARATOR_LPAREN);
    const params: string[] = [];

    while (this.peek().type !== TokenType.SEPARATOR_RPAREN) {
      if (params.length > 0) {
        this.consume(TokenType.SEPARATOR_COMMA);
      }
      params.push(this.consume(TokenType.LITERAL_IDENTIFIER).value as string);
    }

    this.consume(TokenType.SEPARATOR_RPAREN);
    this.consume(TokenType.SEPARATOR_LBRACE);

    const body: ASTNode[] = [];
    while (this.peek().type !== TokenType.SEPARATOR_RBRACE) {
      body.push(this.parseStatement());
    }

    this.consume(TokenType.SEPARATOR_RBRACE);

    return {
      type: ASTNodeType.ProcDeclaration,
      name,
      params,
      body,
    };
  }

  private parseVariableDeclaration(): VariableDeclarationNode {
    const kindToken = this.peek();
    const kind = kindToken.type === TokenType.KEYWORD_VAULT ? "vault" : "seal";
    this.cursor++;

    const name = this.consume(TokenType.LITERAL_IDENTIFIER).value as string;
    this.consume(TokenType.OPERATOR_ASSIGN);
    const initializer = this.parseExpression();
    this.consume(TokenType.SEPARATOR_SEMICOLON);

    return {
      type: ASTNodeType.VariableDeclaration,
      kind,
      name,
      initializer,
    };
  }

  private parseExpressionStatement(): ASTNode {
    const t1 = this.peek();
    const t2 = this.peek(1);

    if (t1.type === TokenType.LITERAL_IDENTIFIER && t2 && t2.type === TokenType.OPERATOR_ASSIGN) {
      const name = this.consume(TokenType.LITERAL_IDENTIFIER).value as string;
      this.consume(TokenType.OPERATOR_ASSIGN);
      const right = this.parseExpression();
      this.consume(TokenType.SEPARATOR_SEMICOLON);

      const node: AssignmentExpressionNode = {
        type: ASTNodeType.AssignmentExpression,
        name,
        value: right,
      };
      return node;
    }

    const expr = this.parseExpression();
    this.consume(TokenType.SEPARATOR_SEMICOLON);

    return {
      type: "ExpressionStatement",
      expression: expr,
    } as any;
  }

  private parseExpression(): ASTNode {
    let left = this.parsePrimaryExpression();

    while (
      [
        TokenType.OPERATOR_ADD,
        TokenType.OPERATOR_SUB,
        TokenType.OPERATOR_MUL,
        TokenType.OPERATOR_DIV,
      ].includes(this.peek().type)
    ) {
      const operatorToken = this.peek();
      this.cursor++;
      const right = this.parsePrimaryExpression();

      const expr: BinaryExpressionNode = {
        type: ASTNodeType.BinaryExpression,
        operator: operatorToken.value as string,
        left,
        right,
      };

      left = expr;
    }

    return left;
  }

  private parsePrimaryExpression(): ASTNode {
    const token = this.peek();
    let expression: ASTNode;

    switch (token.type) {
      case TokenType.LITERAL_NUMBER:
      case TokenType.LITERAL_STRING: {
        this.cursor++;
        const node: LiteralNode = {
          type: ASTNodeType.Literal,
          value: token.value,
        };
        expression = node;
        break;
      }

      case TokenType.BUILTIN_SIGNAL:
      case TokenType.LITERAL_IDENTIFIER: {
        const next = this.peek(1);

        if (next && next.type === TokenType.OPERATOR_DOT) {
          const objName = this.consume(TokenType.LITERAL_IDENTIFIER).value as string;
          this.consume(TokenType.OPERATOR_DOT);
          const propName = this.consume(TokenType.LITERAL_IDENTIFIER).value as string;

          if (this.peek().type === TokenType.SEPARATOR_LPAREN) {
            expression = this.parseCallExpression(`${objName}.${propName}`);
          } else {
            expression = {
              type: ASTNodeType.Identifier,
              name: `${objName}.${propName}`,
            } as IdentifierNode;
          }
        } else if (next && next.type === TokenType.SEPARATOR_LPAREN) {
          expression = this.parseCallExpression();
        } else {
          this.cursor++;
          expression = {
            type: ASTNodeType.Identifier,
            name: token.value as string,
          } as IdentifierNode;
        }
        break;
      }

      case TokenType.SEPARATOR_LPAREN: {
        this.consume(TokenType.SEPARATOR_LPAREN);
        expression = this.parseExpression();
        this.consume(TokenType.SEPARATOR_RPAREN);
        break;
      }

      default:
        throw new Error(
          `Parser Error: Unexpected token '${token.value}' when expecting a primary expression at ${token.line}:${token.column}`
        );
    }

    return expression;
  }

  private parseCallExpression(explicitName: string | null = null): CallExpressionNode {
    const name =
      explicitName ??
      (this.consume(this.peek().type).value as string); // BUILTIN_SIGNAL or identifier

    this.consume(TokenType.SEPARATOR_LPAREN);
    const args: ASTNode[] = [];

    while (this.peek().type !== TokenType.SEPARATOR_RPAREN) {
      if (args.length > 0) {
        this.consume(TokenType.SEPARATOR_COMMA);
      }
      args.push(this.parseExpression());
    }

    this.consume(TokenType.SEPARATOR_RPAREN);

    return {
      type: ASTNodeType.CallExpression,
      name,
      arguments: args,
    };
  }
}
