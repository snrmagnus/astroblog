const menu = document.querySelector("#menu-button");

menu?.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") === "true" || false;
  menu.setAttribute("aria-expanded", String(!expanded));
  console.log(menu);
});
