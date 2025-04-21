const form = document.querySelector("form");
form.addEventListener("submit", function () {
  alert("Message sent successfully!");
});
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
  document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('#typed', {
        strings: ["Fresh Fruits", "Organic Goodness", "Healthy Lifestyle"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
      });
  });