const body = document.body;
const buttonMode = document.querySelector('.button_mode');
const openMenu =document.querySelector('.open_menu');
const closeMenu =document.querySelector('.close');
const navbar = document.querySelector('.open_menu_navbar');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');


// console.log(navbar )

buttonMode.addEventListener('click', () => {
    body.classList.toggle('light_mode');
})

openMenu.addEventListener('click', () =>{
    openMenu.classList.add('show_navbar')
    navbar.classList.add('show_navbar')
    main.classList.add('show_navbar')
    footer.classList.add('show_navbar')
})
closeMenu.addEventListener('click', () =>{
    navbar.classList.remove('show_navbar')
    main.classList.remove('show_navbar')
    footer.classList.remove('show_navbar')
})