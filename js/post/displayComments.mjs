export function displayComments(jsonResults) {
  let commentHtml = document.querySelector(".comments");

  if (jsonResults.comments == "") {
    commentHtml.innerHTML += `
            <div class="col-12 p-3 mb-3 brd content_box w-100 mx-auto">
            
            <div class="mt-3">
            <p><b>No comments yet, be the first?</b></p>
            </div>`;
  } else {
    jsonResults.comments.sort((a, b) => a.id - b.id);
    for (let i = 0; i < jsonResults.comments.length; i++) {
      const { owner, created, body } = jsonResults.comments[i];
      commentHtml.innerHTML += `
            <div class="col-12 p-3 mb-3 brd content_box w-100 mx-auto">
            <b><a href="/profile.html?user=${owner}">${owner}</a> on ${created} :</b>
            <div class="mt-3">
            <p>${body}</p>
            </div>`;
    }
  }
}
