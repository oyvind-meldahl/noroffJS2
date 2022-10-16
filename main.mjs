import { listenLogin } from "/js/auth/listenLogin.mjs";
import { listenRegister } from "/js/auth/listenRegister.mjs";
import { getProfileData } from "/js/profile/fetchProfileData.mjs";
import { checkLoggedIn } from "/js/checkLoggedIn.mjs";
import { listenComment } from "/js/post/listenComment.mjs";
import { fetchSinglePost } from "/js/post/fetchSingle.mjs";
import { fetchManyPosts } from "/js/front/fetchMany.mjs";
import { listenNewPost } from "/js/front/listenNewPost.mjs";
import {
  interval,
  listenLoadMore,
  offset,
} from "./js/front/listenLoadMore.mjs";
import { boxVisibility } from "./js/front/boxVisibility.mjs";

import { searchFunction } from "./js/search/search.mjs";

let path = location.pathname;
let token = localStorage.getItem("accessToken");

checkLoggedIn();

if (path === "/register.html") {
  listenRegister();
} else if (path === "/login.html") {
  listenLogin();
} else if (path === "/profile.html") {
  getProfileData();
} else if (path === "/post.html") {
  fetchSinglePost();
  listenComment();
} else if (path === "/index.html" && token) {
  fetchManyPosts(interval, offset);
  listenNewPost();
  listenLoadMore();
  boxVisibility();
  searchFunction();
}
