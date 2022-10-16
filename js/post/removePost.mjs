import { baseURL } from "/js/baseVariables.mjs";

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlID = urlParams.get("id");

/** Checks with the user if he is sure he wants to delete the post, and if yest, proceeds with removing said post. */

export async function removePost() {
  if (
    confirm("Are you sure you want to delete? The post will be forever gone!")
  ) {
    const deleteResult = await fetch(baseURL + "posts/" + urlID, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const jsonResults = await deleteResult.json();
    console.log(jsonResults);
    window.location.assign("./profile.html");
  }
}
