

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // ScrollReveal animations
    ScrollReveal().reveal('.about-img', { delay: 500, distance: '100px', origin: 'left' });
    ScrollReveal().reveal('.about-content', { delay: 500, distance: '100px', origin: 'left' });
    ScrollReveal().reveal('.home-content h1', { delay: 300, distance: '50px', origin: 'top' });
    ScrollReveal().reveal('.home-content h3', { delay: 400, distance: '50px', origin: 'right' });
    ScrollReveal().reveal('.home-content p', { delay: 500, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.social-icons a', { delay: 600, distance: '50px', origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('.skills .skill-box', { delay: 400, distance: '50px', origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('.projects .project-card', { delay: 400, distance: '50px', origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('.contact form', { delay: 400, distance: '50px', origin: 'bottom' });
});


  