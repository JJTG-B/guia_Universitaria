const buscador = document.getElementById("buscador-carreras");

const carreras = document.querySelectorAll(".carrera-card");

const sinResultados = document.getElementById("sin-resultados");


buscador.addEventListener("input", function () {

    const texto = buscador.value.toLowerCase().trim();

    let encontrados = 0;


    carreras.forEach(function (carrera) {

        const nombre = carrera
            .querySelector("h2")
            .textContent
            .toLowerCase();


        if (nombre.includes(texto)) {

            carrera.style.display = "flex";

            encontrados++;

        } else {

            carrera.style.display = "none";

        }

    });


    if (encontrados === 0) {

        sinResultados.style.display = "block";

    } else {

        sinResultados.style.display = "none";

    }

});