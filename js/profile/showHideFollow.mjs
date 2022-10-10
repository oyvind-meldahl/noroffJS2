export function showOrHide(jsonResults) {
  for (let i = 0; i < jsonResults.followers.length; i++) {
    var found = jsonResults.followers[i].name.includes(
      localStorage.getItem("name")
    );
  }

  let followbutton = document.querySelector(".follow");
  let unfollowbutton = document.querySelector(".unfollow");
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
