import { createSearchHtml } from "./createSearchHtml.mjs";

export function handleNameControlInput(inputValue, searchDB) {
  const nameControl = document.getElementById("searchfield");
  const radioUser = document.getElementById("radioUsername");
  const radioTitle = document.getElementById("radioTitle");
  const radioContent = document.getElementById("radioContent");

  radioUser.addEventListener("click", handleNameControlInput);
  radioTitle.addEventListener("click", handleNameControlInput);
  radioContent.addEventListener("click", handleNameControlInput);

  if (nameControl.value == "") {
    frontMain.innerHTML = "";
    fetchManyPosts(interval, offset);
  } else if (radioUser.checked) {
    const result = searchDB.filter((searchDB) => {
      if (searchDB.author.name.toLowerCase().includes(inputValue)) {
        return true;
      }
    });
    createSearchHtml(result);
  } else if (radioTitle.checked) {
    const result = searchDB.filter((searchDB) => {
      if (searchDB.title.toLowerCase().includes(inputValue)) {
        return true;
      }
    });
    createSearchHtml(result);
  } else if (radioContent.checked) {
    const result = searchDB.filter((searchDB) => {
      if (searchDB.body.toLowerCase().includes(inputValue)) {
        return true;
      }
    });
    createSearchHtml(result);
  }
}
