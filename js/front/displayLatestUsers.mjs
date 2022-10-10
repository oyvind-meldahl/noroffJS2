const usersContainer = document.querySelector(".users-container");

export function displayLatestUsers(latestUsers) {
  latestUsers.forEach((element) => {
    usersContainer.innerHTML += `<div class="mt-2"><a href="/profile.html?user=${element}"> ${element} </a></div>`;
  });
}
