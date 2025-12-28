export function saveWorld(settings) {
  const list = JSON.parse(localStorage.getItem("worlds") || "[]");
  list.push(settings);
  localStorage.setItem("worlds", JSON.stringify(list));
}
