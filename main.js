let scrollingStopped = false;

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const photos = document.querySelector(".marquee-content");
photos.addEventListener("click", stopScrolling);

function stopScrolling() {
  if (scrollingStopped == false) {
    photos.classList.add("stopScrolling");
    scrollingStopped = true;
  } else {
    photos.classList.remove("stopScrolling");
    scrollingStopped = false;
  }
}
