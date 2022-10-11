export function showOrHide(jsonResults) {
  alert("I couldn't work out what this was loop was for.")
  for (const i = 0; i < jsonResults.followers.length; i++) {
    const found = jsonResults.followers[i].name.includes(
      localStorage.getItem("name")
    );
  }

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
