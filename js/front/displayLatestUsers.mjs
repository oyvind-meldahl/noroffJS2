const usersContainer = document.querySelector(".users-container");

/** Takes the list of latest active users and displays a html-list on the site. */

export function displayLatestUsers(latestUsers) {
  latestUsers.forEach((element) => {
    usersContainer.innerHTML += `<div class="mt-2"><a href="/profile.html?user=${element}"> ${element} </a></div>`;
  });
}
