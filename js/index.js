function menuToggle() {
    document.getElementById("navlinks").classList.toggle("open");
};


// 2. Dark/Light Theme Toggle with Safety Checks
const toggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const themeIcon = document.getElementById("theme-icon");

const MOON = "\u263E"; // 🌙 shown in light mode (click to go dark)
const SUN  = "\u2600"; // ☀️ shown in dark mode (click to go light)


if (toggleBtn) {
  // Set the button label to match the theme already applied by the head script
  toggleBtn.textContent =
    htmlElement.getAttribute("data-theme") === "dark" ? SUN : MOON;

  toggleBtn.addEventListener("click", () => {
    if (htmlElement.getAttribute("data-theme") === "dark") {
      htmlElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = MOON;
    } else {
      htmlElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerText = SUN;
    }
  });
}