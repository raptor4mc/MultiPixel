// core/scope.ts

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
      throw new Error(`Variable '${name}' already defined in this scope.`);
    }
    this.variables[name] = { value, isConstant };
  }

  get(name: string): any {
    // Object access: obj.prop
    if (name.includes(".")) {
      const [objName, propName] = name.split(".");
      const obj = this.get(objName);

      if (typeof obj === "object" && obj !== null && propName in obj) {
        return (obj as any)[propName];
      }

      throw new Error(`Property '${propName}' does not exist on '${objName}'.`);
    }

    if (this.variables[name]) {
      return this.variables[name].value;
    }

    if (this.parent) {
      return this.parent.get(name);
    }

    throw new Error(`Variable '${name}' is not defined.`);
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
