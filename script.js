// Toggle Dark / Light Mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
};

// Active Nav on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a, .bottom-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 60) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
