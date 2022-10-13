import { defaultPhoto } from "/js/baseVariables.mjs";

const frontMain = document.querySelector(".mainfront");

export function createSearchHtml(result) {
  console.log(result);

  frontMain.innerHTML = "";

  if (result.length != 0) {
    for (let i = 0; i < result.length; i++) {
      const { created, id, title, body, media } = result[i];
      const { comments } = result[i]._count;
      const { name, avatar } = result[i].author;

      if (result[i].media == "") {
        var emptyImageClass = "hidden";
      } else {
        var emptyImageClass = "";
      }

      let newTime = new Date(created).toLocaleString("en-GB");
      frontMain.innerHTML += `
        <div class="col-12 p-3 mb-3 brd content_box">
        <div class="topline d-flex justify-content-between">
        <div class="text-start mt-3 fw-bold">
        <a href="/profile.html?user=${name}">
        <img src=" ${avatar}" width="50" height="50" class="me-3" alt="profile-photo" onerror="this.src='${defaultPhoto}'">
       ${name}</a> ${newTime}</div> 
       
        </div>
        <div class="post-title title${id} mt-3 fw-bold"><a href="/post.html?id=${id}"> ${title}</div>
        <div id="image-holder">
        <img src="${media}" class="image ${emptyImageClass} my-3 "></div> 
        <div class="my-2 body-content body${id}"> ${body}</a></div>
        <div class="bottomline">
        <div class="like"></div>
        <div class="comments-title">comments: ${comments}</div>
        </div>
        </div>
      `;
    }
  } else {
    frontMain.innerHTML =
      "I am very sorry, but no results could be found. Are you being -too- specific?";
  }
}
