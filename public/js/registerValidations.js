window.onload = function () {


    let titulo = document.querySelector('.titulo-formulario-registro')


    let formulario = document.querySelector('#formularioCrear')
    let inputNombre = document.querySelector('#inputNombre');
    let inputApellido = document.querySelector('#inputApellido');
    let inputEmail = document.querySelector('#inputCorreo');
    let inputContrasena = document.querySelector('#inputContrasenaRegistro');
    let inputConfirmarContrasena = document.querySelector('#inputConfirmarContrasena')
    let inputAvatar = document.querySelector('#inputAvatar')

    let ulErroresRegistro = document.querySelector('.erroresRegistro')


    inputNombre.addEventListener('blur', () => {
        if (inputNombre.value.trim() == '') {
            inputNombre.classList.add('is-invalid')
        } else if (inputNombre.value.trim().length < 2) {
            inputNombre.classList.add('is-invalid')
        } else {
            inputNombre.classList.remove('is-invalid');
            inputNombre.classList.add('is-valid');
        }
    })

    inputApellido.addEventListener('blur', () => {
        if (inputApellido.value.trim() == '') {
            inputApellido.classList.add('is-invalid')
        } else if (inputApellido.value.trim().length < 2) {
            inputApellido.classList.add('is-invalid')
        } else {
            inputApellido.classList.remove('is-invalid');
            inputApellido.classList.add('is-valid');
        }

    })

    inputEmail.addEventListener('blur', () => {
        if (inputEmail.value.trim() == '') {
            inputEmail.classList.add('is-invalid')
        } else if (!validator.isEmail(inputEmail.value.trim())) {
            inputEmail.classList.add('is-invalid')
        } else {
            inputEmail.classList.remove('is-invalid')
            inputEmail.classList.add('is-valid')
        }
    })

    inputContrasena.addEventListener('blur', () => {
        if (inputContrasena.value.trim() == '') {
            inputContrasena.classList.add('is-invalid')
        } else if (inputContrasena.value.trim().length < 8) {
            inputContrasena.classList.add('is-invalid')
        } else if (!validator.matches(inputContrasena.value.trim(), /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
            inputContrasena.classList.add('is-invalid')
        } else {
            inputContrasena.classList.remove('is-invalid')
            inputContrasena.classList.add('is-valid')
            inputConfirmarContrasena.classList.remove('is-invalid');

        }
    })


    //Validaciones de SUBMIT
    formulario.addEventListener('submit', (e) => {

        let errores = []

        let extensionesPermitidas = /(\.jpg|\.jpeg|\.png|\.gif)$/i

        if (inputNombre.value.trim() == '') {
            errores.push('Debes ingresar un nombre')
        } else if (inputNombre.value.trim().length < 2) {
            errores.push('El nombre debe tener más de dos caracteres')
        }

        if (inputApellido.value.trim() == '') {
            errores.push('Debes ingresar un apellido')
        } else if (inputApellido.value.trim().length < 2) {
            errores.push('El apellido debe tener más de dos caracteres')
        }

        if (inputEmail.value.trim() == '') {
            errores.push('Debes ingresar un email')
        } else if (!validator.isEmail(inputEmail.value.trim())) {
            errores.push('Debes ingresar un email en formato valido')
        }

        if (inputContrasena.value.trim() == '') {
            errores.push('Debes ingresar una contraseña')
        } else if (inputContrasena.value.trim().length < 8) {
            errores.push('La contraseña debe tener un minimo de 8 caracteres')
        } else if (!validator.matches(inputContrasena.value.trim(), /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
            errores.push('La contraseña debe tener al menos una letra minúscula, una letra mayúscula, un número y un caracter especial')
        }

        if (inputConfirmarContrasena.value.trim() == '') {
            inputConfirmarContrasena.classList.add('is-invalid')
        } else if (inputConfirmarContrasena.value.trim() != inputContrasena.value.trim()) {
            inputConfirmarContrasena.classList.add('is-invalid')
            errores.push('Las contraseñas tienen que coincidir')
        } else {
            inputConfirmarContrasena.classList.remove('is-invalid');
            inputConfirmarContrasena.classList.add('is-valid')
        }

        if (inputAvatar.value.trim() == '') {
            errores.push('Debe subir una imagen de perfil')
        } else if (!extensionesPermitidas.exec(inputAvatar.value)) {
            errores.push('La imagen debe tener formato .jpg, .jpeg, .png, .gif')
        }


        if (errores.length > 0) {

            e.preventDefault()

            ulErroresRegistro.innerHTML = ''

            for (let i = 0; i < errores.length; i++) {
                ulErroresRegistro.innerHTML += "<li class = 'alert-warning'>" + errores[i] + "</li>"
            }

        }


    })

}