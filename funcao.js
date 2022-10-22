const menuHamburguer = document.querySelector('.menu-mobile')

const menuDesktop = document.querySelector('#menu-desktop')

menuHamburguer.addEventListener('click', ()=> {
    menuDesktop.classList.toggle('active')
})