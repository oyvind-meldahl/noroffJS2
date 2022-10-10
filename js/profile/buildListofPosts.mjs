import { defaultPhoto } from "../baseVariables.mjs";

const profilePosts = document.querySelector(".profileposts");

export function buildListofPosts(jsonResults) {
  jsonResults.posts.sort((a, b) => b.id - a.id);

  for (let i = 0; i < jsonResults.posts.length; i++) {
    if (jsonResults.avatar == "") {
      jsonResults.avatar =
        "https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__480.jpg";
    }

    let posts = jsonResults.posts[i];

    const { avatar, name } = jsonResults;

    const { title, id, body, created, media } = posts;

    let newTime = new Date(created).toLocaleString("en-GB");

    if (media == "") {
      var emptyImageClass = "hidden";
    } else {
      var emptyImageClass = "";
    }

    profilePosts.innerHTML += `
        <div class="col-12 p-3 mb-3 brd content_box">
        <div class="topline d-flex justify-content-between">
        <div class="text-start mt-3 fw-bold">
        <img src=" ${avatar}" width="50" height="50" class="me-3 small-avatar" alt="profile-photo" onerror="this.src='${defaultPhoto}'">
        <a href="/profile.html?user=${name}">${name}</a> ${newTime}</div> 
        
        </div>
        <a href="/post.html?id=${id}">
        <div class="post-title title${id} mt-3 fw-bold">${title}</div>
        <div class="mt-3 post-image"><img src="${media}" class="post-media ${emptyImageClass}"></div>
        <div class="my-2 body-content body${id}"> ${body}</div>
        </a>
        <div class="bottomline">
        <div class="like"></div>
        <div class="comments-title">
        <a href="/post.html?id=${id}">
        view post... 
        </a></div></div></div>`;
  }
}
