import { fetchManyPosts } from "./fetchMany.mjs";

export let interval = 50;
export let offset = 0;

export function listenLoadMore() {
  const loadMore = document.querySelector(".load-more-posts");

  loadMore.addEventListener("click", function () {
    offset = offset + interval;
    fetchManyPosts(interval, offset);
  });
}
