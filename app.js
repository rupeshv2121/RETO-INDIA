let hamBurger = document.querySelector('#ham-burger');
const navBar = document.getElementsByClassName('navbar')[0];

hamBurger.addEventListener('click', (e) => {
    console.log("clicked");
    if (navBar) {
        navBar.classList.toggle('navbar-expand')
    }

})