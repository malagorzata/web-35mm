/*MARQUEE*/

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

/*AUTOMATED SLIDESHOW*/
let scrollingStopped = false;

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

/*MENU*/
function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");
  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}


