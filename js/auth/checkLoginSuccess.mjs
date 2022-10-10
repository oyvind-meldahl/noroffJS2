import { loginUser } from "./loginUser.mjs";

const errorField = document.querySelector(".errormsg");

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
