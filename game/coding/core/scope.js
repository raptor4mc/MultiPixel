import { ASTNode, ASTNodeType, CallExpressionNode, BinaryExpressionNode } from "./ast";

export class Scope {
  parent: Scope | null;
  private variables: Record<
    string,
    {
      value: any;
      isConstant: boolean;
    }
  > = {};

  constructor(parent: Scope | null = null) {
    this.parent = parent;
  }

  define(name: string, value: any, isConstant: boolean) {
    if (this.variables[name]) {
      throw new Error(`Variable '${name}' already defined in scope.`);
    }
    this.variables[name] = { value, isConstant };
  }

  get(name: string): any {
    if (name.includes(".")) {
      const parts = name.split(".");
      if (parts.length > 2) {
        throw new Error("Nested object access beyond 1 layer is not yet supported.");
      }
      const obj = this.get(parts[0]);
      if (typeof obj === "object" && obj !== null && parts[1] in obj) {
        return (obj as any)[parts[1]];
      }
    }

    if (this.variables[name]) {
      return this.variables[name].value;
    }

    if (this.parent) {
      return this.parent.get(name);
    }

    if (name === "Math" && typeof (window as any)["Math"] !== "undefined") {
      return (window as any)["Math"];
    }

    throw new Error(`Variable or function '${name}' is not defined.`);
  }

  set(name: string, value: any) {
    if (this.variables[name]) {
      if (this.variables[name].isConstant) {
        throw new Error(`Cannot assign to constant variable '${name}'.`);
      }
      this.variables[name].value = value;
      return;
    }

    if (this.parent) {
      this.parent.set(name, value);
      return;
    }

    throw new Error(`Cannot assign to undefined variable '${name}'.`);
  }
}

export class ReturnValue extends Error {
  value: any;
  constructor(value: any) {
    super("Return flow control");
    this.value = value;
  }
}

export type ConsoleLogger = (message: string, type?: string) => void;

interface ProcFn {
  isBuiltin?: boolean;
  execute?: (args: any[]) => any;
  params?: string[];
  body?: ASTNode[];
}

export class Interpreter {
  private ast: ASTNode;
  private consoleLogger: ConsoleLogger;

  private globalScope: Scope;
  private currentScope: Scope;
  private functions: Record<string, ProcFn> = {};

  constructor(ast: ASTNode, consoleLogger: ConsoleLogger) {
    this.ast = ast;
    this.consoleLogger = consoleLogger;
    this.globalScope = new Scope();
    this.currentScope = this.globalScope;

    this.functions["Signal"] = {
      isBuiltin: true,
      execute: (args: any[]) => {
        this.consoleLogger(args.join(""), "program");
      },
    };

    this.globalScope.define(
      "Math",
      {
        sqrt: Math.sqrt,
        pow: Math.pow,
        PI: Math.PI,
      },
      true
    );
  }

  interpret() {
    if (this.ast.type !== ASTNodeType.Program) {
      throw new Error("Interpreter expects a Program node as root.");
    }

    const program = this.ast;
    this.consoleLogger("AST Interpreter Initialized...", "program");

    program.body.forEach((node) => {
      if (node.type === ASTNodeType.ProcDeclaration) {
        this.functions[(node as any).name] = node as any;
      }
    });

    program.body.forEach((node) => {
      if (
        node.type !== ASTNodeType.ProcDeclaration &&
        node.type !== ASTNodeType.NoOp
      ) {
        this.evaluate(node);
      }
    });
  }

  evaluate(node: ASTNode): any {
    try {
      switch (node.type) {
        case ASTNodeType.VariableDeclaration:
          return this.evalVariableDeclaration(node as any);
        case ASTNodeType.AssignmentExpression:
          return this.evalAssignmentExpression(node as any);
        case ASTNodeType.CallExpression:
          return this.evalCallExpression(node as CallExpressionNode);
        case ASTNodeType.BinaryExpression:
          return this.evalBinaryExpression(node as BinaryExpressionNode);
        case ASTNodeType.Literal:
          return (node as any).value;
        case ASTNodeType.Identifier:
          return this.currentScope.get((node as any).name);
        case ASTNodeType.ReturnStatement:
          throw new ReturnValue(this.evaluate((node as any).argument));
        case ASTNodeType.ProcDeclaration:
        case ASTNodeType.NoOp:
          return;
        default:
          if ((node as any).type === "ExpressionStatement") {
            return this.evaluate((node as any).expression);
          }
          throw new Error(`Runtime Error: Unknown AST node type: ${(node as any).type}`);
      }
    } catch (e) {
      if (e instanceof ReturnValue) {
        throw e;
      }
      throw e;
    }
  }

  private evalVariableDeclaration(node: any) {
    const value = this.evaluate(node.initializer);
    const isConstant = node.kind === "seal";
    this.currentScope.define(node.name, value, isConstant);
  }

  private evalAssignmentExpression(node: any) {
    const value = this.evaluate(node.value);
    this.currentScope.set(node.name, value);
  }

  private evalCallExpression(node: CallExpressionNode): any {
    const name = node.name;

    if (name.includes(".")) {
      const parts = name.split(".");
      if (parts.length > 2) {
        throw new Error("Nested method calls beyond 1 layer are not yet supported.");
      }

      const obj = this.currentScope.get(parts[0]);
      const methodName = parts[1];

      if (
        typeof obj === "object" &&
        obj !== null &&
        typeof (obj as any)[methodName] === "function"
      ) {
        const evaluatedArgs = node.arguments.map((arg) => this.evaluate(arg));
        return (obj as any)[methodName](...evaluatedArgs);
      }

      throw new Error(`Method '${name}' is not defined or callable.`);
    }

    const func = this.functions[name];

    if (!func) {
      throw new Error(`Function '${name}' is not defined.`);
    }

    const evaluatedArgs = node.arguments.map((arg) => this.evaluate(arg));

    if (func.isBuiltin && func.execute) {
      return func.execute(evaluatedArgs);
    }

    if (!func.params || !func.body) {
      throw new Error(`Invalid procedure definition for '${name}'.`);
    }

    const calleeScope = new Scope(this.globalScope);
    func.params.forEach((paramName, i) => {
      calleeScope.define(paramName, evaluatedArgs[i], false);
    });

    const previousScope = this.currentScope;
    this.currentScope = calleeScope;

    let result: any = undefined;

    try {
      func.body.forEach((stmt) => this.evaluate(stmt));
    } catch (e) {
      if (e instanceof ReturnValue) {
        result = e.value;
      } else {
        throw e;
      }
    } finally {
      this.currentScope = previousScope;
    }

    return result;
  }

  private evalBinaryExpression(node: BinaryExpressionNode): any {
    const left = this.evaluate(node.left);
    const right = this.evaluate(node.right);

    if (node.operator === "+") {
      return String(left) + String(right);
    }

    if (typeof left !== "number" || typeof right !== "number") {
      throw new Error(
        `Operator '${node.operator}' requires two numbers, got ${typeof left} and ${typeof right}.`
      );
    }

    switch (node.operator) {
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        if (right === 0) {
          throw new Error("Division by zero.");
        }
        return left / right;
      default:
        throw new Error(`Unknown operator '${node.operator}'.`);
    }
  }
}
