const menuClass = document.querySelector('.menu');
const menuId = document.getElementById('menu');
const navLinks = document.getElementById('navlinks');

menuId.addEventListener('click',() => {
        navLinks.style.display="flex";
})
