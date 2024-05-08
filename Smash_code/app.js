document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const links = document.querySelector('.links');
    
    hamburgerMenu.addEventListener('click', function () {
        links.classList.toggle('active');
    });
});
