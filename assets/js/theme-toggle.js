function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector("#theme-toggle");
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "Dark Theme";
  } else {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "Light Theme";
  }
}

const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", toggleTheme);

// Verifique se há uma preferência salva no local storage e defina o tema apropriadamente
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  toggleTheme();
}
