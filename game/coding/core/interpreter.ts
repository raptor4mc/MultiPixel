// core/interpreter.ts

import {
  ASTNode,
  ASTNodeType,
  CallExpressionNode,
  BinaryExpressionNode,
} from "./ast";
import { Scope } from "./scope";

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

    // Built-in: Signal()
    this.functions["Signal"] = {
      isBuiltin: true,
      execute: (args: any[]) => {
        this.consoleLogger(args.join(""), "program");
      },
    };

    // Built-in: Math
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

    // Register all procedures first
    program.body.forEach((node) => {
      if (node.type === ASTNodeType.ProcDeclaration) {
        this.functions[(node as any).name] = node as any;
      }
    });

    // Execute top-level statements
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
        throw new Error(`Unknown AST node type: ${(node as any).type}`);
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

    // Object method call: obj.method()
    if (name.includes(".")) {
      const [objName, methodName] = name.split(".");
      const obj = this.currentScope.get(objName);

      if (
        typeof obj === "object" &&
        obj !== null &&
        typeof (obj as any)[methodName] === "function"
      ) {
        const args = node.arguments.map((arg) => this.evaluate(arg));
        return (obj as any)[methodName](...args);
      }

      throw new Error(`Method '${name}' is not defined or callable.`);
    }

    const func = this.functions[name];
    if (!func) {
      throw new Error(`Function '${name}' is not defined.`);
    }

    const args = node.arguments.map((arg) => this.evaluate(arg));

    // Built-in
    if (func.isBuiltin && func.execute) {
      return func.execute(args);
    }

    // User-defined procedure
    const calleeScope = new Scope(this.globalScope);
    func.params!.forEach((paramName, i) => {
      calleeScope.define(paramName, args[i], false);
    });

    const previousScope = this.currentScope;
    this.currentScope = calleeScope;

    let result: any = undefined;

    try {
      func.body!.forEach((stmt) => this.evaluate(stmt));
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
        `Operator '${node.operator}' requires numbers, got ${typeof left} and ${typeof right}.`
      );
    }

    switch (node.operator) {
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        if (right === 0) throw new Error("Division by zero.");
        return left / right;
      default:
        throw new Error(`Unknown operator '${node.operator}'.`);
    }
  }
}
