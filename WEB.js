window.addEventListener("load", function () {
  const isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === "enabled") {
    document.body.classList.add("dark-theme");
    document.getElementById("icon").src = "Dark.png";
  }
});


var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/Dark.png";
    localStorage.setItem("darkMode", "enabled");
  } else {
    icon.src = "img/Light.png";
    localStorage.setItem("darkMode", "disabled");
  }
};

const logo = document.getElementById("logo");
logo.addEventListener("click", function () {
  window.location.href = "WEB.html";
});