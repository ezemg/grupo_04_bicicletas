

window.onload = function () {

    let titulo = document.querySelector('.titulo-formulario-registro')


    let formulario = document.querySelector('#formularioLogin')
    let inputEmail = document.querySelector('#inputEmail');
    let inputContrasena = document.querySelector('#inputContrasena');

    let ulErroresLogin = document.querySelector('.erroresLogin')


    inputEmail.addEventListener('blur', () => {
        if (inputEmail.value.trim() == '') {
            inputEmail.classList.add('is-invalid')
        } else if (!validator.isEmail(inputEmail.value.trim())) {
            inputEmail.classList.add('is-invalid')
        } else {
            inputEmail.classList.remove('is-invalid');
            inputEmail.classList.add('is-valid');
        }
    })

    inputContrasena.addEventListener('blur', () => {
        if (inputContrasena.value.trim() == '') {
            inputContrasena.classList.add('is-invalid')
        } else {
            inputContrasena.classList.remove('is-invalid');
            inputContrasena.classList.add('is-valid');
        }
    })

    //Validaciones de SUBMIT
    formulario.addEventListener('submit', (e) => {

        let errores = []

        if (inputEmail.value.trim() == '') {
            errores.push('Debes ingresar un email')
        } else if (!validator.isEmail(inputEmail.value.trim())) {
            errores.push('Debes ingresar un email en formato válido')
        }

        if (inputContrasena.value.trim() == '') {
            errores.push('Debes ingresar una contraseña')
        }

        if (errores.length > 0) {

            e.preventDefault()

            ulErroresLogin.innerHTML = ''

            for (let i = 0; i < errores.length; i++) {
                ulErroresLogin.innerHTML += "<li class = 'alert-warning'>" + errores[i] + "</li>"
            }
        }

    })

}