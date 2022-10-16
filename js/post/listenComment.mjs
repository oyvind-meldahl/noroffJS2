import { createNewComment } from "./createcomment.mjs";

/** Listens for the user to submit a comment. Passes data to createNewComment(). */

export function listenComment() {
  const form = document.getElementById("commentpost");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const commentDetails = Object.fromEntries(formData.entries());
    createNewComment(commentDetails);
  });
}
