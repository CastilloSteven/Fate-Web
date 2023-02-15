/* mostrar la galeria */
const galeriaContenedor = document.querySelector('.galeria__contenedor')

InfoPersonajes.forEach((cadaPersonaje)=>{
    let divTarjeta = document.createElement('div')
    divTarjeta.classList.add('galeria__tarjeta', 'galeria__tarjeta--' + cadaPersonaje.css)
    galeriaContenedor.appendChild(divTarjeta)

    let divImg = document.createElement('img')
    divImg.setAttribute('src', cadaPersonaje.imagen)
    divImg.setAttribute('alt', cadaPersonaje.clase)
    divImg.classList.add('galeria__img')
    divTarjeta.appendChild(divImg)
})

/* funcionamiento de la galeria */
const galeriaBtnIzquierda = document.querySelector('.galeria__btnIzquierda')
const galeriaBtnDerecha = document.querySelector('.galeria__btnDerecha')

galeriaBtnIzquierda.addEventListener('click',()=>{
    galeriaScrollFunction(0)
})
galeriaBtnDerecha.addEventListener('click',()=>{
    galeriaScrollFunction(1)
})
function galeriaScrollFunction(accion) {
    const galeriaContScroll = galeriaContenedor.scrollWidth / 7
    
    if (accion===0) {
        galeriaContenedor.scrollLeft -= galeriaContScroll
    }else{
        galeriaContenedor.scrollLeft += galeriaContScroll
    }
}

/* funcionamiento informacion */

const tarjetas = document.querySelectorAll('.galeria__tarjeta')
const informacionContenedor = document.querySelector('.informacion__contenedor')

function informacionFunction(idPersonaje) {
    informacionContenedor.textContent = ''
    
    let personaje = InfoPersonajes[idPersonaje]

    let informacionContImg = document.createElement('div')
    informacionContImg.classList.add('informacion__img--contenedor')
    informacionContenedor.appendChild(informacionContImg)

    let informacionImg = document.createElement('img')
    informacionImg.setAttribute('src',personaje.imagen)
    informacionImg.setAttribute('alt',personaje.nombre)
    informacionImg.classList.add(personaje.css)
    informacionContImg.appendChild(informacionImg)

    let informacionTxt = document.createElement('div')
    informacionTxt.classList.add('informacion__txt')
    informacionContenedor.appendChild(informacionTxt)

    let informacionH3 = document.createElement('h3')
    informacionH3.classList.add('informacion__h3')
    informacionH3.innerText = personaje.clase
    informacionTxt.appendChild(informacionH3)

    let informacionUl = document.createElement('ul')
    informacionUl.classList.add('informacion__ul')
    informacionTxt.appendChild(informacionUl)

    let informacionLiNom = document.createElement('li')
    informacionLiNom.classList.add('informacion__li')
    informacionLiNom.innerText = 'Nombre Real: ' + personaje.nombre
    informacionUl.appendChild(informacionLiNom)

    let informacionLiOri = document.createElement('li')
    informacionLiOri.classList.add('informacion__li')
    informacionLiOri.innerText = 'Origen: ' + personaje.origen
    informacionUl.appendChild(informacionLiOri)

    let informacionLiMae = document.createElement('li')
    informacionLiMae.classList.add('informacion__li')
    informacionLiMae.innerText = 'Maestro: ' + personaje.maestro
    informacionUl.appendChild(informacionLiMae)
}

tarjetas.forEach((cadaTarjeta,i)=>{
    tarjetas[i].addEventListener('click',()=>{
        let idTarjeta = i
        informacionFunction(idTarjeta)
    })
    
})

/*                  <div class="informacion__txt">
                        <h3 class="informacion__h3">Nombre Personaje</h3>
                        <ul class="informacion__ul">
                            <li class="informacion__li">Nombre Real: qweasd</li>
                            <li class="informacion__li">Clase: qweqwe</li>
                            <li class="informacion__li">Origen: asdqwes</li>
                            <li class="informacion__li">Maestro: asdqweasdqwe</li>
                        </ul>
                    </div>
                </div>
            </div> */


