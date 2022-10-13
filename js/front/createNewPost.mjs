import { baseURL } from "/js/baseVariables.mjs";

/** Takes post-details and submits to server. If success, the page reloads to display new post in feed. */

export async function createNewPost(newPostDetails) {
  const results = await fetch(baseURL + "posts/", {
    method: "POST",
    body: JSON.stringify(newPostDetails),
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (results.status === 200) {
    window.location.reload();
  }
}
