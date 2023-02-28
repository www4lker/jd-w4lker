function setThemeFromBrowser() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const body = document.body;
  if (isDarkMode) {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
}

// Chame a função para definir o tema no carregamento da página
setThemeFromBrowser();
