export interface ResizerRefs {
  ideContainer: HTMLElement;
  editorContainer: HTMLElement;
  consolePanel: HTMLElement;
  resizerBar: HTMLElement;
  editorHeader: HTMLElement;
  headerWrapper: HTMLElement;
}

export function initResizer(refs: ResizerRefs) {
  const { ideContainer, editorContainer, consolePanel, resizerBar, editorHeader } =
    refs;

  let isResizing = false;
  const RESIZER_HEIGHT = 5;
  const MIN_PANEL_HEIGHT = 100;

  const computeInitialHeights = () => {
    const headerHeight = refs.headerWrapper.offsetHeight + 16;
    const ideHeight = window.innerHeight - headerHeight - 32;

    ideContainer.style.height = `${ideHeight}px`;

    const editorHeaderHeight = editorHeader.offsetHeight;
    const initialEditorHeight = Math.floor(ideHeight * 0.7);
    const initialConsoleHeight = ideHeight - initialEditorHeight - RESIZER_HEIGHT;

    editorContainer.style.height = `${initialEditorHeight}px`;
    consolePanel.style.height = `${initialConsoleHeight}px`;
    (editorContainer.querySelector("textarea") as HTMLTextAreaElement).style.height =
      `calc(100% - ${editorHeaderHeight}px)`;
  };

  computeInitialHeights();

  resizerBar.addEventListener("mousedown", () => {
    isResizing = true;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "row-resize";
  });

  const handleResize = (e: MouseEvent) => {
    if (!isResizing) return;

    const rect = ideContainer.getBoundingClientRect();
    const newEditorHeight = e.clientY - rect.top;
    const totalContentHeight = rect.height;
    const editorHeaderHeight = editorHeader.offsetHeight;

    const clampedEditorHeight = Math.max(
      MIN_PANEL_HEIGHT + editorHeaderHeight,
      Math.min(newEditorHeight, totalContentHeight - MIN_PANEL_HEIGHT - RESIZER_HEIGHT)
    );

    editorContainer.style.height = `${clampedEditorHeight}px`;
    consolePanel.style.height = `${
      totalContentHeight - clampedEditorHeight - RESIZER_HEIGHT
    }px`;

    (editorContainer.querySelector("textarea") as HTMLTextAreaElement).style.height =
      `calc(100% - ${editorHeaderHeight}px)`;
  };

  const stopResize = () => {
    isResizing = false;
    document.body.style.userSelect = "auto";
    document.body.style.cursor = "default";
  };

  document.addEventListener("mousemove", handleResize);
  document.addEventListener("mouseup", stopResize);

  window.addEventListener("resize", () => computeInitialHeights());
}
