
function saludadora() {
    let nombre = prompt(" Como te llamas?")
    alert("Hola " + nombre + " Bienvenido/a al simulador")

}

saludadora()

function verificarEdad() {

    let edad = Number(prompt("Que edad tenes?"))
    if (edad < 18) {
        alert("Acceso denegado")
        return;
    } else if (edad >= 18) {
        alert("Bienvenido/a")
        calcularPrestamo()
    }

}




verificarEdad()



function calcularPrestamo() {
    let monto = prompt("Solicita monto")
    let cuotas = prompt("Selecciona el plazo hasta 6")
    

    let interes = 1.15

    for (let index = 0; index < monto; index, i++) {




        alert("El monto a pagar por cada cuota es de: " + monto * interes / cuotas)
    }

}

const ejemploPrestamos = [
    {
        id: "Simulador1",
        Monto: 50000,
        Plazo: 1,
        Interes: 1.15,
        Cuota: 57500
    },
    {
        id: "Simulador2",
        Monto: 50000,
        Plazo: 2,
        Interes: 1.15,
        Cuota: 28750
    },
    {
        id: "Simulador3",
        Monto: 50000,
        Plazo: 3,
        Interes: 1.15,
        Cuota: 19166.66
    },
    {
        id: "Simulador4",
        Monto: 50000,
        Plazo: 4,
        Interes: 1.15,
        Cuota: 14375
    },
    {
        id: "Simulador5",
        Monto: 50000,
        Plazo: 5,
        Interes: 1.15,
        Cuota: 11500
    },
    {
        id: "Simulador6",
        Monto: 50000,
        Plazo: 6,
        Interes: 1.15,
        Cuota: 9538.33
    },

];



ejemploPrestamos.forEach((el, index) => {
    console.log(el.Monto * 1.15 / el.Cuota)


})





let newArray = ejemploPrestamos.map((el) => {
    return {
        ...el,
        Monto: (el.Monto * 1.15 / el.Cuota).toFixed(2)
    }
}
)

console.log(newArray)
console.log(ejemploPrestamos)

const nodoPadre = document.getElementById("nodoPadre")
const nodosHijos = document.getElementsByClassName("className")
const nodoTag = document.getElementsByTagName("div")
const nodoAPartirDeQuery = document.querySelector(".eventos input")
const nodosAPartirDeQuery = document.querySelectorAll(".eventos input")



console.dir(nodoPadre)

const arrayDeNodos = Array.from(nodosHijos)
const arrayDeNodosTag = Array.from(nodoTag)
const arrayNodosAPartirDeQuery = Array.from(nodosAPartirDeQuery)

console.log(arrayDeNodos)
console.log(arrayDeNodosTag)
console.log(nodoAPartirDeQuery)
console.log(nodosAPartirDeQuery)



nodoPadre.innerHTML = `<div>
<h2>${ejemploPrestamos[0].id}</h2>
<p>${ejemploPrestamos[0].Monto}</p>
<p>${ejemploPrestamos[0].Plazo}</p>
<p>${ejemploPrestamos[0].Cuota}</p>
</div>`

ejemploPrestamos.forEach((el) => {
    nodoPadre.innerHTML +=  `<div>
    <h2>${ el.id}</h2>
    <p>${el.Monto}</p>
    <p>${el.Plazo}</p>
    <p>${el.Cuota}</p>
    </div>`

}
)

ejemploPrestamos.forEach((el) =>{
    const divPadre = document.createElement("div")
    const id = document.createElement("h2")
    const Monto = document.createElement("p")
    const Plazo = document.createElement("p")
    const Cuota = document.createElement("p")

    id.innerText = el.id
Monto.innerText = el.Monto
Plazo.innerText = el.Plazo
Cuota.innerText = el.Cuota


divPadre.appendChild(id)
divPadre.appendChild(Monto)
divPadre.appendChild(Plazo)
divPadre.appendChild(Cuota)

nodoPadre.appendChild(divPadre)

})

const boton = document.getElementById("click")
const input = document.getElementById ("input")

