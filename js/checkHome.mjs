export function checkHome() {
  const loginMenu = document.querySelector(".login");
  const mainMain = document.querySelector(".mainmain");
  const mainHero = document.querySelector(".mainhero");

  if (localStorage.getItem("accessToken") !== null) {
    loginMenu.innerHTML = '<a href="#">logout</a>';
    loginMenu.addEventListener("click", function () {
      localStorage.removeItem("accessToken");
      window.location.assign("/index.html");
    });
    mainMain.style.display = "block";
    mainHero.style.display = "none";
  } else {
    loginMenu.innerHTML = '<a href="/login.html">log in</a>';
  }
}
