import { Tokenizer } from "./tokenizer";
import { Parser } from "./parser";
import { Interpreter, ReturnValue, ConsoleLogger } from "./interpreter";

export function runAstInterpreter(code: string, log: ConsoleLogger) {
  log(`Executing MultiRaptor code in AST-RAPTOR mode...`, "cli_output");

  try {
    const tokenizer = new Tokenizer(code);
    const tokens = tokenizer.tokenize();
    log(`[Tokenizer Success] ${tokens.length} tokens generated.`, "cli_output");

    const parser = new Parser(tokens);
    const ast = parser.parse();
    log("[Parser Success] AST generated.", "cli_output");

    const interpreter = new Interpreter(ast as any, log);
    interpreter.interpret();
  } catch (e) {
    if (e instanceof ReturnValue) {
      log(`[Execution Finished] Exit with value: ${e.value}`, "cli_output");
    } else if (e instanceof Error) {
      log(e.message, "error");
    } else {
      log(String(e), "error");
    }
  }
}
