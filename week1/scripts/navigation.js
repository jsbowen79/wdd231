const nav_button = document.querySelector('#ham-btn');
const navEL = document.querySelector('#nav-bar');

nav_button.addEventListener('click', () => {
    nav_button.classList.toggle('show'); 
    navEL.classList.toggle('show'); 
});

