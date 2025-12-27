export type LogType = "program" | "error" | "cli_output" | "cli_echo";

export interface ConsoleElements {
  terminalOutput: HTMLElement;
  consoleOutput: HTMLElement;
}

export const createLogger = (elements: ConsoleElements) => {
  const { terminalOutput, consoleOutput } = elements;

  const log = (message: string, type: LogType = "program") => {
    const isProgramOutput = type === "program" || type === "error";
    const targetElement = isProgramOutput ? consoleOutput : terminalOutput;
    const output = document.createElement("div");
    output.classList.add("font-mono");

    if (type === "program") {
      output.textContent = ">> " + message;
      output.className = "text-green-400";
    } else if (type === "error") {
      output.textContent = `!! RUNTIME ERROR: ${message}`;
      output.className = "text-red-500 font-bold";
    } else if (type === "cli_output") {
      output.textContent = message;
      output.className = "text-gray-300";
    } else if (type === "cli_echo") {
      output.textContent = `$ rap > ${message}`;
      output.className = "text-blue-400 font-bold";
    }

    targetElement.appendChild(output);
    (targetElement as HTMLElement).scrollTop = targetElement.scrollHeight;
  };

  return log;
};
