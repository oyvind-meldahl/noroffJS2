import { submitEdit } from "/js/post/submitEdit.mjs";

let postID = localStorage.getItem("postID");

const form = document.getElementById("editpost");

export function fillFields() {
  document.querySelector(".edit-box").style.display = "none";
  document.querySelector(".edit-box").style.display = "block";
  document.getElementById("edittitlefield").value =
    localStorage.getItem("title");
  document.getElementById("editmediafield").value =
    localStorage.getItem("media");
  document.getElementById("editbodyfield").value = localStorage.getItem("body");
  sendData();
}

function sendData() {
  form.addEventListener("reset", (event) => {
    console.log("reset that shit");
    document.querySelector(".edit-box").style.display = "none";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const editDetails = Object.fromEntries(formData.entries());
    if (editDetails.media === "") {
      delete editDetails.media;
    }
    console.log(editDetails);
    submitEdit(editDetails);
  });
}
