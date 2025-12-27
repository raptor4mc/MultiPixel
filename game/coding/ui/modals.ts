import { FileSystemRoot, getFileSystemNode } from "../filesystem/fs";

export type ModalType = "file" | "folder";

export interface ModalRefs {
  actionDialog: HTMLElement;
  dialogTitle: HTMLElement;
  dialogPrompt: HTMLElement;
  dialogPathDisplay: HTMLElement;
  dialogInput: HTMLInputElement;
  dialogSubmitButton: HTMLButtonElement;
  dialogCancelButton: HTMLButtonElement;

  confirmDialog: HTMLElement;
  confirmTitle: HTMLElement;
  confirmPrompt: HTMLElement;
  confirmCancelButton: HTMLButtonElement;
  confirmAcceptButton: HTMLButtonElement;
}

export interface ModalHandlers {
  log: (msg: string, type?: string) => void;
  onCreateFile: (fullPath: string) => void;
  onCreateFolder: (fullPath: string) => void;
  onDelete: (fullPath: string, type: ModalType) => void;
}

export class Modals {
  private refs: ModalRefs;
  private handlers: ModalHandlers;

  private activeDialogType: ModalType | null = null;
  private dialogTargetPath = "";
  private pendingDelete: { path: string; type: ModalType } | null = null;

  constructor(refs: ModalRefs, handlers: ModalHandlers) {
    this.refs = refs;
    this.handlers = handlers;
    this.attachEvents();
  }

  private attachEvents() {
    this.refs.dialogSubmitButton.addEventListener("click", () => this.handleModalSubmit());
    this.refs.dialogCancelButton.addEventListener("click", () => this.hideModal());

    this.refs.dialogInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleModalSubmit();
      }
    });

    this.refs.confirmCancelButton.addEventListener("click", () =>
      this.handleConfirmation(false)
    );
    this.refs.confirmAcceptButton.addEventListener("click", () =>
      this.handleConfirmation(true)
    );
  }

  showCreate(type: ModalType, targetPath: string = "") {
    this.activeDialogType = type;
    this.dialogTargetPath = targetPath;

    this.refs.dialogTitle.textContent =
      type === "file" ? "Create New MultiRaptor File" : "Create New Folder";

    this.refs.dialogPrompt.textContent =
      type === "file"
        ? "Enter the filename. The .mr extension will be added if missing."
        : "Enter the folder name.";

    this.refs.dialogPathDisplay.textContent = targetPath
      ? `In Folder: /${targetPath}/`
      : "In Root Folder (/)";

    this.refs.dialogInput.value = "";
    this.refs.dialogInput.placeholder =
      type === "file" ? "new_module.mr" : "my_sub_folder";
    this.refs.dialogSubmitButton.textContent = "Create";

    this.refs.actionDialog.classList.remove("hidden");
    this.refs.dialogInput.focus();
  }

  hideModal() {
    this.refs.actionDialog.classList.add("hidden");
    this.activeDialogType = null;
    this.dialogTargetPath = "";
  }

  showDeleteConfirm(fullPath: string, type: ModalType) {
    this.pendingDelete = { path: fullPath, type };
    this.refs.confirmTitle.textContent =
      type === "file" ? `Delete File: ${fullPath}` : `Delete Folder: ${fullPath}`;
    this.refs.confirmPrompt.textContent = `Are you absolutely sure you want to delete ${
      type === "file" ? "file" : "folder"
    } '${fullPath}'? This action cannot be undone.`;

    this.refs.confirmDialog.classList.remove("hidden");
  }

  hideDeleteConfirm() {
    this.refs.confirmDialog.classList.add("hidden");
    this.pendingDelete = null;
  }

  private handleModalSubmit() {
    const input = this.refs.dialogInput.value.trim();
    if (!input) {
      this.handlers.log("Action cancelled: No name provided.", "cli_output");
      this.hideModal();
      return;
    }

    const targetPath = this.dialogTargetPath;
    if (this.activeDialogType === "file") {
      let name = input;
      if (!name.toLowerCase().endsWith(".mr")) {
        name += ".mr";
      }
      const fullPath = targetPath ? `${targetPath}/${name}` : name;
      this.handlers.onCreateFile(fullPath);
    } else if (this.activeDialogType === "folder") {
      const fullPath = targetPath ? `${targetPath}/${input}` : input;
      this.handlers.onCreateFolder(fullPath);
    }

    this.hideModal();
  }

  private handleConfirmation(isConfirmed: boolean) {
    if (isConfirmed && this.pendingDelete) {
      this.handlers.onDelete(this.pendingDelete.path, this.pendingDelete.type);
    } else if (this.pendingDelete) {
      this.handlers.log(
        `Deletion of '${this.pendingDelete.path}' cancelled.`,
        "cli_output"
      );
    }
    this.hideDeleteConfirm();
  }
}
