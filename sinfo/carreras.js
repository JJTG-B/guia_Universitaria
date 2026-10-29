
const nombresUniversidades = {
    upea: "UPEA",
    unifranz: "UNIFRANZ",
    unitepc: "UNITEPC",
    uub: "UUB",
    ucb: "UCB",
    usfa: "USFA",
    utb: "UTB",
    lasalle: "La Salle"
};

const nombresAreas = {
    ingenieria: "Ingeniería y Tecnología",
    salud: "Salud",
    economia: "Economía y Administración",
    sociales: "Ciencias Sociales",
    educacion: "Educación",
    arte: "Arte y Comunicación",
    naturales: "Ciencias Naturales"
};

// Descripciones de las carreras conservadas
const descripcionesCarreras = {
    "Ingeniería Civil":
        "Estudia el diseño, la construcción y el mantenimiento de obras como edificios, carreteras, puentes y otras infraestructuras. Incluye conocimientos de estructuras, materiales, suelos e hidráulica para desarrollar proyectos seguros y funcionales.",

    "Ingeniería Electrónica":
        "Estudia el diseño, la instalación y el mantenimiento de circuitos y sistemas electrónicos. Incluye el análisis de señales, el uso de sensores y el funcionamiento de dispositivos tecnológicos. También aborda sistemas de control y automatización utilizados en diferentes industrias.",

    "Ingeniería Eléctrica":
        "Estudia la generación, transmisión y distribución de la energía eléctrica. Incluye el diseño de instalaciones, el análisis de circuitos y el funcionamiento de máquinas eléctricas. También aborda medidas de seguridad y eficiencia en el uso de la energía.",

    "Ingeniería de Software":
        "Se dedica al análisis, diseño y desarrollo de programas y aplicaciones informáticas. Incluye programación, bases de datos, pruebas y mantenimiento de software. También considera la organización de proyectos tecnológicos para crear soluciones útiles y confiables.",

    "Ingeniería de Sistemas Informáticos":
        "Combina programación, administración de sistemas y gestión de información para resolver problemas tecnológicos. Comprende el desarrollo de aplicaciones, el manejo de bases de datos y el funcionamiento de redes informáticas. También aborda la planificación y mejora de sistemas digitales.",

    "Ingeniería Ambiental":
        "Estudia los problemas relacionados con la contaminación y el cuidado del medioambiente. Incluye la gestión de residuos, el tratamiento del agua y la evaluación de impactos ambientales. Busca proponer soluciones que permitan utilizar los recursos naturales de manera responsable.",

    "Ingeniería Comercial":
        "Integra conocimientos de administración, economía y estrategias comerciales para mejorar el funcionamiento de las organizaciones. Incluye análisis de mercados, planificación empresarial y evaluación de oportunidades. También aborda la gestión de recursos y la toma de decisiones comerciales.",

    "Marketing":
        "Estudia las necesidades de los consumidores y las estrategias para posicionar productos o servicios. Incluye investigación de mercados, publicidad, comunicación de marca y planificación comercial. También analiza el comportamiento de los clientes y la evaluación de campañas.",

    "Auditoría":
        "Se enfoca en revisar y evaluar la información financiera y los procedimientos de una organización. Incluye el análisis de registros contables, el control interno y la verificación del cumplimiento de normas. Su finalidad es identificar irregularidades y contribuir a una gestión transparente.",

    "Ciencias Políticas":
        "Analiza el poder, las instituciones, los sistemas de gobierno y la participación ciudadana. Incluye el estudio de políticas públicas, procesos electorales y organización del Estado. También permite comprender los problemas políticos y las decisiones que afectan a la sociedad.",

    "Sociología":
        "Estudia cómo se organizan las sociedades y cómo se relacionan las personas dentro de ellas. Incluye el análisis de grupos sociales, cultura, desigualdad y cambios sociales. También utiliza métodos de investigación para comprender problemas colectivos y sus posibles soluciones.",

    "Comunicación Audiovisual":
        "Se orienta a la creación de contenidos mediante imágenes, sonido y recursos narrativos. Incluye producción de videos, fotografía, edición, guion y planificación de proyectos audiovisuales. También aborda el uso de herramientas digitales para comunicar ideas a diferentes públicos.",

    "Medicina Veterinaria y Zootecnia":
        "Aborda la salud, la prevención de enfermedades y el cuidado de los animales. También estudia la reproducción, alimentación y manejo de especies destinadas a distintas actividades productivas. Combina conocimientos científicos con prácticas orientadas al bienestar animal y la producción responsable.",

    "Nutrición y Dietética":
        "Estudia la relación entre la alimentación, los nutrientes y la salud de las personas. Incluye la evaluación de hábitos alimentarios y la planificación de una alimentación adecuada según diferentes necesidades. También aborda la educación nutricional y la prevención de problemas relacionados con la dieta.",

    "Farmacia":
        "Se enfoca en los medicamentos, sus componentes, usos y formas de conservación. Incluye conocimientos sobre preparación, dispensación y control de productos farmacéuticos. También aborda el uso responsable de medicamentos y la orientación relacionada con la seguridad del paciente.",

    "Producción Audiovisual":
        "Comprende la planificación y realización de contenidos en video y otros formatos audiovisuales. Incluye guion, grabación, iluminación, sonido y edición. También aborda la coordinación de equipos y recursos para desarrollar proyectos destinados a medios digitales y otros canales de difusión."
};

// Universidades asociadas a cada carrera
const universidadesPorCarrera = {
    "Ingeniería Civil": ["upea", "utb"],
    "Ingeniería Electrónica": ["upea", "utb"],
    "Ingeniería Eléctrica": ["upea"],
    "Ingeniería de Software": ["usfa"],
    "Ingeniería de Sistemas Informáticos": [
        "upea",
        "unifranz",
        "usfa",
        "utb",
        "uub",
        "lasalle"
    ],
    "Ingeniería Ambiental": ["upea"],
    "Ingeniería Comercial": [
        "unifranz",
        "usfa",
        "utb",
        "lasalle"
    ],
    "Marketing": ["unifranz", "usfa", "utb"],
    "Auditoría": ["unifranz"],
    "Ciencias Políticas": ["upea"],
    "Sociología": ["upea"],
    "Comunicación Audiovisual": ["usfa"],
    "Medicina Veterinaria y Zootecnia": ["upea"],
    "Nutrición y Dietética": ["upea"],
    "Farmacia": ["unifranz", "ucb"],
    "Producción Audiovisual": ["usfa"]
};

// Clasifica cada carrera por área
function obtenerArea(nombre) {
    const n = nombre.toLowerCase();

    if (/medicina|enfermer|odontolog|farmacia|bioquímica|fisioterapia|fonoaudiología|biomédica|nutrición|obstetricia|laboratorio clínico/.test(n)) {
        return "salud";
    }

    if (/administración|contaduría|auditoría|economía|comercial|marketing|banca|finanzas|negocios/.test(n)) {
        return "economia";
    }

    if (/educación|parvularia|pedagogía/.test(n)) {
        return "educacion";
    }

    if (/arte|diseño|comunicación|fotografía|multimedia|publicidad|música|teatro|audiovisual/.test(n)) {
        return "arte";
    }

    if (/agronomía|agroindustrial|veterinaria|biología|ambiental|naturales|biotecnología/.test(n)) {
        return "naturales";
    }

    if (/derecho|psicología|trabajo social|sociología|antropología|ciencias políticas|relaciones internacionales/.test(n)) {
        return "sociales";
    }

    return "ingenieria";
}

// Genera las carreras automáticamente
const carreras = Object.keys(descripcionesCarreras).map(nombre => ({
    nombre,
    area: obtenerArea(nombre),
    universidades: universidadesPorCarrera[nombre] || []
}));

// Elementos HTML
const buscador = document.getElementById("buscador-carreras");
const filtroUniversidad = document.getElementById("filtro-universidad");
const filtroArea = document.getElementById("filtro-area");
const contenedor = document.getElementById("contenedor-carreras");
const contador = document.getElementById("contador-carreras");
const sinResultados = document.getElementById("sin-resultados");

// Muestra las tarjetas de las carreras
function mostrarCarreras(lista) {
    contenedor.innerHTML = "";

    lista.forEach(carrera => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "carrera-card";

        const universidadesHTML = carrera.universidades.length
            ? carrera.universidades
                .map(codigo =>
                    `<span class="universidad">${nombresUniversidades[codigo] || codigo}</span>`
                )
                .join("")
            : `<span class="universidad">Oferta por verificar</span>`;

        tarjeta.innerHTML = `
            <div class="contenido-card">
                <span class="area">
                    ${nombresAreas[carrera.area] || "Área académica"}
                </span>

                <h3 class="titulo-carrera">${carrera.nombre}</h3>

                <p class="descripcion-carrera">
                    ${descripcionesCarreras[carrera.nombre]}
                </p>

                <div class="bloque-universidades">
                    <span class="etiqueta-universidades">Se ofrece en</span>
                    <div class="universidades">${universidadesHTML}</div>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });

    contador.textContent = lista.length === 1
        ? "1 carrera encontrada"
        : `${lista.length} carreras encontradas`;

    sinResultados.style.display = lista.length === 0
        ? "block"
        : "none";
}

// Aplica los filtros de búsqueda, universidad y área
function filtrarCarreras() {
    const texto = buscador.value.toLowerCase().trim();
    const universidad = filtroUniversidad.value;
    const area = filtroArea.value;

    const resultado = carreras.filter(carrera => {
        const coincideNombre =
            carrera.nombre.toLowerCase().includes(texto);

        const coincideUniversidad =
            universidad === "todas" ||
            carrera.universidades.includes(universidad);

        const coincideArea =
            area === "todas" ||
            carrera.area === area;

        return coincideNombre && coincideUniversidad && coincideArea;
    });

    mostrarCarreras(resultado);
}

// Eventos de los filtros
buscador.addEventListener("input", filtrarCarreras);
filtroUniversidad.addEventListener("change", filtrarCarreras);
filtroArea.addEventListener("change", filtrarCarreras);

// Mostrar todas las carreras al cargar la página
mostrarCarreras(carreras);
