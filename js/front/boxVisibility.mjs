export function boxVisibility() {
  let searchButton = document.querySelector(".searchbutton");
  let searchBoxVisible = false;
  let newPostButton = document.querySelector(".newpostbutton");
  let newPostVisible = false;

  document.querySelector(".search-box").style.display = "none";
  document.querySelector(".new-box").style.display = "none";

  const loadMore = document.querySelector(".load-more-posts");

  newPostButton.addEventListener("click", function () {
    if (newPostVisible == false) {
      document.querySelector(".new-box").style.display = "block";
      newPostVisible = true;
    } else {
      document.querySelector(".new-box").style.display = "none";
      newPostVisible = false;
    }
  });

  searchButton.addEventListener("click", function () {
    if (searchBoxVisible == false) {
      document.querySelector(".search-box").style.display = "block";
      searchBoxVisible = true;
      loadMore.style.display = "none";
    } else {
      document.querySelector(".search-box").style.display = "none";
      searchBoxVisible = false;
      loadMore.style.display = "block";
    }
  });
}
