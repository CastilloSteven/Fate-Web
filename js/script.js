const seccionBtn = document.querySelectorAll('.section__btn')
const historiaBtn = document.querySelectorAll('.historia__btn')
const secciones = document.querySelectorAll('.section')

seccionBtn.forEach((cadaBtn, i)=>{
    seccionBtn[i].addEventListener('click',()=>{
        secciones[i].classList.add('section--activo')
    })
})

historiaBtn.forEach((cadaBtn, i)=>{
    historiaBtn[i].addEventListener('click',()=>{
        secciones[i].classList.remove('section--activo')
    })
})




