let paragraph = document.querySelector(".paragraph");
console.log(paragraph);

function changeColors(el) {
  el.style.setProperty("--backgroundColor", "rgba(255,255,255)");
  el.style.setProperty("--borderColor", "blue");
}

paragraph.addEventListener("click", function (e) {
  changeColors(e.currentTarget);
});
