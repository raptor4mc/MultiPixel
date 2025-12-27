import { createLogger } from "../utils/logger";

export type TabName = "terminal" | "console";

export interface ConsoleUIRefs {
  terminalPane: HTMLElement;
  consolePane: HTMLElement;
  tabTerminal: HTMLButtonElement;
  tabConsole: HTMLButtonElement;
  cliInputWrapper: HTMLElement;
  cliInput: HTMLInputElement;
  terminalOutput: HTMLElement;
  consoleOutput: HTMLElement;
}

export class ConsoleUI {
  private refs: ConsoleUIRefs;
  private currentTab: TabName = "terminal";
  log: ReturnType<typeof createLogger>;

  constructor(refs: ConsoleUIRefs) {
    this.refs = refs;
    this.log = createLogger({
      terminalOutput: refs.terminalOutput,
      consoleOutput: refs.consoleOutput,
    });

    this.switchTab("terminal");
    this.attachEvents();
  }

  private attachEvents() {
    this.refs.tabTerminal.addEventListener("click", () => this.switchTab("terminal"));
    this.refs.tabConsole.addEventListener("click", () => this.switchTab("console"));
  }

  switchTab(tab: TabName) {
    this.currentTab = tab;

    const { terminalPane, consolePane, tabTerminal, tabConsole, cliInputWrapper } =
      this.refs;

    tabTerminal.classList.remove("active");
    tabConsole.classList.remove("active");
    terminalPane.style.display = "none";
    consolePane.style.display = "none";
    cliInputWrapper.style.display = "none";

    if (tab === "terminal") {
      terminalPane.style.display = "block";
      tabTerminal.classList.add("active");
      cliInputWrapper.style.display = "flex";
      this.refs.cliInput.focus();
    } else {
      consolePane.style.display = "block";
      tabConsole.classList.add("active");
    }
  }
}
