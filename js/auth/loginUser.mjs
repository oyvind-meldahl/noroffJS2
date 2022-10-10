import { baseURL } from "/js/baseVariables.mjs";
import { checkLoginSuccess } from "./checkLoginSuccess.mjs";

export async function loginUser(passDetails) {
  const result = await fetch(baseURL + "auth/login", {
    method: "POST",
    body: JSON.stringify(passDetails),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let jsonResults = await result.json();

  console.log(jsonResults);

  localStorage.setItem("accessToken", jsonResults.accessToken);
  localStorage.setItem("name", jsonResults.name);

  checkLoginSuccess(jsonResults);
}
