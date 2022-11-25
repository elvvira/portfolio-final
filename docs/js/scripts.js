const menuElement = document.getElementById('menu');
const iconElement = document.getElementById('menu-icon');
const submenuElement = document.getElementById('submenu');
const arrowElement = document.getElementById('arrow');
const arrowReverseElement = document.getElementById('arrow-reverse');

iconElement.addEventListener('click', event => {
  if (event.target.dataset.image === 'icon') {
    event.target.src = 'assets/images/icon-close.svg';
    event.target.dataset.image = 'close';
    menuElement.classList.add('menu--show');
  } else {
    event.target.src = 'assets/images/icon-menu.svg';
    event.target.dataset.image = 'icon';
    menuElement.classList.remove('menu--show');
    submenuElement.classList.remove('submenu--show');
  }
});

arrowElement.addEventListener('click', event => {
  submenuElement.classList.add('submenu--show');
});

arrowReverseElement.addEventListener('click', event => {
  submenuElement.classList.remove('submenu--show');
});

const accordionElement = document.getElementById('accordion');
const accordionItems = document.querySelectorAll('.works__content');

accordionElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("works__title")){
        accordionItems.forEach((item)=> {
            item.classList.remove("works__content--show");
        });
        event.target.nextElementSibling.classList.add("works__content--show");
    }
});
