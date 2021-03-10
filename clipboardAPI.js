// navigator.clipboard.writeText

document.body.addEventListener("click", () => {
  const text = navigator.clipboard.writeText("Flamingo");
});

// readText
document.body.addEventListener("click", () => {
  const content = navigator.clipboard.readText();
});
