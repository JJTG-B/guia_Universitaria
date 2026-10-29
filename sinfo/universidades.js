
document.addEventListener("DOMContentLoaded", function () {
    const buscador = document.getElementById("buscador");
    const tarjetas = document.querySelectorAll(".universidad-card");

    // Comprobar que exista el buscador
    if (!buscador) {
        console.error('No se encontró el elemento con id="buscador".');
        return;
    }

    // Normalizar texto para facilitar las búsquedas
    function normalizarTexto(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    // Buscar universidades al escribir
    buscador.addEventListener("input", function () {
        const texto = normalizarTexto(buscador.value);
        let resultados = 0;

        tarjetas.forEach(function (tarjeta) {
            const nombre = tarjeta.getAttribute("data-nombre") || "";
            const encabezado = tarjeta.querySelector("h2, h3");
            const titulo = encabezado ? encabezado.textContent : "";

            const contenido = normalizarTexto(nombre + " " + titulo);
            const coincide = contenido.includes(texto);

            tarjeta.style.display = coincide ? "" : "none";

            if (coincide) {
                resultados++;
            }
        });

        // Mostrar un mensaje cuando no haya coincidencias
        let mensaje = document.getElementById("sin-resultados");

        if (!mensaje) {
            mensaje = document.createElement("p");
            mensaje.id = "sin-resultados";
            mensaje.textContent = "No se encontraron universidades.";
            mensaje.setAttribute("role", "status");
            mensaje.style.textAlign = "center";
            mensaje.style.color = "#777486";
            mensaje.style.padding = "25px 10px";

            const lista = document.getElementById("listaUniversidades");

            if (lista && lista.parentNode) {
                lista.parentNode.insertBefore(mensaje, lista.nextSibling);
            }
        }

        mensaje.style.display = resultados === 0 ? "block" : "none";
    });
});
