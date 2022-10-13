export function showOrHide(jsonResults) {
  const found = jsonResults.followers.some(
    (follower) => follower.name === localStorage.getItem("name")
  );

  const followbutton = document.querySelector(".follow");
  const unfollowbutton = document.querySelector(".unfollow");
  if (found === true) {
    followbutton.classList.add("hidden");
    unfollowbutton.classList.remove("hidden");
  } else if (jsonResults.name === localStorage.getItem("name")) {
    unfollowbutton.classList.add("hidden");
    followbutton.classList.add("hidden");
  } else {
    unfollowbutton.classList.add("hidden");
  }
}
