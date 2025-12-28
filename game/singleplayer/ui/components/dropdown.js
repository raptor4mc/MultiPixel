export function Dropdown(options, onSelect) {
  const select = document.createElement("select");
  options.forEach(o => {
    const opt = document.createElement("option");
    opt.value = o.id;
    opt.textContent = o.name;
    select.appendChild(opt);
  });
  select.onchange = () => onSelect(select.value);
  return select;
}
