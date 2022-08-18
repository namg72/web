 // Función que nos devuelve la fecha actual con el dia de la semana

 let fechaActual = () => {
         let date = new Date;
         const days = ["Domingo", "Lunes", "Marte", "Miercoles", "Jueves", "Viernes", "Sabado"]
         const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
         let day = days[date.getDay()];
         let month = months[date.getMonth()]
         let fechaCompleta = `${day}, ${date.getDate()} de ${month} de ${date.getFullYear()}`
         return fechaCompleta
     }
     //Insetamos la fecha en el header
 let fecha = document.querySelector("header > p").textContent = fechaActual();


 //Enlaces Tarjetas index

 let tarjetaLimpieza = document.getElementById("tarjetaPintura");
 tarjetaLimpieza.addEventListener("click", () => window.location.href = "/html/pinturas.html");

 let tarjetaLavanderia = document.getElementById("tarjetaLavanderia");
 tarjetaLavanderia.addEventListener("click", () => window.location.href = "/html/lavanderia.html");

 let tarjetaCelulosa = document.getElementById("tarjetaLimpieza");
 tarjetaCelulosa.addEventListener("click", () => window.location.href = "/html/limpieza.html");