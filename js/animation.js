const element = document.querySelector(".container1");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 350) {
    element.classList.add("animate__animated", "animate__fadeInLeft");
  } else {
    element.classList.remove("animate__animated", "animate__fadeInLeft");
  }
});
