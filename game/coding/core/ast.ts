export enum ASTNodeType {
  Program = "Program",
  ProcDeclaration = "ProcDeclaration",
  VariableDeclaration = "VariableDeclaration",
  CallExpression = "CallExpression",
  BinaryExpression = "BinaryExpression",
  Literal = "Literal",
  Identifier = "Identifier",
  AssignmentExpression = "AssignmentExpression",
  ReturnStatement = "ReturnStatement",
  NoOp = "NoOp",
}

export interface ProgramNode {
  type: ASTNodeType.Program;
  body: ASTNode[];
}

export interface ProcDeclarationNode {
  type: ASTNodeType.ProcDeclaration;
  name: string;
  params: string[];
  body: ASTNode[];
}

export interface VariableDeclarationNode {
  type: ASTNodeType.VariableDeclaration;
  kind: "vault" | "seal";
  name: string;
  initializer: ASTNode;
}

export interface CallExpressionNode {
  type: ASTNodeType.CallExpression;
  name: string;
  arguments: ASTNode[];
}

export interface BinaryExpressionNode {
  type: ASTNodeType.BinaryExpression;
  operator: string;
  left: ASTNode;
  right: ASTNode;
}

export interface LiteralNode {
  type: ASTNodeType.Literal;
  value: any;
}

export interface IdentifierNode {
  type: ASTNodeType.Identifier;
  name: string;
}

export interface AssignmentExpressionNode {
  type: ASTNodeType.AssignmentExpression;
  name: string;
  value: ASTNode;
}

export interface ReturnStatementNode {
  type: ASTNodeType.ReturnStatement;
  argument: ASTNode;
}

export interface NoOpNode {
  type: ASTNodeType.NoOp;
}

export type ASTNode =
  | ProgramNode
  | ProcDeclarationNode
  | VariableDeclarationNode
  | CallExpressionNode
  | BinaryExpressionNode
  | LiteralNode
  | IdentifierNode
  | AssignmentExpressionNode
  | ReturnStatementNode
  | NoOpNode;
