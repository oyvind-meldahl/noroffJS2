import { baseURL } from "/js/baseVariables.mjs";

/** Takes information provided by user and sends to server for validation. If success it will send user to login-page. Else, show error to user. */

export async function registerUser(userDetails) {
  const result = await fetch(baseURL + "auth/register", {
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const jsonResults = await result.json();
  console.log(jsonResults);

  if (jsonResults.statusCode == 400) {
    document.querySelector(".error").innerHTML =
      "error, " + jsonResults.message;
    document.querySelector(".error").style.display = "block";
    console.log(jsonResults.message);
  } else if ((jsonResults.statusCode = 201)) {
    window.location.assign("/login.html");
  } else {
    console.log(jsonResults.statusCode);
    console.log(jsonResults.message);
  }
}
