const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbar = document.getElementById("navbar-default");

button.addEventListener("click", () => {
  const expanded = button.getAttribute("aria-expanded") === "true" || false;
  button.setAttribute("aria-expanded", !expanded);
  navbar.classList.toggle("hidden");
});

