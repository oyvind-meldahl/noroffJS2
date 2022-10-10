import { baseURL } from "/js/baseVariables.mjs";
import { options } from "/js/baseVariables.mjs";
import { displaySingle } from "/js/post/displaySingle.mjs";

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlID = urlParams.get("id");

localStorage.setItem("postID", urlID);

export async function fetchSinglePost() {
  const results = await fetch(
    baseURL + "posts/" + urlID + "?_author=true&_comments=true&_reactions=true",
    options,
    {
      method: "GET",
    }
  );
  const jsonResults = await results.json();

  localStorage.setItem("title", jsonResults.title);
  localStorage.setItem("media", jsonResults.media);
  localStorage.setItem("body", jsonResults.body);
  localStorage.setItem("postID", urlID);
  displaySingle(jsonResults);
}
