export function Button(label, onClick) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.onclick = onClick;
  return btn;
}
