import { buildListofPosts } from "./buildListofPosts.mjs";
import { buildListofFriends } from "./buildListofFriends.mjs";
import { defaultPhoto } from "../baseVariables.mjs";
import { listenFollowProfile } from "./followProfile.mjs";
import { showOrHide } from "./showHideFollow.mjs";

/** Builds the top part of a user-profile. Information about the user. */

export function buildProfile(jsonResults) {
  let { name, email, avatar } = jsonResults;
  let { posts, followers, following } = jsonResults._count;

  document.getElementById(
    "profilecard"
  ).innerHTML = `<div class="col-md-3 me-3 text-center mb-sm-4 mb-4 mb-md-0 profileimage">
      <img src="${avatar}" class="img-fluid profile-px rounded-4" onerror="this.src='${defaultPhoto}'" />
      </div>
      
      <div class="col">
      <div class="row h-100 p-3 mt-md-0 mt-3 brd">
      <div class="d-flex">
        <div class="name fs-1 fw-bold">${name}</div>
        <div class="my-auto ms-auto follow"><b>follow</b></div>
        <div class="my-auto ms-auto unfollow"><b>unfollow</b></div>
       


        </div>
        <div class="email"><b>email: </b>${email}</div>
        <div class="numberposts"><b>posts made: </b>${posts}</div>
        <div class="numberfollowers"><b>followers: </b>${followers}</div>
        <div class="numberfollowing"><b>following: </b>${following}</div>
    </div>
    </div>`;

  showOrHide(jsonResults);
  buildListofPosts(jsonResults);
  buildListofFriends(jsonResults);
  listenFollowProfile();
}
