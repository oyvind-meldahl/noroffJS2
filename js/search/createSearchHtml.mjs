const frontMain = document.querySelector(".mainfront");

export function createSearchHtml(result) {
  frontMain.innerHTML = "";

  if (result.length != 0) {
    for (let i = 0; i < result.length; i++) {
      frontMain.innerHTML += `
        <div class="col-12 p-3 mb-3 brd content_box">
        <div class="topline d-flex justify-content-between">
        <div class="text-start mt-3 fw-bold">
        <a href="/profile.html?user=${result[i].author.name}">
        <img src=" ${result[i].author.avatar}" width="50" height="50" class="me-3" alt="profile-photo">
       ${result[i].author.name}</a> ${result[i].created}</div> 
       
        </div>
        <div class="post-title title${result[i].id} mt-3 fw-bold"><a href="/post.html?id=${result[i].id}"> ${result[i].title}</div>
        <div id="image-holder">
        <img src="${result[i].media}" class="image my-3 "></div> 
        <div class="my-2 body-content body${result[i].id}"> ${result[i].body}</a></div>
        <div class="bottomline">
        <div class="like"><span class="heart"> &#9829; </span>${result[i]._count.reactions}</div>
        <div class="comments-title">comments: ${result[i]._count.comments}</div>
        </div>
        </div>
      `;
    }
  } else {
    frontMain.innerHTML =
      "I am very sorry, but no results could be found. Are you being -too- specific?";
  }
}
