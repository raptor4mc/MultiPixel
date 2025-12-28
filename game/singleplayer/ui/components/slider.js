export function Slider(min, max, value, onChange) {
  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.oninput = () => onChange(+input.value);
  return input;
}
