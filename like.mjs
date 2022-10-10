///////////NOT IMPLEMENTED///////////////

import { baseURL } from "./js/baseVariables.mjs";

export function heartLike() {
  const heart = document.querySelectorAll(".heart");
  for (let i = 0; i < heart.length; i++) {
    let postID = heart[i].classList[1];
    heart[i].addEventListener("click", function () {
      likePost(postID);
    });
  }
}

export async function likePost(postID) {
  //let heart = document.querySelector(".heart");
  console.log(postID);
  const results = await fetch(baseURL + "posts/" + postID + "/react/❤️", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  const jsonResults = await results.json();
  console.log(jsonResults);
  window.location.reload();
}
