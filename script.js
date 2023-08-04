const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")
const cross = document.querySelector(".cross")

window.addEventListener('load', () => {
  const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
  window.scrollTo(0, scrollPosition);
});

hamburger.addEventListener("click", () => {
  mobileNav.classList.remove("translate-y-[-190%]")
  cross.classList.remove("hidden")
  hamburger.classList.add("hidden")
})

cross.addEventListener("click", () => {
  mobileNav.classList.add("translate-y-[-190%]")
  cross.classList.add("hidden")
  hamburger.classList.remove("hidden")
})