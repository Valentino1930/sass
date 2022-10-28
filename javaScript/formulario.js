const contenedorRegistro = document.getElementById("registro")

function renderizarFormulario(){
    contenedorRegistro.innerHTML += `

    <div id="formulario">
                
        <form action="">
            <label for="">Name:</label>
            <input type="text" placeholder="Enter your Name" required>

            <label for="">Las Name:</label>
            <input type="text" placeholder="Enter your Last name" required>

            <label for="">Email:</label>
            <input type="mail" placeholder="Enter your Email" required>

            <label for="">Constraseña:</label>
            <input type="password" placeholder="Enter your password" required>

            <label for="">Terminos Y Condiciones</label>
            <input type="checkbox" required>

            <button>REGISTRARME</button>
            <button>Iniciar Sesion</button>
        </form>

    </div>

    `;
}

renderizarFormulario()