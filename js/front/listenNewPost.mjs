import { createNewPost } from "./createNewPost.mjs";

export function listenNewPost() {
  const form = document.getElementById("newpost");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newPostDetails = Object.fromEntries(formData.entries());
    if (newPostDetails.media === "") {
      delete newPostDetails.media;
    }
    console.log(newPostDetails);
    createNewPost(newPostDetails);
  });
}
