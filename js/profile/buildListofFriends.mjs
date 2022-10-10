import { buildProfile } from "./buildProfile.mjs";
import { defaultPhoto } from "../baseVariables.mjs";

export function buildListofFriends(jsonResults) {
  for (let i = 0; i < jsonResults.followers.length; i++) {
    const { avatar, name } = jsonResults.followers[i];
    document.querySelector(
      ".followers-container"
    ).innerHTML += `<div class="mb-1 mb-md-3 text-md-center text-lg-start"><img src="${avatar}" width="50" height="50" class="me-lg-2 d-md-block d-lg-inline ms-md-auto me-md-auto" onerror="this.src='${defaultPhoto}'"/><a href="/profile.html?user=${name}">${name}</a></div>`;
  }

  for (let i = 0; i < jsonResults.following.length; i++) {
    const { avatar, name } = jsonResults.following[i];
    document.querySelector(
      ".following-container"
    ).innerHTML += `<div class="mb-1 mb-md-3 text-md-center text-lg-start"><img src="${avatar}" width="50" class="me-lg-2 d-md-block d-lg-inline ms-md-auto me-md-auto" onerror="this.src='${defaultPhoto}'"/><a href="/profile.html?user=${name}">${name}</a></div>`;
  }
}
