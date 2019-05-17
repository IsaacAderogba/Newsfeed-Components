
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 

  slideMenuOut();
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
menuButton.addEventListener('click', event => event.stopPropagation());
menu.addEventListener('click', event => event.stopPropagation());



// body click listener
const html = document.querySelector('html');

html.addEventListener('click', slideMenuIn);

function slideMenuIn() {
  if (menu.classList.contains('menu--open')) {
    TweenMax.from('.menu', 1, { left: -50 });
    TweenMax.to('.menu', 1, { left: -350 });
    setTimeout(function () {
      menu.classList.remove('menu--open');
    }, 1000);
  }
}

function slideMenuOut() {
  if (menu.classList.contains('menu--open')) {
    slideMenuIn();
  } else {
    menu.classList.toggle('menu--open');
    TweenMax.from('.menu', 1, { left: -200 });
    TweenMax.to('.menu', 1, { left: -50 });
  }
}