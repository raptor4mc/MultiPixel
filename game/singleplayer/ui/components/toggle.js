export function Toggle(label, onChange) {
  const el = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.onchange = () => onChange(input.checked);
  el.append(label, input);
  return el;
}
