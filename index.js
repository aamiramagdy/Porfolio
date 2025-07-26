// toggle theme
const themeButton = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// toggle menu
const toggle = document.getElementById("toggle-menu");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("active");
  });
});

// typing effect
const text = "Front-End Web Developer";
let index = 0;
const typingSpeed = 150;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typingEffect, typingSpeed);
  }
}

window.addEventListener("DOMContentLoaded", typingEffect);
