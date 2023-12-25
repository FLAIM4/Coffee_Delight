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

const element2 = document.querySelector('.a2');
const element3 = document.querySelector('.a1');

element2.addEventListener('click', () =>{
  element2.classList.add('a2hover');
  element3.classList.add('a2')
})

element3.addEventListener('click', () =>{
  element3.classList.remove('a2');
  element2.classList.remove('a2hover')
})