import { loginUser } from "./loginUser.mjs";

/** Listens for user submitting login-form, and passes details of said form to loginUser() */

export function listenLogin() {
  const form = document.getElementById("login");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const passDetails = Object.fromEntries(formData.entries());
    loginUser(passDetails);
  });
}
