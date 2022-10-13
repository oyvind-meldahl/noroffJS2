import { baseURL } from "../baseVariables.mjs";

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlID = urlParams.get("id");

/** Sends the edited post to the server. Information is passed in from editpost.mjs */

export async function submitEdit(editDetails) {
  const results = await fetch(baseURL + "posts/" + urlID, {
    method: "PUT",
    body: JSON.stringify(editDetails),
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log(results);
  if (results.status === 200) {
    window.location.reload();
  }
}
