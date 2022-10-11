import { baseURL } from "../baseVariables.mjs";

const form = document.getElementById("commentpost");

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlID = urlParams.get("id");

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
