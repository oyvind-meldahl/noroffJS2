import { registerUser } from "./registerUser.mjs";

/** Listens for user submitting register-form, and passes details of said form to registerUser() */

export function listenRegister() {
  const form = document.getElementById("registerform");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const userDetails = Object.fromEntries(formData.entries());
    if (userDetails.avatar === "") {
      delete userDetails.avatar;
    }
    registerUser(userDetails);
  });
}
