window.onload = function () {


    let formulario = document.querySelector('#formularioCrearProducto')
    let inputName = document.querySelector('#inputName');
    let inputDescripcion = document.querySelector('#inputDescription');
    let inputFotoProducto = document.querySelector('#inputFotoProducto')

    let ulErroresProducto = document.querySelector('.erroresCrearProducto')


    inputName.addEventListener('blur', () => {
        if (inputName.value.trim() == '') {
            inputName.classList.add('is-invalid')
        } else if (inputName.value.trim().length < 5) {
            inputName.classList.add('is-invalid')
        } else {
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
        }
    })

    inputDescripcion.addEventListener('blur', () => {
        if (inputDescripcion.value.trim() == '') {
            inputDescripcion.classList.add('is-invalid')
        } else if (inputDescripcion.value.trim().length < 20) {
            inputDescripcion.classList.add('is-invalid')
        } else {
            inputDescripcion.classList.remove('is-invalid');
            inputDescripcion.classList.add('is-valid');
        }

    })

    //Validaciones de SUBMIT
    formulario.addEventListener('submit', (e) => {

        let errores = []

        let extensionesPermitidas = /(\.jpg|\.jpeg|\.png|\.gif)$/i

        if (inputName.value.trim() == '') {
            errores.push('Debes ingresar un nombre de producto')
        } else if (inputName.value.trim().length < 5) {
            errores.push('El nombre del producto debe tener más de cinco caracteres')
        }

        if (inputDescripcion.value.trim() == '') {
            errores.push('Debes ingresar una descripción del producto')
        } else if (inputDescripcion.value.trim().length < 20) {
            errores.push('La descripción del producto debe tener más de veinte caracteres')
        }


        if (inputFotoProducto.value.trim() == '') {
            errores.push('Debe subir una imagen de producto')
        } else if (!extensionesPermitidas.exec(inputFotoProducto.value)) {
            errores.push('La imagen debe tener formato .jpg, .jpeg, .png, .gif')
        }

        console.log(errores)

        if (errores.length > 0) {

            e.preventDefault()

            ulErroresProducto.innerHTML = ''

            for (let i = 0; i < errores.length; i++) {
                ulErroresProducto.innerHTML += "<li class = 'alert-warning'>" + errores[i] + "</li>"
            }
        }
    })

}