import { baseURL } from "../baseVariables.mjs";

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlUser = urlParams.get("user");

/** Listens out for a user wanting to follow or unfollow a profile and then starts the relevant function. */

export function listenFollowProfile() {
  let button = document.querySelector(".follow");
  button.addEventListener("click", function () {
    submitFollowProfile();
  });
  let unfollowbutton = document.querySelector(".unfollow");
  unfollowbutton.addEventListener("click", function () {
    submitUnfollowProfile();
  });
}

/** Lets the user follow a profile. */

export async function submitFollowProfile() {
  const results = await fetch(baseURL + "profiles/" + urlUser + "/follow", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  const jsonResults = await results.json();
  console.log(jsonResults);
  if (results.status === 200) {
    window.location.reload();
  }
}

/** Lets the user unfollow a profile. */

export async function submitUnfollowProfile() {
  const results = await fetch(baseURL + "profiles/" + urlUser + "/unfollow", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  console.log(results);
  if (results.status === 200) {
    window.location.reload();
  }
}
