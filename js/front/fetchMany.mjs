import { searchFunction } from "../search/search.mjs";
import { baseURL } from "/js/baseVariables.mjs";
import { options } from "/js/baseVariables.mjs";
import { displayManyPosts } from "/js/front/displayMany.mjs";

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlSort = urlParams.get("sort");

if (urlSort == null) {
  urlSort = "desc";
}

export async function fetchManyPosts(limit, offset) {
  const results = await fetch(
    baseURL +
      "posts?_author=true&_reactions=true&sort=created&sortOrder=" +
      urlSort +
      "&_comments=true&limit=" +
      limit +
      "&offset=" +
      offset,
    options,
    {
      method: "GET",
    }
  );

  const jsonResults = await results.json();

  displayManyPosts(jsonResults);
  searchFunction(jsonResults);
}
