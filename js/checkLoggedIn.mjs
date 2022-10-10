const newbutton = document.querySelector(".newpostbutton");
const searchbutton = document.querySelector(".searchbutton");
const profilebutton = document.querySelector(".profilebutton");
const mainMain = document.querySelector(".mainmain");
const mainHero = document.querySelector(".mainhero");
const token = localStorage.getItem("accessToken");
let path = location.pathname;

if (!token && path === "/index.html") {
  newbutton.style.display = "none";
  searchbutton.style.display = "none";
  profilebutton.style.display = "none";
  mainMain.style.display = "none";
  mainHero.style.display = "block";
}

export function checkLoggedIn() {
  const loginMenu = document.querySelector(".login");
  if (localStorage.getItem("accessToken") !== null) {
    loginMenu.innerHTML = '<a href="#">logout</a>';
    loginMenu.addEventListener("click", function () {
      localStorage.clear();
      window.location.assign("/index.html");
    });
  } else {
    loginMenu.innerHTML = '<a href="/login.html">log in</a>';
  }
}
