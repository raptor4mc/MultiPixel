export enum TokenType {
  KEYWORD_VAULT = "KEYWORD_VAULT",
  KEYWORD_SEAL = "KEYWORD_SEAL",
  KEYWORD_PROC = "KEYWORD_PROC",
  KEYWORD_RETURN = "KEYWORD_RETURN",

  BUILTIN_SIGNAL = "BUILTIN_SIGNAL",
  BUILTIN_IMPORT = "BUILTIN_IMPORT",

  SEPARATOR_LPAREN = "SEPARATOR_LPAREN",
  SEPARATOR_RPAREN = "SEPARATOR_RPAREN",
  SEPARATOR_LBRACE = "SEPARATOR_LBRACE",
  SEPARATOR_RBRACE = "SEPARATOR_RBRACE",
  SEPARATOR_COMMA = "SEPARATOR_COMMA",
  SEPARATOR_SEMICOLON = "SEPARATOR_SEMICOLON",

  LITERAL_NUMBER = "LITERAL_NUMBER",
  LITERAL_STRING = "LITERAL_STRING",
  LITERAL_IDENTIFIER = "LITERAL_IDENTIFIER",

  OPERATOR_ASSIGN = "OPERATOR_ASSIGN",
  OPERATOR_ADD = "OPERATOR_ADD",
  OPERATOR_SUB = "OPERATOR_SUB",
  OPERATOR_MUL = "OPERATOR_MUL",
  OPERATOR_DIV = "OPERATOR_DIV",
  OPERATOR_DOT = "OPERATOR_DOT",

  EOF = "EOF",
}

export interface Token {
  type: TokenType;
  value: any;
  line: number;
  column: number;
}

const KEYWORDS: Record<string, TokenType> = {
  vault: TokenType.KEYWORD_VAULT,
  seal: TokenType.KEYWORD_SEAL,
  proc: TokenType.KEYWORD_PROC,
  return: TokenType.KEYWORD_RETURN,
  Signal: TokenType.BUILTIN_SIGNAL,
  Import: TokenType.BUILTIN_IMPORT,
};

export class Tokenizer {
  private source: string;
  private cursor = 0;
  private line = 1;
  private column = 1;
  private tokens: Token[] = [];

  constructor(source: string) {
    this.source = source;
  }

  tokenize(): Token[] {
    while (this.cursor < this.source.length) {
      const char = this.source[this.cursor];

      if (/\s/.test(char)) {
        this.skipWhitespace();
        continue;
      }

      if (char === "/" && this.source[this.cursor + 1] === "/") {
        this.skipComment();
        continue;
      }

      if (/[a-zA-Z_]/.test(char)) {
        this.tokenizeIdentifierOrKeyword();
        continue;
      }

      if (/[0-9]/.test(char)) {
        this.tokenizeNumber();
        continue;
      }

      if (char === "'" || char === '"') {
        this.tokenizeString();
        continue;
      }

      switch (char) {
        case ";":
          this.advance();
          this.push(TokenType.SEPARATOR_SEMICOLON, ";");
          break;
        case "=":
          this.advance();
          this.push(TokenType.OPERATOR_ASSIGN, "=");
          break;
        case "+":
          this.advance();
          this.push(TokenType.OPERATOR_ADD, "+");
          break;
        case "-":
          this.advance();
          this.push(TokenType.OPERATOR_SUB, "-");
          break;
        case "*":
          this.advance();
          this.push(TokenType.OPERATOR_MUL, "*");
          break;
        case "/":
          this.advance();
          this.push(TokenType.OPERATOR_DIV, "/");
          break;
        case "(":
          this.advance();
          this.push(TokenType.SEPARATOR_LPAREN, "(");
          break;
        case ")":
          this.advance();
          this.push(TokenType.SEPARATOR_RPAREN, ")");
          break;
        case "{":
          this.advance();
          this.push(TokenType.SEPARATOR_LBRACE, "{");
          break;
        case "}":
          this.advance();
          this.push(TokenType.SEPARATOR_RBRACE, "}");
          break;
        case ",":
          this.advance();
          this.push(TokenType.SEPARATOR_COMMA, ",");
          break;
        case ".":
          this.advance();
          this.push(TokenType.OPERATOR_DOT, ".");
          break;
        default:
          throw new Error(
            `Tokenizer Error: Unexpected character '${char}' at ${this.line}:${this.column}`
          );
      }
    }

    this.tokens.push({
      type: TokenType.EOF,
      value: "EOF",
      line: this.line,
      column: this.column,
    });

    return this.tokens;
  }

  private advance(n = 1) {
    for (let i = 0; i < n; i++) {
      const char = this.source[this.cursor];
      if (char === "\n") {
        this.line++;
        this.column = 1;
      } else {
        this.column++;
      }
      this.cursor++;
    }
  }

  private skipWhitespace() {
    while (this.cursor < this.source.length && /\s/.test(this.source[this.cursor])) {
      this.advance();
    }
  }

  private skipComment() {
    while (this.cursor < this.source.length && this.source[this.cursor] !== "\n") {
      this.advance();
    }
    this.skipWhitespace();
  }

  private tokenizeIdentifierOrKeyword() {
    const start = this.cursor;
    const startColumn = this.column;

    while (
      this.cursor < this.source.length &&
      /[a-zA-Z0-9_]/.test(this.source[this.cursor])
    ) {
      this.advance();
    }

    const value = this.source.substring(start, this.cursor);
    const type = KEYWORDS[value] ?? TokenType.LITERAL_IDENTIFIER;

    this.tokens.push({ type, value, line: this.line, column: startColumn });
  }

  private tokenizeNumber() {
    const start = this.cursor;
    const startColumn = this.column;

    while (
      this.cursor < this.source.length &&
      /[0-9.]/.test(this.source[this.cursor])
    ) {
      this.advance();
    }

    const raw = this.source.substring(start, this.cursor);
    const parsed = parseFloat(raw);
    if (Number.isNaN(parsed)) {
      throw new Error(
        `Tokenizer Error: Invalid number format '${raw}' at ${this.line}:${startColumn}`
      );
    }

    this.tokens.push({
      type: TokenType.LITERAL_NUMBER,
      value: parsed,
      line: this.line,
      column: startColumn,
    });
  }

  private tokenizeString() {
    const quoteChar = this.source[this.cursor];
    this.advance();
    const start = this.cursor;
    const startColumn = this.column;
    let value = "";

    while (this.cursor < this.source.length) {
      if (this.source[this.cursor] === quoteChar) {
        value = this.source.substring(start, this.cursor);
        this.advance();
        this.tokens.push({
          type: TokenType.LITERAL_STRING,
          value,
          line: this.line,
          column: startColumn,
        });
        return;
      }
      this.advance();
    }

    throw new Error(
      `Tokenizer Error: Unterminated string literal at ${this.line}:${this.column}`
    );
  }

  private push(type: TokenType, value: any) {
    this.tokens.push({ type, value, line: this.line, column: this.column - 1 });
  }
}
