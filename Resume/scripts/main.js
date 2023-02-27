// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

const toggleEl = document.querySelector(".toggle");

toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});
