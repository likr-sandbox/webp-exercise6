const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

function changeImage(event) {
  displayedImage.setAttribute("src", event.target.getAttribute("src"));
}

function toggleOverlay() {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}

for (let i = 1; i <= 5; ++i) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/pic${i}.jpg`);
  newImage.addEventListener("click", changeImage);
  thumbBar.appendChild(newImage);
}

btn.addEventListener("click", toggleOverlay);
