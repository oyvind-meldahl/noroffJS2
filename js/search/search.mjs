import { handleNameControlInput } from "./controlSearch.mjs";
import { baseURL } from "/js/baseVariables.mjs";
import { options } from "/js/baseVariables.mjs";

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

function createSearchResults(searchDB) {
  let form = document.getElementById("searchform");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = nameControl.value.toLowerCase();

    handleNameControlInput(inputValue, searchDB);
  });
  const nameControl = document.getElementById("searchfield");
}
