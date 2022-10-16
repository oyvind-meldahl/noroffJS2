import { baseURL } from "../baseVariables.mjs";

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlID = urlParams.get("id");

/** Sends the details of the comment passed to us from listenComment() to the server. */

export async function createNewComment(commentDetails) {
  const results = await fetch(baseURL + "posts/" + urlID + "/comment", {
    method: "POST",
    body: JSON.stringify(commentDetails),
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const jsonResults = results.json();
  console.log(jsonResults);

  if (results.status === 200) {
    window.location.reload();
  }
}
