import { fetchManyPosts } from "./fetchMany.mjs";

export let interval = 50;
export let offset = 0;

/** This controls the "load more"-button. The two variables at the top also controls the limit and offset of inital grab in fetchMany(). */

export function listenLoadMore() {
  const loadMore = document.querySelector(".load-more-posts");

  loadMore.addEventListener("click", function () {
    offset = offset + interval;
    fetchManyPosts(interval, offset);
  });
}
