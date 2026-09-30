
/* =========================================
   DJ eZe - SCRIPT.JS
========================================= */


/* =========================================
   CONFIGURACIÓN DE WHATSAPP
========================================= */

// IMPORTANTE:
// Reemplazá este número por tu número de WhatsApp.
//
// Formato:
// código de país + número
//
// Argentina:
// 549 + código de área + número
//
// EJEMPLO:
// 544743566005

const numeroWhatsApp = "543743566005";


/* =========================================
   ANIMACIÓN AL APARECER LAS SECCIONES
========================================= */

const elementosAnimados = document.querySelectorAll(
    ".service-card, .package-card, .equipment-card, .gallery-item, .about-content, .contact-container"
);

const observer = new IntersectionObserver(
    (elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.style.opacity = "1";
                elemento.target.style.transform = "translateY(0)";

                observer.unobserve(elemento.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


/* Estado inicial de los elementos */

elementosAnimados.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(30px)";

    elemento.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(elemento);

});


/* =========================================
   FORMULARIO DE CONTACTO
========================================= */

const formulario = document.querySelector(".contact-form");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        // Evita que la página se recargue
        event.preventDefault();


        /* Obtener los datos */

        const nombre =
            document.getElementById("nombre").value.trim();

        const evento =
            document.getElementById("evento").value;

        const fecha =
            document.getElementById("fecha").value;

        const mensaje =
            document.getElementById("mensaje").value.trim();


        /* Verificar nombre */

        if (nombre === "") {

            alert("Por favor, ingresá tu nombre.");

            return;
        }


        /* Convertir el tipo de evento */

        let tipoEvento = "No especificado";


        if (evento === "cumpleanos") {
            tipoEvento = "Cumpleaños";
        }

        else if (evento === "fiesta15") {
            tipoEvento = "Fiesta de 15";
        }

        else if (evento === "escolar") {
            tipoEvento = "Evento escolar";
        }

        else if (evento === "particular") {
            tipoEvento = "Evento particular";
        }

        else if (evento === "otro") {
            tipoEvento = "Otro";
        }


        /* Convertir la fecha */

        let fechaEvento = "No especificada";


        if (fecha !== "") {

            const fechaObjeto =
                new Date(fecha + "T00:00:00");

            fechaEvento =
                fechaObjeto.toLocaleDateString("es-AR");
        }


        /* Crear el mensaje */

        const textoWhatsApp =
`Hola DJ eZe 👋

Quiero consultar por un evento.

👤 Nombre: ${nombre}

🎉 Tipo de evento: ${tipoEvento}

📅 Fecha: ${fechaEvento}

📝 Mensaje:
${mensaje || "Sin mensaje adicional."}

¿Podrían informarme sobre disponibilidad y precio?`;


        /* Codificar el mensaje */

        const mensajeCodificado =
            encodeURIComponent(textoWhatsApp);


        /* Crear enlace de WhatsApp */

        const enlace =
            `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;


        /* Verificar que se haya configurado el número */

        if (numeroWhatsApp.includes("X")) {

            alert(
                "Primero tenés que colocar tu número de WhatsApp en script.js."
            );

            return;
        }


        /* Abrir WhatsApp */

        window.open(enlace, "_blank");

    });

}


/* =========================================
   BOTONES DE CONSULTA
========================================= */

const botonesConsulta =
    document.querySelectorAll(
        'a[href="#contacto"]'
    );


botonesConsulta.forEach((boton) => {

    boton.addEventListener("click", () => {

        setTimeout(() => {

            const nombreInput =
                document.getElementById("nombre");

            if (nombreInput) {
                nombreInput.focus();
            }

        }, 600);

    });

});


/* =========================================
   FECHA MÍNIMA DEL EVENTO
========================================= */

const campoFecha =
    document.getElementById("fecha");

if (campoFecha) {

    const hoy =
        new Date().toISOString().split("T")[0];

    campoFecha.min = hoy;

}


/* =========================================
   EFECTO DE ESCRITURA EN EL HERO
========================================= */

const tituloHero =
    document.querySelector(".hero h2");

if (tituloHero) {

    const textoOriginal =
        tituloHero.textContent.trim();

    tituloHero.textContent = "";

    let posicion = 0;

    function escribirTexto() {

        if (posicion < textoOriginal.length) {

            tituloHero.textContent +=
                textoOriginal.charAt(posicion);

            posicion++;

            setTimeout(escribirTexto, 45);
        }

    }

    setTimeout(escribirTexto, 500);

}


/* =========================================
   MENSAJE EN CONSOLA
========================================= */

console.log(
    "🎧 DJ eZe - Página web cargada correctamente."
);

console.log(
    "🔊 Sonido • Música • Iluminación"
)


function consultarEquipo(equipo) {
    const numero = "5493743566005";

    const mensaje = "Hola DJ eZe 👋\n\nQuiero consultar por: " + equipo + "\n\n¿Está disponible y cuál es el precio?";

    const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

    window.location.href = url;
}

/* =========================================
   MENÚ CELULAR
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}

