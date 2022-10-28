const contenedorRegistro = document.getElementById("registro")

function renderizarFormulario(){
    contenedorRegistro.innerHTML += `

    <div id="formulario">
                
        <form action="" id="form">
            <label for="">Name:</label>
            <input id="name" type="text" placeholder="Enter your Name" required>

            <label for="">Last Name:</label>
            <input id="lastName" type="text" placeholder="Enter your Last name" required>

            <label for="">Email:</label>
            <input id="email" type="mail" placeholder="Enter your Email" required>

            <label for="">Constraseña:</label>
            <input id="contr" type="password" placeholder="Enter your password" required>

           

            <div class="d-grid gap-2 col-6 mx-auto">
            <input class="btn btn-primary" type="submit" id="btnR" value="REGISTRARME"></input>
            </div>

            
            <a id="btnSesion">Iniciar Sesion</a>
        </form>
    </div>

    `;
}

renderizarFormulario()

const btnSesion = document.getElementById("btnSesion")

    btnSesion.onclick = () => {
        Swal.fire({
            title: 'Login Form',
            html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
            <input type="password" id="password" class="swal2-input" placeholder="Password">`,
            confirmButtonText: 'Sign in',
            focusConfirm: false,
            preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!login || !password) {
                Swal.showValidationMessage(`Please enter login and password`)
            }
            return { login: login, password: password }
            }
        }).then((result) => {
            Swal.fire(`
            Login: ${result.value.login}
            Password: ${result.value.password}
            `.trim())
        })
}

const registro= []

const btnRegistro = document.getElementById("btnR")

btnRegistro.onclick = () =>{
    let form = document.getElementById('form').elements;
    for(var i = 0; i<= form.length - 1; i++){
        if(form[i].type == 'text'){
            localStorage.setItem(form[i].id, JSON.stringify(form[i].value));
        }
    }
}