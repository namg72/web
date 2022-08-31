const chekeado = document.getElementById("checkForm");
const aviso = document.getElementById("aceptarForm");
const enviar = document.getElementById("enviar_Form");
const formulario = document.getElementById("form")
const nameForm = document.getElementById("form--name")
const surname = document.getElementById("form--surname")
const email = document.getElementById("form--email")
const phone = document.getElementById("form--phone")
const affair = document.getElementById("form--affair")
const message = document.getElementById("form--message")



chekeado.addEventListener("click", () => {

    if (chekeado.checked) {
        aviso.classList.add("ocultar")
        enviar.disabled = false;
        enviar.style.color = "black"


    } else {

        aviso.classList.remove("ocultar");
        enviar.disabled = true;

    }
});




//validación con expresiones regulares


//Creamos un objeto con los campos del formulario
const formValido = {
    name: false,
    surname: false,
    email: false,
    phone: false,
    message: false
}



//Validamos que los campos sean correctos y en ese caso pasamos a true los campos del objeto formValido
//Con el evento change controlomas que el campo haya cambiado, de vacio a cualquier valor y ese valor es el evento que luego comprobamos con el regex
//En el caso del sunto solomente comprobamos que haya escrito algo, que la logitud de su value sea mayor que 0∫


nameForm.addEventListener('change', (e) => {
    if (validateName(e.target.value)) {
        formValido.name = true
        nameForm.style.color = "black"
    } else {
        formValido.name = false
        nameForm.style.color = "red"
    }

    console.log("Nombre: " + formValido.surname)
})

surname.addEventListener('change', (e) => {
    if (validateName(e.target.value)) {
        formValido.surname = true
        surname.style.color = "black"
    } else {

        formValido.surname = false
        surname.style.color = "red"
    }

    console.log("Apellido: " + formValido.surname)
})


email.addEventListener('change', (e) => {
    if (validateEmail(e.target.value)) {
        formValido.email = true
        email.style.color = "black"
    } else {
        formValido.email = false
        email.style.color = "red"
    }

    console.log("email: " + formValido.email)

})


phone.addEventListener('change', (e) => {
    if (validatePhone(e.target.value)) {
        formValido.phone = true
        phone.style.color = "black"
    } else {
        formValido.phone = false
        phone.style.color = "red"
    }
    console.log("telefono: " + formValido.phone)
})

message.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formValido.message = true;
    console.log("Mensage: " + formValido.message)
})



const validateForm = () => {
    const formValues = Object.values(formValido)
    const valid = formValues.findIndex(value => value == false)

    if (valid == -1) {
        formulario.submit()
        alert("datos enviados correctamente")
    } else alert('Formulario invalido')
}



formulario.addEventListener(("submit"), (e) => {

    e.preventDefault();
    validateForm()
    console.log("pulsado boton")
    document.getElementById("enviar_Form").className = "button-active"
})