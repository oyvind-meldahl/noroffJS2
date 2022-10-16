import { handleNameControlInput } from "./controlSearch.mjs";
import { baseURL } from "/js/baseVariables.mjs";
import { options } from "/js/baseVariables.mjs";

/** As soon as the frontpage is loaded, a copy of all posts and users are downloaded in the background to let the user search. */

export function searchFunction() {
  fetchSearchDB();

  async function fetchSearchDB() {
    const results = await fetch(
      baseURL + "posts?limit=5000&_author=true",
      options,
      {
        method: "GET",
      }
    );

    const searchDB = await results.json();

    createSearchResults(searchDB);
  }
}

/** User types in search-term, activates handleNameControlInput() in createSearchHtml */

function createSearchResults(searchDB) {
  let form = document.getElementById("searchform");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = nameControl.value.toLowerCase();

    handleNameControlInput(inputValue, searchDB);
  });
  const nameControl = document.getElementById("searchfield");
}
