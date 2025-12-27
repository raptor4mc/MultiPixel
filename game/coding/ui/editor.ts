import { FileSystemRoot, getFileSystemNode } from "../filesystem/fs";

export interface EditorUIRefs {
  codeInput: HTMLTextAreaElement;
  currentFileNameDisplay: HTMLElement;
}

export class EditorUI {
  private refs: EditorUIRefs;
  private fs: FileSystemRoot;
  currentFile: string = "main.mr";

  constructor(refs: EditorUIRefs, fs: FileSystemRoot) {
    this.refs = refs;
    this.fs = fs;
  }

  loadFile(path: string) {
    const { node } = getFileSystemNode(this.fs, path);
    if (!node || node.type !== "file") {
      throw new Error(`Cannot open path '${path}'. It is not a file or does not exist.`);
    }

    this.saveCurrent();
    this.currentFile = path;
    this.refs.codeInput.value = node.content || "";
    this.refs.currentFileNameDisplay.textContent = path;
  }

  saveCurrent() {
    const { node } = getFileSystemNode(this.fs, this.currentFile);
    if (node && node.type === "file") {
      node.content = this.refs.codeInput.value;
    }
  }

  getCurrentFS() {
    return this.fs;
  }
}
