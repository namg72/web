fetch("/videos.json")
    .then(resp => resp.json())
    .then(data => {



        const videos = document.getElementById("videos");
        const fragment = document.createDocumentFragment();
        for (let datos of data) {



            let caja = document.createElement("DIV")
            let video = document.createElement("VIDEO");
            let texto = document.createElement("P");

            video.src = `/videos/${datos.name}`;
            video.controls = true;
            video.poster = `/imagenes/${datos.caratula}`;
            texto.textContent = datos.texto;

            caja.appendChild(video);
            caja.appendChild(texto);

            fragment.appendChild(caja);
            console.log(fragment)
        }
        videos.appendChild(fragment)
    })