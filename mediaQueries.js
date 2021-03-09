let media = window.matchMedia("(max-width: 900px)");

// if (media.matches) {
//   // Then trigger an alert
//   alert("Media Query Matched!");
//   console.log("Media test");
// }

// new way to test media query with ADDLISTENER

function handleMediaQuery(e) {
  if (e.matches) {
    console.log("Media approved");
  }
}

media.addListener(handleMediaQuery);
