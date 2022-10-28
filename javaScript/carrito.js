const pc = [
    {
        id :0,
        nombre: "AOURUS S12th",
        precio: 250,
        imagen:"./img/pc1.webp",
    },
    
    {
        id :1,
        nombre: "AOURUS xX123th",
        precio: 450,
        imagen:"./img/pc2.webp",
   },

   {
        id :2,
        nombre: "AOURUS MM239",
        precio: 720,
        imagen:"./img/pc3.webp",
    },

    {
        id :3,
        nombre: "AOURUS l239px",
        precio: 1250,
        imagen:"./img/pc4.webp",
   },

   {
        id :4,
        nombre: "AOURUS 160Rx",
        precio: 1050,
        imagen:"./img/pc5.webp",
    },

    {
        id :5,
        nombre: "AOURUS S12th",
        precio: 1550,
        imagen:"./img/pc6.webp",
    },
]
let contenedorPC = document.getElementById("imgPc")

const monitores = [
    {
        id :0,
        nombre: "AOURUS FV35",
        precio: 250,
        imagen:"./img/mon1.webp",
    },
    
    {
        id :1,
        nombre: "AOURUS FV250",
        precio: 450,
        imagen:"./img/mon2.webp",
   },

   {
        id :2,
        nombre: "AOURUS FV200",
        precio: 720,
        imagen:"./img/mon3.webp",
    },

    {
        id :3,
        nombre: "AOURUS 300XP",
        precio: 1250,
        imagen:"./img/mon4.webp",
   },

   {
        id :4,
        nombre: "AOURUS 10040X",
        precio: 1050,
        imagen:"./img/mon5.webp",
    },

    {
        id :5,
        nombre: "AOURUS RX200",
        precio: 1550,
        imagen:"./img/mon6.webp",
    },
]
let contenedorMonitores = document.getElementById("imgMonitores")

const perifericos = [
    {
        id :0,
        nombre: "MOUSE AOURUS K9",
        precio: 250,
        imagen:"./img/per1.webp",
    },
    
    {
        id :1,
        nombre: " MOUSE AOURUS K12",
        precio: 450,
        imagen:"./img/per2.webp",
   },

   {
        id :2,
        nombre: "SILLA AOURUS",
        precio: 720,
        imagen:"./img/per3.webp",
    },

    {
        id :3,
        nombre: "SILLA AOURUS",
        precio: 1250,
        imagen:"./img/per4.webp",
   },

   {
        id :4,
        nombre: "TECLADO",
        precio: 1050,
        imagen:"./img/per5.webp",
    },

]

let contenedorPerifericos = document.getElementById("imgPerifericos")


const carrito=[]

function renderizarCaratsPC(){
    for (const producto of pc){
        contenedorPC.innerHTML+=`
        <div  class="card" id="cartaDiseño" style="width: 18rem;">
            <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">El precio es de $${producto.precio}</p>
                <button id='btn ${producto.id}' href="#" class="btn btn-primary">Buy it</button>
            </div>
        </div>
    `;
    }

    pc.forEach((producto)=>{
        let boton1 = document.getElementById(`btn ${producto.id}`)
        boton1.addEventListener("click", function (){agregarCarro(producto)})
        
    })
}

function renderizarCaratsMonitores(){
    for (const producto of monitores){
        contenedorMonitores.innerHTML+=`
        <div  class="card" id="cartaDiseño" style="width: 18rem;">
            <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">El precio es de $${producto.precio}</p>
                <button id='btn ${producto.id}' href="#" class="btn btn-primary">Buy it</button>
            </div>
        </div>
    `;
    }

    monitores.forEach((producto)=>{
        let boton2 = document.getElementById(`btn ${producto.id}`)
        boton2.addEventListener("click", function (){agregarCarro(producto)})
        
    })
}

function renderizareCartasPer(){
    for (const producto of perifericos){
        contenedorPerifericos.innerHTML+=`
        <div  class="card" id="cartaDiseño" style="width: 18rem;">
            <img src=${producto.imagen} class="card-img-top" alt=${producto.nombre}>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">El precio es de $${producto.precio}</p>
                <button id='btn ${producto.id}' href="#" class="btn btn-primary">Buy it</button>
            </div>
        </div>
    `;
    }

    perifericos.forEach((producto)=>{
        let boton2 = document.getElementById(`btn ${producto.id}`)
        boton2.addEventListener("click", function (){agregarCarro(producto)})
        
    })
}


renderizareCartasPer()
renderizarCaratsMonitores()
renderizarCaratsPC()


function agregarCarro (productoAComprar){
    carrito.push(productoAComprar)
    document.getElementById("totalPC").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
        </tr>
    `;

    let totalPrecio = carrito.reduce((acumulador, prod) =>acumulador + prod.precio,0)

    document.getElementById("total").innerText =  "Total a pagar $: " + totalPrecio

    Swal.fire({
        title: 'Producto Agregado Exitosamente',
        text: productoAComprar.nombre,
        imageUrl: productoAComprar.imagen,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background : "rgba(192, 191, 191)",
        color : "blueviolet",
      })

}


const btnFinal = document.getElementById("btnFinalizar")

btnFinal.onclick = () => {
    document.getElementById("totalPC").innerHTML = ""
    document.getElementById("total").innerText =  "Total a pagar $: "

    Toastify({
        text: "Compra Finalizada",
        duration: 3000,
        style:{
            background:"blueviolet",
        }
    }).showToast();
}