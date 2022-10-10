import { heartLike } from "../../like.mjs";
import { displayLatestUsers } from "./displayLatestUsers.mjs";
import { defaultPhoto } from "/js/baseVariables.mjs";

const frontMain = document.querySelector(".mainfront");
let latestUsers = new Set();

export function displayManyPosts(jsonResults) {
  for (let i = 0; i < jsonResults.length; i++) {
    latestUsers.add(jsonResults[i].author.name);

    var idValue = jsonResults[i].id;
    var idField = `#${idValue}`;

    if (jsonResults[i].media == "") {
      var emptyImageClass = "hidden";
    } else {
      var emptyImageClass = "";
    }

    if (jsonResults[i].author.avatar == "") {
      jsonResults[i].author.avatar = defaultPhoto;
    }

    const { created, id, title, body, media } = jsonResults[i];
    const { name, avatar } = jsonResults[i].author;
    const { comments } = jsonResults[i]._count;

    let newTime = new Date(created).toLocaleString("en-GB");

    frontMain.innerHTML += `
        <div class="col-12 p-3 mb-3 brd content_box">
        <div class="topline d-flex justify-content-between">
        <div class="text-start mt-3 fw-bold">
        <a href="/profile.html?user=${name}">
        <img src=" ${avatar}" width="50" height="50" class="me-3 profile-photo" alt="profile-photo" onerror="this.src='${defaultPhoto}'">
       ${name}</a> ${newTime}</div> 
        <div class="options rigth fw-light">${idField}</div>
        </div>
        
        <div class="post-title title${id} mt-3 fw-bold"><a href="/post.html?id=${id}"> ${title}</div>
        <div id="image-holder">
        <img src="${media}" class="image ${emptyImageClass} my-3 "></div> 
        <div class="my-2 body-content body${id}"> ${body}</a></div>

        <div class="bottomline">
        <div class="like"></div>
        <div class="comments-title">comments: ${comments} </div>
        </div>
        </div>
        `;
  }
  heartLike();
  displayLatestUsers(latestUsers);
}
