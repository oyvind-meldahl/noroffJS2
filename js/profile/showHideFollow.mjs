/** This takes care of when follow and unfollow is displayed based on who you are already following. Exludes yourself. */

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
