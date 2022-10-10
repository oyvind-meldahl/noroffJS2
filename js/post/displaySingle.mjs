import { defaultPhoto } from "/js/baseVariables.mjs";
import { removePost } from "/js/post/removePost.mjs";
import { displayComments } from "/js/post/displayComments.mjs";
import { fillFields } from "./editPost.mjs";

let urlPost = window.location.search;
const urlParams = new URLSearchParams(urlPost);
let urlID = urlParams.get("id");
localStorage.setItem("postID", urlID);

let postHtml = document.querySelector(".post");

export function displaySingle(jsonResults) {
  if (jsonResults.author.name == localStorage.getItem("name")) {
    var ownPost = true;
    var rightCorner =
      '<a href="#" class="editme"> edit </a> | <a href="#" class="deleteme"> delete </a>';
  } else {
    var rightCorner = `id. ${jsonResults.id}`;
  }

  if (jsonResults.media == "") {
    var emptyImageClass = "hidden";
  } else {
    var emptyImageClass = "";
  }

  if (jsonResults.author.avatar == "") {
    jsonResults.author.avatar = defaultPhoto;
  }

  const { name, avatar } = jsonResults.author;
  let { created, id, title, media, body } = jsonResults;
  const { comments } = jsonResults._count;

  let newTime = new Date(created).toLocaleString("en-GB");

  postHtml.innerHTML = `
     
      <div class="col-12 p-3 mb-3 brd content_box">
      <div class="topline d-flex justify-content-between">
      <div class="text-start mt-3 fw-bold">
      <a href="/profile.html?user=${name}">
      <img src=" ${avatar}" width="50" height="50" class="me-3" alt="profile-photo" onerror="this.src='${defaultPhoto}'">
      ${name}</a> ${newTime}</div> 
      <div class="options rigth fw-light">
      ${rightCorner}
      </div>
      </div>
      
      <div class="post-title title${id} mt-3 fw-bold"> ${title}</div>
      <div id="image-holder">
      <img src="${media}" class="post-media ${emptyImageClass} my-3 media${id}"></div> 
      <div class="my-2 body-content body${id}"> ${body}</div>
     
      <div class="bottomline">
      <div class="like"></div>
      <div class="comments-title">comments: ${comments}</div>
      
      </div>
      </div>
      `;

  if (ownPost == true) {
    document.querySelector(".deleteme").addEventListener("click", removePost);
    document.querySelector(".editme").addEventListener("click", fillFields);
  }

  document.querySelector(".new-box").style.display = "block";
  document.querySelector(".edit-box").style.display = "none";

  displayComments(jsonResults);
}
