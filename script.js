// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#003366';
        } else {
            navbar.style.background = 'linear-gradient(to right, #0066ff, #00ccff)';
        }
    });

    const menuItems = navbar.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = '#ffcc00';
        });
        item.addEventListener('mouseleave', () => {
            item.style.color = 'white';
        });
    });
});
