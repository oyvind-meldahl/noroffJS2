const errorField = document.querySelector(".errormsg");

/** If user recieves accessToken after login, login is successful. If not, display error. */

export function checkLoginSuccess(jsonResults) {
  if (jsonResults.accessToken) {
    window.location.replace("/profile.html");
  } else {
    console.log("access denied");
    console.log(jsonResults.message);
    console.log(errorField);
    errorField.innerHTML = jsonResults.message;
    errorField.style.display = "block";
  }
}
