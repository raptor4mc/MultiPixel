export type FileNode = {
  type: "file";
  content: string;
};

export type FolderNode = {
  type: "folder";
  children: Record<string, FileSystemNode>;
};

export type FileSystemNode = FileNode | FolderNode;

export type FileSystemRoot = Record<string, FileSystemNode>;

export interface FileLookupResult {
  node: FileSystemNode | null;
  parent: Record<string, FileSystemNode> | null;
}

export function getFileSystemNode(
  fs: FileSystemRoot,
  fullPath: string
): FileLookupResult {
  const parts = fullPath.split("/").filter((p) => p.length > 0);

  if (parts.length === 0) {
    return { node: fs as any, parent: null };
  }

  let current: FileSystemNode | FileSystemRoot = fs;
  let parent: Record<string, FileSystemNode> | null = null;

  for (const part of parts) {
    if (!("type" in current)) {
      parent = current as Record<string, FileSystemNode>;
    } else {
      if (current.type !== "folder" || !current.children) {
        return { node: null, parent: null };
      }
      parent = current.children;
    }

    const next = parent[part];
    if (!next) return { node: null, parent: null };
    current = next;
  }

  return { node: current as FileSystemNode, parent };
}

export function flattenFileSystem(
  fs: FileSystemRoot,
  currentPath = "",
  files: Record<string, string> = {}
): Record<string, string> {
  const children = fs;

  Object.keys(children).forEach((name) => {
    const child = children[name];
    const fullPath = currentPath ? `${currentPath}/${name}` : name;

    if (child.type === "file") {
      files[fullPath] = child.content;
    } else if (child.type === "folder" && child.children) {
      flattenFileSystem(child.children, fullPath, files);
    }
  });

  return files;
}
