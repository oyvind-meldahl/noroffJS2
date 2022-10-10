import { baseURL } from "/js/baseVariables.mjs";
import { options } from "/js/baseVariables.mjs";
import { buildProfile } from "./buildProfile.mjs";

let urlUser = window.location.search;
const urlParams = new URLSearchParams(urlUser);
let profileName = urlParams.get("user");

if (profileName == null) {
  profileName = localStorage.getItem("name");
}

export async function getProfileData() {
  const results = await fetch(
    baseURL +
      "profiles/" +
      profileName +
      "?_posts=true&_following=true&_followers=true",
    options,
    {
      method: "GET",
    }
  );
  let jsonResults = await results.json();

  buildProfile(jsonResults);
}
