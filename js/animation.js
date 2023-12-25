const element = document.querySelector(".shop__coffe");
const element1 = document.querySelector(".shop__coffe1");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 350) {
    element.classList.remove("hide");
    element.classList.add("animate__animated", "animate__fadeInLeft");
  } else {
    element.classList.remove("animate__animated", "animate__fadeInLeft");
    element.classList.add("hide")
  }
});

window.addEventListener("scroll", function() {
  if (window.scrollY >= 600) {
    element1.classList.remove("hide")
    element1.classList.add("animate__animated", "animate__fadeInLeft");
  } else {
    element1.classList.remove("animate__animated", "animate__fadeInLeft");
    element1.classList.add("hide");
  }
});

const a1 = document.querySelector('.a1')
const a2 = document.querySelector('.a2')

a1.addEventListener('click', function() {
  a2.classList.remove('a2')
  a2.classList.add('a3')
})