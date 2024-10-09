const urlParams = new URLSearchParams(window.location.search);
let pageNumber = parseInt(urlParams.get("page")) || 1;

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const page = document.getElementById("page");
prev.disabled = true;

prev.addEventListener("click", () => {
  let p = pageNumber - 1 > 0 ? pageNumber - 1 : 1;
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("page", p);
  history.pushState({}, "", `?${searchParams.toString()}`);
  window.dispatchEvent(new Event("popstate"));
});

next.addEventListener("click", () => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("page", pageNumber + 1);
  history.pushState({}, "", `?${searchParams.toString()}`);
  window.dispatchEvent(new Event("popstate"));
});

window.addEventListener("popstate", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const _pageNumber = parseInt(urlParams.get("page")) || 1;
  if (_pageNumber !== pageNumber) {
    pageNumber = _pageNumber;
    page.textContent = pageNumber;
    document.dispatchEvent(
      new CustomEvent("page-changed", { detail: { pageNumber } })
    );
  }
  if (pageNumber === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
});
