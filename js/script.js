// const  = document.querySelectorAll('.section__btn')
// const  = document.querySelectorAll('.informacion__btn')
// const = document.querySelectorAll('.section')

// .forEach((cadaBtn, i)=>{
//     [i].addEventListener('click',()=>{
//         [i].classList.add('section--activo')
//     })
// })

// .forEach((cadaBtn, i)=>{
//     [i].addEventListener('click',()=>{
//         [i].classList.remove('section--activo')
//     })
// })

const main = document.querySelector('.main')

InfoPersonajes.forEach((personaje)=>{
    let section = document.createElement('section')
    section.classList.add('section')

    let sectionTxt = document.createElement('div')
    sectionTxt.classList.add('section__txt')
    section.appendChild(sectionTxt)

    let sectionH2 = document.createElement('h2')
    sectionH2.classList.add('section__h2')
    sectionH2.innerText = personaje.clase
    sectionTxt.appendChild(sectionH2)

    let sectionbtn = document.createElement('button')
    sectionbtn.classList.add('section__btn')
    sectionbtn.innerText = 'Información'
    sectionTxt.appendChild(sectionbtn)

    let sectionImgCont = document.createElement('div')
    sectionImgCont.classList.add('section__imgContenedor')
    section.appendChild(sectionImgCont)
    
    let sectionImg = document.createElement('img')
    sectionImg.classList.add('section__img')
    sectionImg.setAttribute('src',personaje.imagen)
    sectionImg.setAttribute('alt',personaje.clase)
    sectionImgCont.appendChild(sectionImg)

    let sectionInfo = document.createElement('div')
    sectionInfo.classList.add('section__informacion')
    section.appendChild(sectionInfo)

    let sectionUl = document.createElement('ul')
    sectionUl.classList.add('informacion__ul')
    sectionInfo.appendChild(sectionUl)

    let sectionLi1 = document.createElement('li')
    sectionLi1.classList.add('informacion__li')
    sectionLi1.innerText = 'Nombre: ' + personaje.nombre
    sectionUl.appendChild(sectionLi1)

    let sectionLi2 = document.createElement('li')
    sectionLi2.classList.add('informacion__li')
    sectionLi2.innerText = 'Clase: ' + personaje.clase
    sectionUl.appendChild(sectionLi2)

    let sectionLi3 = document.createElement('li')
    sectionLi3.classList.add('informacion__li')
    sectionLi3.innerText = 'Origen: ' + personaje.origen
    sectionUl.appendChild(sectionLi3)

    let sectionLi4 = document.createElement('li')
    sectionLi4.classList.add('informacion__li')
    sectionLi4.innerText = 'Maestro: ' + personaje.maestro
    sectionUl.appendChild(sectionLi4)

    let informacionBtn = document.createElement('button')
    informacionBtn.classList.add('informacion__btn')
    informacionBtn.innerText = 'Volver'
    sectionInfo.appendChild(informacionBtn)

    main.appendChild(section)
})

const seccionBtns = document.querySelectorAll('.section__btn')
const infoBtns = document.querySelectorAll('.informacion__btn')
const sections = document.querySelectorAll('.section')

seccionBtns.forEach((cadaBtn, i)=>{
    seccionBtns[i].addEventListener('click',()=>{
        sections[i].classList.add('section--activo')
    })
})

infoBtns.forEach((cadaBtn, i)=>{
    infoBtns[i].addEventListener('click',()=>{
        sections[i].classList.remove('section--activo')
    })
})
