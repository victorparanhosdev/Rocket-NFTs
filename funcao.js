const menuHamburguer = document.querySelector('.menu-mobile')

const menuDesktop = document.querySelector('menu')
valor = true
menuHamburguer.addEventListener('click', ()=> {
    menuDesktop.classList.toggle('active')

    if(valor) {
        window.document.body.style = 'overflow: hidden'
        valor = false

    }else {
        window.document.body.style = 'overflow: inherit'
        valor = true 
    }
})