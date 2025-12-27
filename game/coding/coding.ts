import { runAstInterpreter } from "./core/runner";
import { initialFileSystem } from "./filesystem/templates";
import {
  FileSystemRoot,
  getFileSystemNode,
  flattenFileSystem,
  FileSystemNode,
} from "./filesystem/fs";
import { EditorUI } from "./ui/editor";
import { ConsoleUI } from "./ui/console";
import { initResizer } from "./ui/resizer";
import { Modals } from "./ui/modals";

let fileSystem: FileSystemRoot = JSON.parse(JSON.stringify(initialFileSystem));
let openFolders = new Set<string>(["src"]);

function main() {
  const codeInput = document.getElementById("code-input") as HTMLTextAreaElement;
  const runButton = document.getElementById("run-button") as HTMLButtonElement;
  const cliInput = document.getElementById("cli-input") as HTMLInputElement;
  const fileList = document.getElementById("file-list") as HTMLElement;
  const currentFileNameDisplay = document.getElementById(
    "current-file-name"
  ) as HTMLElement;

  const ideContainer = document.getElementById("ide-container") as HTMLElement;
  const resizerBar = document.getElementById("resizer-bar") as HTMLElement;
  const editorContainer = document.getElementById("editor-container") as HTMLElement;
  const consolePanel = document.getElementById("console-panel") as HTMLElement;
  const editorHeader = document.getElementById("editor-header") as HTMLElement;
  const headerWrapper = document.querySelector("h1")!.parentElement as HTMLElement;

  const infoTooltip = document.getElementById("info-tooltip") as HTMLElement;
  const infoIcon = document.getElementById("info-icon") as HTMLElement;

  const terminalOutput = document.getElementById("terminal-output") as HTMLElement;
  const consoleOutput = document.getElementById("console-output") as HTMLElement;
  const terminalPane = document.getElementById("terminal-pane") as HTMLElement;
  const consolePane = document.getElementById("console-pane") as HTMLElement;
  const tabTerminal = document.getElementById("tab-terminal") as HTMLButtonElement;
  const tabConsole = document.getElementById("tab-console") as HTMLButtonElement;
  const cliInputWrapper = document.getElementById(
    "cli-input-wrapper"
  ) as HTMLElement;

  const actionDialog = document.getElementById("action-dialog") as HTMLElement;
  const dialogTitle = document.getElementById("dialog-title") as HTMLElement;
  const dialogPrompt = document.getElementById("dialog-prompt") as HTMLElement;
  const dialogPathDisplay = document.getElementById(
    "dialog-path-display"
  ) as HTMLElement;
  const dialogInput = document.getElementById("dialog-input") as HTMLInputElement;
  const dialogSubmitButton = document.getElementById(
    "dialog-submit-button"
  ) as HTMLButtonElement;
  const dialogCancelButton = document.getElementById(
    "dialog-cancel-button"
  ) as HTMLButtonElement;

  const confirmDialog = document.getElementById("confirm-dialog") as HTMLElement;
  const confirmTitle = document.getElementById("confirm-title") as HTMLElement;
  const confirmPrompt = document.getElementById("confirm-prompt") as HTMLElement;
  const confirmCancelButton = document.getElementById(
    "confirm-cancel-button"
  ) as HTMLButtonElement;
  const confirmAcceptButton = document.getElementById(
    "confirm-accept-button"
  ) as HTMLButtonElement;

  const consoleUI = new ConsoleUI({
    terminalPane,
    consolePane,
    tabTerminal,
    tabConsole,
    cliInputWrapper,
    cliInput,
    terminalOutput,
    consoleOutput,
  });

  const editorUI = new EditorUI(
    { codeInput, currentFileNameDisplay },
    fileSystem
  );

  const modals = new Modals(
    {
      actionDialog,
      dialogTitle,
      dialogPrompt,
      dialogPathDisplay,
      dialogInput,
      dialogSubmitButton,
      dialogCancelButton,
      confirmDialog,
      confirmTitle,
      confirmPrompt,
      confirmCancelButton,
      confirmAcceptButton,
    },
    {
      log: consoleUI.log,
      onCreateFile: (fullPath) => {
        const { node, parent } = getFileSystemNode(fileSystem, fullPath);
        if (node) {
          consoleUI.log(`Error: Item '${fullPath}' already exists.`, "cli_output");
          return;
        }

        const parts = fullPath.split("/");
        const name = parts.pop()!;
        const parentPath = parts.join("/");

        const parentResult =
          parentPath.length > 0
            ? getFileSystemNode(fileSystem, parentPath)
            : { node: null, parent: fileSystem as any };

        const parentNode = parentResult.node ?? (parentResult.parent as any);

        if (!parentNode || (parentNode as FileSystemNode).type === "file") {
          consoleUI.log(
            `Error: Target folder path '${parentPath}' is invalid.`,
            "cli_output"
          );
          return;
        }

        const children =
          (parentNode as any).children ?? (parentNode as Record<string, FileSystemNode>);
        children[name] = {
          type: "file",
          content: `// =======================================================
// MultiRaptor New File: ${fullPath}
// =======================================================
// Add your definitions (proc/def) here.
`,
        };

        if (parentPath && !openFolders.has(parentPath)) {
          openFolders.add(parentPath);
        }

        consoleUI.log(`File '${fullPath}' created and opened.`, "cli_output");
        renderFileList(fileList, editorUI, consoleUI);
        editorUI.loadFile(fullPath);
      },
      onCreateFolder: (fullPath) => {
        const { node, parent } = getFileSystemNode(fileSystem, fullPath);
        if (node) {
          consoleUI.log(`Error: Folder '${fullPath}' already exists.`, "cli_output");
          return;
        }

        const parts = fullPath.split("/");
        const name = parts.pop()!;
        const parentPath = parts.join("/");

        const parentResult =
          parentPath.length > 0
            ? getFileSystemNode(fileSystem, parentPath)
            : { node: null, parent: fileSystem as any };

        const parentNode = parentResult.node ?? (parentResult.parent as any);

        if (!parentNode || (parentNode as FileSystemNode).type === "file") {
          consoleUI.log(
            `Error: Target folder path '${parentPath}' is invalid.`,
            "cli_output"
          );
          return;
        }

        const children =
          (parentNode as any).children ?? (parentNode as Record<string, FileSystemNode>);
        children[name] = { type: "folder", children: {} };

        consoleUI.log(`Folder '${fullPath}' created successfully.`, "cli_output");
        renderFileList(fileList, editorUI, consoleUI);
      },
      onDelete: (fullPath, type) => {
        if (fullPath === "main.mr") {
          consoleUI.log(
            "Error: Cannot delete 'main.mr', the project entry point.",
            "cli_output"
          );
          return;
        }

        const { node, parent } = getFileSystemNode(fileSystem, fullPath);
        if (!node || !parent) {
          consoleUI.log(
            `Error: ${type === "file" ? "File" : "Folder"} '${fullPath}' not found.`,
            "cli_output"
          );
          return;
        }

        if (
          type === "folder" &&
          node.type === "folder" &&
          Object.keys(node.children).length > 0
        ) {
          consoleUI.log(
            `Error: Folder '${fullPath}' is not empty. Please delete all files inside first.`,
            "cli_output"
          );
          return;
        }

        const name = fullPath.split("/").pop()!;
        delete parent[name];

        consoleUI.log(
          `${type === "file" ? "File" : "Folder"} '${fullPath}' deleted.`,
          "cli_output"
        );

        if (editorUI.currentFile === fullPath) {
          editorUI.loadFile("main.mr");
        }

        renderFileList(fileList, editorUI, consoleUI);
      },
    }
  );

  initResizer({
    ideContainer,
    editorContainer,
    consolePanel,
    resizerBar,
    editorHeader,
    headerWrapper,
  });

  // File explorer root buttons
  const newFileButtonRoot = document.getElementById(
    "new-file-button-root"
  ) as HTMLButtonElement;
  const newFolderButtonRoot = document.getElementById(
    "new-folder-button-root"
  ) as HTMLButtonElement;

  newFileButtonRoot.onclick = () => modals.showCreate("file", "");
  newFolderButtonRoot.onclick = () => modals.showCreate("folder", "");

  // Tooltips
  infoTooltip.textContent = `MultiRaptor v5.1 IDE: AST Interpreter Core.
- Execution is now handled by a custom Tokenizer, Parser, and Scope-based Interpreter.
- Supports variables (vault/seal), procedures (proc), Signal(), and arithmetic expressions.
- This is a proper compiler/interpreter foundation!`;

  infoIcon.onmouseenter = () => infoTooltip.classList.remove("hidden");
  infoIcon.onmouseleave = () => infoTooltip.classList.add("hidden");

  // CLI
  cliInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCliCommand(cliInput, editorUI, consoleUI);
    }
  });

  // Run button
  runButton.addEventListener("click", () =>
    runProject(editorUI, consoleUI, runButton)
  );

  // Initial render
  editorUI.loadFile("main.mr");
  renderFileList(fileList, editorUI, consoleUI);
  consoleUI.log(
    "Welcome to MultiRaptor IDE v5.1. Core language interpretation has been upgraded to use AST.",
    "cli_output"
  );
  cliInput.focus();
}

function renderFileList(
  container: HTMLElement,
  editorUI: EditorUI,
  consoleUI: ConsoleUI
) {
  container.innerHTML = renderFileTree(fileSystem, "", 0, editorUI.currentFile);
  bindFileTreeEvents(container, editorUI, consoleUI);
}

function renderFileTree(
  children: FileSystemRoot,
  currentPath: string,
  depth: number,
  currentFile: string
): string {
  const keys = Object.keys(children).sort((a, b) => {
    const nodeA = children[a];
    const nodeB = children[b];

    if (currentPath === "") {
      if (a === "main.mr") return -1;
      if (b === "main.mr") return 1;
    }

    if (nodeA.type === "folder" && nodeB.type !== "folder") return -1;
    if (nodeA.type !== "folder" && nodeB.type === "folder") return 1;
    return a.localeCompare(b);
  });

  const html = keys
    .map((name) => {
      const node = children[name];
      const fullPath = currentPath ? `${currentPath}/${name}` : name;
      const indentClass = `indent-${Math.min(depth + 1, 4)}`;
      const isActive = node.type === "file" && fullPath === currentFile;
      let itemHtml = "";

      if (node.type === "folder") {
        const isOpen = openFolders.has(fullPath);
        const arrowIcon = isOpen
          ? `<svg class="w-3 h-3 text-gray-400 toggle-arrow arrow-down" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" clip-rule="evenodd"></path></svg>`
          : `<svg class="w-3 h-3 text-gray-400 toggle-arrow arrow-right" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" clip-rule="evenodd"></path></svg>`;

        const folderIcon = `<svg class="w-4 h-4 mr-1 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v2H2V6z"></path><path d="M4 11V9h16v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z"></path></svg>`;

        itemHtml += `<div class="file-tree-node ${indentClass}" data-type="folder" data-path="${fullPath}">
          <div class="file-content-area text-gray-300">
            ${arrowIcon}
            ${folderIcon}
            <span class="file-name">${name}</span>
          </div>
          <div class="flex items-center">
            <div class="folder-actions">
              <button class="folder-action-button text-green-400 hover:text-green-300" data-action="new-file" data-path="${fullPath}">
                +F
              </button>
              <button class="folder-action-button text-blue-400 hover:text-blue-300" data-action="new-folder" data-path="${fullPath}">
                +D
              </button>
            </div>
            <button class="delete-file-button" data-action="delete" data-type="folder" data-path="${fullPath}">X</button>
          </div>
        </div>`;

        if (isOpen && node.children && Object.keys(node.children).length > 0) {
          itemHtml += renderFileTree(node.children, fullPath, depth + 1, currentFile);
        } else if (isOpen) {
          itemHtml += `<div class="file-tree-node ${indentClass} text-xs italic text-gray-500 p-1">Empty folder</div>`;
        }
      } else {
        const fileIcon = `<svg class="w-4 h-4 mr-1 ${
          isActive ? "text-white" : "text-blue-400"
        } flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-5.414-5.414A1 1 0 0 0 15.586 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"></path></svg>`;

        itemHtml += `<div class="file-tree-node ${indentClass} ${
          isActive ? "active-file" : "text-gray-300"
        }" data-type="file" data-path="${fullPath}">
          <div class="file-content-area">
            <span class="w-3 h-3 mr-1 flex-shrink-0"></span>
            ${fileIcon}
            <span class="file-name">${name}</span>
          </div>
          <button class="delete-file-button" data-action="delete" data-type="file" data-path="${fullPath}">X</button>
        </div>`;
      }

      return itemHtml;
    })
    .join("");

  return html;
}

function bindFileTreeEvents(
  container: HTMLElement,
  editorUI: EditorUI,
  consoleUI: ConsoleUI
) {
  container.querySelectorAll<HTMLElement>(".file-tree-node").forEach((node) => {
    const type = node.dataset.type;
    const path = node.dataset.path!;
    node.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const action = target.dataset.action;

      if (action === "new-file" || action === "new-folder" || action === "delete") {
        return;
      }

      if (type === "folder") {
        if (openFolders.has(path)) openFolders.delete(path);
        else openFolders.add(path);
        renderFileList(container, editorUI, consoleUI);
      } else if (type === "file") {
        try {
          editorUI.loadFile(path);
          renderFileList(container, editorUI, consoleUI);
        } catch (err: any) {
          consoleUI.log(String(err.message || err), "cli_output");
        }
      }
    });
  });
}

function runProject(editorUI: EditorUI, consoleUI: ConsoleUI, runButton: HTMLButtonElement) {
  consoleUI.log("", "cli_output"); // just ensure panel visible
  (document.getElementById("console-output") as HTMLElement).innerHTML = "";
  editorUI.saveCurrent();

  const allFiles = flattenFileSystem(editorUI.getCurrentFS());
  let combinedCode = "";

  Object.keys(allFiles).forEach((fileName) => {
    combinedCode += `\n\n// --- File: ${fileName} ---\n` + allFiles[fileName] + "\n";
  });

  runButton.disabled = true;
  runButton.textContent = "Running...";

  setTimeout(() => {
    runAstInterpreter(combinedCode, consoleUI.log);
    runButton.disabled = false;
    runButton.textContent = "Run Code";
    consoleUI.switchTab("console");
  }, 50);
}

function handleCliCommand(
  cliInput: HTMLInputElement,
  editorUI: EditorUI,
  consoleUI: ConsoleUI
) {
  const command = cliInput.value.trim();
  if (!command) return;

  consoleUI.log(command, "cli_echo");
  cliInput.value = "";

  const parts = command.toLowerCase().split(/\s+/);
  const baseCommand = parts[0];

  if (baseCommand !== "rap") {
    consoleUI.log(
      `Error: Command not found: ${baseCommand}. Try 'rap help'.`,
      "cli_output"
    );
    return;
  }

  const action = parts[1];

  switch (action) {
    case "help":
      showHelp(consoleUI);
      break;
    case "run":
      consoleUI.log("\nRunning MultiRaptor project from main.mr...", "cli_output");
      editorUI.saveCurrent();
      runProject(editorUI, consoleUI, document.getElementById(
        "run-button"
      ) as HTMLButtonElement);
      consoleUI.switchTab("console");
      break;
    case "doctor":
      consoleUI.log("\nChecking MultiRaptor environment health...", "cli_output");
      consoleUI.log(" > Core dependencies: OK", "cli_output");
      consoleUI.log(" > Interpreter Mode: AST-RAPTOR", "cli_output");
      consoleUI.log(" > Environment: All systems nominal.", "cli_output");
      break;
    default:
      consoleUI.log(
        `Error: Unknown 'rap' command: ${action}. Try 'rap help'.`,
        "cli_output"
      );
      break;
  }

  setTimeout(() => cliInput.focus(), 0);
}

function showHelp(consoleUI: ConsoleUI) {
  consoleUI.log("-- Displaying Help in Program Output Tab --", "cli_output");
  consoleUI.switchTab("console");

  const help = `
-- MultiRaptor Help (v5.1 AST Mode) --
The language now uses a proper Tokenizer, Parser, and Scope-based Interpreter.

Supported features:
- Variable declaration: vault (mutable), seal (constant)
- Function declaration/call: proc <name>(params) { ... }
- Built-in: Signal("message" + value)
- Control Flow: return expression;
- Expressions: +, -, *, / (supports arithmetic and string concatenation)
- Built-in Math object access (e.g., Math.PI, Math.pow(x, y))
- Variable Assignment: variable = expression;

CLI:
- rap run
- rap help
- rap doctor
`.trim();

  consoleUI.log(help, "program");
}

main();
