
"use strict";

// ========================================
// GUÍA UNIVERSITARIA - TEST VOCACIONAL
// 50 preguntas, resultados y universidades
// ========================================

const $ = (id) => document.getElementById(id);

const zonaPreguntas = $("zonaPreguntas");
const resultado = $("resultado");
const numeroPregunta = $("numeroPregunta");
const textoPregunta = $("textoPregunta");
const opcionesPregunta = $("opcionesPregunta");
const contadorPreguntas = $("contadorPreguntas");
const porcentajeProgreso = $("porcentajeProgreso");
const barraProgreso = $("barraProgreso");
const botonAnterior = $("botonAnterior");
const botonSiguiente = $("botonSiguiente");
const tituloCarrera = $("tituloCarrera");
const descripcionCarrera = $("descripcionCarrera");
const motivoCarrera = $("motivoCarrera");
const carrerasRelacionadas = $("carrerasRelacionadas");
const universidadesResultado = $("universidadesResultado");
const botonRepetir = $("botonRepetir");

const crearPregunta = (texto, opciones) => ({
    texto,
    opciones: opciones.map((opcion) => {
        const separador = opcion.lastIndexOf("|");
        return {
            texto: opcion.slice(0, separador),
            valor: opcion.slice(separador + 1)
        };
    })
});

const preguntas = [
    crearPregunta("¿Qué actividad disfrutas más?", [
        "Resolver problemas tecnológicos|ingenieria_sistemas",
        "Ayudar a cuidar la salud|medicina",
        "Crear dibujos y diseños|diseno_grafico",
        "Organizar proyectos|administracion"
    ]),
    crearPregunta("¿Qué materia te interesa más?", [
        "Matemáticas e informática|ingenieria_sistemas",
        "Biología y ciencias naturales|medicina",
        "Artes y expresión visual|artes_plasticas",
        "Contabilidad y economía|contaduria"
    ]),
    crearPregunta("¿Cómo prefieres resolver un problema?", [
        "Analizando datos y buscando una solución lógica|ingenieria_sistemas",
        "Escuchando a las personas|psicologia",
        "Creando una solución original|diseno_grafico",
        "Revisando normas y procedimientos|derecho"
    ]),
    crearPregunta("¿Qué te gustaría hacer en tu futuro trabajo?", [
        "Desarrollar programas y aplicaciones|ingenieria_sistemas",
        "Atender pacientes|medicina",
        "Diseñar espacios y edificios|arquitectura",
        "Coordinar una empresa|administracion"
    ]),
    crearPregunta("¿Qué actividad realizarías con entusiasmo?", [
        "Investigar cómo funciona una computadora|ingenieria_sistemas",
        "Aprender sobre el cuerpo humano|medicina",
        "Crear ilustraciones y pinturas|artes_plasticas",
        "Orientar a alguien con un problema|psicologia"
    ]),
    crearPregunta("¿Qué habilidad te gustaría desarrollar?", [
        "Programación y pensamiento lógico|ingenieria_sistemas",
        "Atención médica|medicina",
        "Creatividad y comunicación visual|diseno_grafico",
        "Negociación y liderazgo|administracion"
    ]),
    crearPregunta("¿Qué tipo de proyecto elegirías?", [
        "Crear una página web|ingenieria_sistemas",
        "Organizar una campaña de salud|enfermeria",
        "Diseñar un afiche publicitario|diseno_grafico",
        "Preparar un plan de negocio|administracion"
    ]),
    crearPregunta("¿Qué situación te motiva más?", [
        "Encontrar una solución tecnológica|ingenieria_sistemas",
        "Contribuir a mejorar la salud|enfermeria",
        "Defender los derechos de alguien|derecho",
        "Apoyar a una comunidad|trabajo_social"
    ]),
    crearPregunta("¿Qué actividad te resulta más interesante?", [
        "Analizar sistemas informáticos|ingenieria_sistemas",
        "Investigar enfermedades|medicina",
        "Diseñar una vivienda|arquitectura",
        "Revisar ingresos y gastos|contaduria"
    ]),
    crearPregunta("¿Qué te gustaría investigar?", [
        "Inteligencia artificial|ingenieria_sistemas",
        "El comportamiento humano|psicologia",
        "La comunicación mediante imágenes|diseno_grafico",
        "Las leyes y la justicia|derecho"
    ]),
    crearPregunta("¿Cómo te gustaría ayudar a otras personas?", [
        "Creando herramientas digitales|ingenieria_sistemas",
        "Cuidando su salud|enfermeria",
        "Escuchándolas y orientándolas|psicologia",
        "Apoyando a grupos vulnerables|trabajo_social"
    ]),
    crearPregunta("¿Qué tarea preferirías realizar?", [
        "Detectar errores en un programa|ingenieria_sistemas",
        "Estudiar temas de salud en un laboratorio|medicina",
        "Crear una identidad visual|diseno_grafico",
        "Elaborar un presupuesto|contaduria"
    ]),
    crearPregunta("¿Qué espacio de trabajo te atrae más?", [
        "Un entorno de informática|ingenieria_sistemas",
        "Un hospital o centro de salud|medicina",
        "Un estudio artístico|artes_plasticas",
        "Una oficina jurídica|derecho"
    ]),
    crearPregunta("¿Qué te gustaría crear?", [
        "Una aplicación para celulares|ingenieria_sistemas",
        "Un proyecto para mejorar la salud|medicina",
        "Un edificio funcional|arquitectura",
        "Una iniciativa de apoyo comunitario|trabajo_social"
    ]),
    crearPregunta("¿Qué tipo de desafío aceptarías?", [
        "Resolver un problema de programación|ingenieria_sistemas",
        "Comprender síntomas y enfermedades|medicina",
        "Crear una obra artística|artes_plasticas",
        "Resolver un conflicto mediante argumentos|derecho"
    ]),
    crearPregunta("¿Qué te interesa comprender mejor?", [
        "Cómo funcionan los programas|ingenieria_sistemas",
        "Cómo funciona el organismo humano|medicina",
        "Cómo piensan las personas|psicologia",
        "Cómo se administran los recursos|administracion"
    ]),
    crearPregunta("¿Qué actividad realizarías en un trabajo grupal?", [
        "Encargarme de la tecnología|ingenieria_sistemas",
        "Investigar temas de salud|enfermeria",
        "Diseñar la presentación visual|diseno_grafico",
        "Organizar las tareas|administracion"
    ]),
    crearPregunta("¿Qué tema estudiarías por tu cuenta?", [
        "Lenguajes de programación|ingenieria_sistemas",
        "Anatomía y salud|medicina",
        "Técnicas de dibujo y pintura|artes_plasticas",
        "Leyes y derechos ciudadanos|derecho"
    ]),
    crearPregunta("¿Qué resultado te produciría mayor satisfacción?", [
        "Crear un sistema útil|ingenieria_sistemas",
        "Contribuir al cuidado de un paciente|medicina",
        "Diseñar algo que comunique una idea|diseno_grafico",
        "Ayudar a resolver un problema social|trabajo_social"
    ]),
    crearPregunta("¿Qué responsabilidad preferirías asumir?", [
        "Mantener sistemas informáticos|ingenieria_sistemas",
        "Participar en la atención de pacientes|enfermeria",
        "Planificar una construcción|arquitectura",
        "Controlar las cuentas de una organización|contaduria"
    ]),
    crearPregunta("¿Qué herramienta te gustaría utilizar?", [
        "Computadoras y programas|ingenieria_sistemas",
        "Instrumentos médicos|medicina",
        "Materiales artísticos|artes_plasticas",
        "Documentos financieros|contaduria"
    ]),
    crearPregunta("¿Qué situación te gustaría mejorar?", [
        "La eficiencia de los sistemas digitales|ingenieria_sistemas",
        "La atención sanitaria|enfermeria",
        "La funcionalidad de los espacios|arquitectura",
        "La convivencia social|trabajo_social"
    ]),
    crearPregunta("¿Qué tipo de lectura prefieres?", [
        "Tecnología e informática|ingenieria_sistemas",
        "Salud y medicina|medicina",
        "Arte y diseño|artes_plasticas",
        "Psicología y relaciones humanas|psicologia"
    ]),
    crearPregunta("¿Qué tarea realizarías con interés?", [
        "Diseñar una base de datos|ingenieria_sistemas",
        "Explicar hábitos saludables|enfermeria",
        "Diseñar una habitación|arquitectura",
        "Analizar un presupuesto empresarial|administracion"
    ]),
    crearPregunta("¿Qué cualidad consideras importante para tu futuro trabajo?", [
        "Pensamiento lógico|ingenieria_sistemas",
        "Responsabilidad y empatía|enfermeria",
        "Creatividad|diseno_grafico",
        "Capacidad de argumentación|derecho"
    ]),
    crearPregunta("¿Qué proyecto desarrollarías en tu comunidad?", [
        "Una plataforma digital informativa|ingenieria_sistemas",
        "Una campaña de prevención|medicina",
        "Una exposición artística|artes_plasticas",
        "Un programa de apoyo social|trabajo_social"
    ]),
    crearPregunta("¿Qué problema preferirías analizar?", [
        "Un error informático|ingenieria_sistemas",
        "Una enfermedad y sus causas|medicina",
        "Un conflicto entre personas|psicologia",
        "Una irregularidad legal|derecho"
    ]),
    crearPregunta("¿Qué te gustaría aprender a diseñar?", [
        "Software y páginas web|ingenieria_sistemas",
        "Planes de cuidado de pacientes|enfermeria",
        "Logotipos e ilustraciones|diseno_grafico",
        "Planos de edificios|arquitectura"
    ]),
    crearPregunta("¿En qué actividad te gustaría participar?", [
        "Crear una solución tecnológica|ingenieria_sistemas",
        "Colaborar en un centro de salud|enfermeria",
        "Organizar una actividad artística|artes_plasticas",
        "Orientar a una comunidad|trabajo_social"
    ]),
    crearPregunta("¿Qué tipo de información disfrutas analizar?", [
        "Datos y procesos informáticos|ingenieria_sistemas",
        "Información sobre salud|medicina",
        "Mensajes, imágenes y publicidad|comunicacion_social",
        "Registros contables|contaduria"
    ]),
    crearPregunta("¿Qué te gustaría comunicar?", [
        "Instrucciones para usar una aplicación|ingenieria_sistemas",
        "Consejos para cuidar la salud|enfermeria",
        "Noticias de interés público|comunicacion_social",
        "Ideas mediante dibujos y pinturas|artes_plasticas"
    ]),
    crearPregunta("¿Qué ambiente laboral preferirías?", [
        "Un equipo de desarrollo tecnológico|ingenieria_sistemas",
        "Un centro de atención médica|medicina",
        "Un estudio creativo|diseno_grafico",
        "Una organización de apoyo comunitario|trabajo_social"
    ]),
    crearPregunta("¿Qué te gustaría planificar?", [
        "El funcionamiento de una aplicación|ingenieria_sistemas",
        "La atención de pacientes|enfermeria",
        "La distribución de un edificio|arquitectura",
        "Las actividades de una empresa|administracion"
    ]),
    crearPregunta("¿Qué aspecto de la sociedad te interesa más?", [
        "El impacto de la tecnología|ingenieria_sistemas",
        "La salud de la población|medicina",
        "La justicia y los derechos|derecho",
        "Las necesidades de las comunidades|trabajo_social"
    ]),
    crearPregunta("¿Qué tarea te gustaría realizar en una empresa?", [
        "Desarrollar herramientas digitales|ingenieria_sistemas",
        "Crear material publicitario|diseno_grafico",
        "Llevar registros financieros|contaduria",
        "Coordinar equipos de trabajo|administracion"
    ]),
    crearPregunta("¿Qué te gustaría investigar?", [
        "Nuevas aplicaciones tecnológicas|ingenieria_sistemas",
        "La prevención de enfermedades|medicina",
        "La conducta de las personas|psicologia",
        "La historia del arte|artes_plasticas"
    ]),
    crearPregunta("¿Cómo te gustaría expresar tus ideas?", [
        "Creando soluciones mediante programación|ingenieria_sistemas",
        "Conversando y orientando a otras personas|psicologia",
        "Realizando ilustraciones y diseños|diseno_grafico",
        "Escribiendo y difundiendo información|comunicacion_social"
    ]),
    crearPregunta("¿Qué objetivo te gustaría alcanzar?", [
        "Desarrollar tecnología útil|ingenieria_sistemas",
        "Contribuir al cuidado de la salud|medicina",
        "Crear espacios bien diseñados|arquitectura",
        "Promover el respeto a los derechos|derecho"
    ]),
    crearPregunta("¿Qué tipo de curso elegirías?", [
        "Programación y desarrollo web|ingenieria_sistemas",
        "Primeros auxilios y salud|enfermeria",
        "Fotografía y diseño visual|diseno_grafico",
        "Finanzas y contabilidad|contaduria"
    ]),
    crearPregunta("¿Qué harías para resolver una necesidad?", [
        "Crear una herramienta digital|ingenieria_sistemas",
        "Brindar cuidados a quien los necesita|enfermeria",
        "Diseñar un espacio práctico|arquitectura",
        "Organizar apoyo comunitario|trabajo_social"
    ]),
    crearPregunta("¿Qué tipo de conocimiento te gustaría aplicar?", [
        "Lógica y tecnología|ingenieria_sistemas",
        "Biología y salud|medicina",
        "Creatividad visual|diseno_grafico",
        "Leyes y normas|derecho"
    ]),
    crearPregunta("¿Qué actividad realizarías en una institución?", [
        "Administrar sistemas informáticos|ingenieria_sistemas",
        "Apoyar la atención de pacientes|enfermeria",
        "Comunicar información al público|comunicacion_social",
        "Gestionar registros financieros|contaduria"
    ]),
    crearPregunta("¿Qué te gustaría mejorar de tu entorno?", [
        "El acceso a herramientas tecnológicas|ingenieria_sistemas",
        "La atención de salud|medicina",
        "Los espacios donde vivimos|arquitectura",
        "La convivencia y el apoyo social|trabajo_social"
    ]),
    crearPregunta("¿Qué reto creativo te atrae?", [
        "Diseñar una interfaz digital|ingenieria_sistemas",
        "Crear una campaña de salud|medicina",
        "Crear una ilustración original|artes_plasticas",
        "Preparar una campaña informativa|comunicacion_social"
    ]),
    crearPregunta("¿Qué te gustaría aprender a gestionar?", [
        "Bases de datos y sistemas digitales|ingenieria_sistemas",
        "Procesos de atención sanitaria|enfermeria",
        "Presupuestos y registros financieros|contaduria",
        "Proyectos y equipos de trabajo|administracion"
    ]),
    crearPregunta("¿Qué situación te gustaría comprender?", [
        "Cómo resolver fallos tecnológicos|ingenieria_sistemas",
        "Cómo prevenir enfermedades|medicina",
        "Por qué las personas actúan de cierta manera|psicologia",
        "Cómo se aplican las leyes|derecho"
    ]),
    crearPregunta("¿Qué aporte te gustaría hacer mediante tu profesión?", [
        "Facilitar tareas con tecnología|ingenieria_sistemas",
        "Mejorar la salud de las personas|medicina",
        "Crear diseños que transmitan mensajes|diseno_grafico",
        "Apoyar a personas en situaciones difíciles|trabajo_social"
    ]),
    crearPregunta("¿Qué te gustaría desarrollar durante tus estudios?", [
        "Aplicaciones y sistemas informáticos|ingenieria_sistemas",
        "Conocimientos de salud y cuidado|enfermeria",
        "Técnicas artísticas y visuales|artes_plasticas",
        "Habilidades de liderazgo|administracion"
    ]),
    crearPregunta("¿Qué proyecto final elegirías?", [
        "Una aplicación que resuelva un problema|ingenieria_sistemas",
        "Una investigación sobre salud|medicina",
        "Un diseño arquitectónico|arquitectura",
        "Una propuesta de apoyo social|trabajo_social"
    ]),
    crearPregunta("¿Qué te haría sentir que tu trabajo es útil?", [
        "Crear soluciones digitales|ingenieria_sistemas",
        "Cuidar y orientar a pacientes|enfermeria",
        "Diseñar materiales de comunicación|diseno_grafico",
        "Orientar a personas sobre sus derechos|derecho"
    ]),
    crearPregunta("¿Qué área te gustaría explorar antes de elegir carrera?", [
        "Tecnología e informática|ingenieria_sistemas",
        "Ciencias de la salud|medicina",
        "Arte, diseño y arquitectura|arquitectura",
        "Ciencias sociales y humanas|psicologia"
    ])
];

// ========================================
// INFORMACIÓN DE LAS CARRERAS
// ========================================

const carreras = {
    ingenieria_sistemas: {
        nombre: "Ingeniería de Sistemas",
        descripcion: "Se relaciona con la programación, el desarrollo de software, las bases de datos y la solución de problemas tecnológicos.",
        motivo: "Tus respuestas muestran interés por la tecnología, la lógica y la resolución de problemas.",
        relacionadas: ["Ingeniería de Software", "Ingeniería Informática", "Ciencias de la Computación"]
    },
    medicina: {
        nombre: "Medicina",
        descripcion: "Estudia la salud humana, la prevención de enfermedades, el diagnóstico y el tratamiento de pacientes.",
        motivo: "Tus respuestas reflejan afinidad con las ciencias de la salud y el bienestar de las personas.",
        relacionadas: ["Enfermería", "Odontología", "Bioquímica"]
    },
    diseno_grafico: {
        nombre: "Diseño Gráfico",
        descripcion: "Combina creatividad y comunicación visual para transmitir ideas mediante imágenes, composiciones y diseños.",
        motivo: "Tus respuestas reflejan interés por la creatividad y la expresión visual.",
        relacionadas: ["Comunicación Social", "Artes Plásticas", "Diseño Digital"]
    },
    administracion: {
        nombre: "Administración de Empresas",
        descripcion: "Se centra en la planificación, organización y gestión de recursos, proyectos y empresas.",
        motivo: "Tus respuestas reflejan interés por organizar actividades, coordinar equipos y tomar decisiones.",
        relacionadas: ["Ingeniería Comercial", "Marketing", "Contaduría Pública"]
    },
    enfermeria: {
        nombre: "Enfermería",
        descripcion: "Se orienta al cuidado de las personas, la prevención y el acompañamiento durante la atención sanitaria.",
        motivo: "Tus respuestas muestran interés por el cuidado y el bienestar de otras personas.",
        relacionadas: ["Medicina", "Fisioterapia", "Nutrición"]
    },
    derecho: {
        nombre: "Derecho",
        descripcion: "Estudia las leyes, la justicia, los derechos y las normas que organizan la sociedad.",
        motivo: "Tus respuestas muestran interés por la justicia, el análisis y la defensa de los derechos.",
        relacionadas: ["Ciencias Políticas", "Trabajo Social", "Relaciones Internacionales"]
    },
    artes_plasticas: {
        nombre: "Artes Plásticas",
        descripcion: "Permite expresar ideas mediante dibujo, pintura, escultura y otras formas de creación artística.",
        motivo: "Tus respuestas reflejan afinidad con la expresión artística y la creatividad.",
        relacionadas: ["Diseño Gráfico", "Arquitectura", "Diseño Digital"]
    },
    comunicacion_social: {
        nombre: "Comunicación Social",
        descripcion: "Estudia la producción y difusión de información mediante medios de comunicación y plataformas digitales.",
        motivo: "Tus respuestas muestran interés por comunicar ideas, informar y crear contenidos.",
        relacionadas: ["Periodismo", "Publicidad", "Marketing"]
    },
    ingenieria_electronica: {
        nombre: "Ingeniería Electrónica",
        descripcion: "Estudia circuitos, dispositivos electrónicos, automatización y sistemas tecnológicos.",
        motivo: "Tus respuestas reflejan interés por la tecnología y el funcionamiento de dispositivos.",
        relacionadas: ["Ingeniería Eléctrica", "Ingeniería Mecatrónica", "Ingeniería de Sistemas"]
    },
    arquitectura: {
        nombre: "Arquitectura",
        descripcion: "Combina diseño, creatividad y conocimientos técnicos para proyectar espacios y edificaciones.",
        motivo: "Tus respuestas muestran interés por diseñar y planificar espacios funcionales.",
        relacionadas: ["Ingeniería Civil", "Diseño de Interiores", "Diseño Gráfico"]
    },
    contaduria: {
        nombre: "Contaduría Pública",
        descripcion: "Se relaciona con los registros financieros, presupuestos, costos y análisis contable.",
        motivo: "Tus respuestas muestran interés por la organización y el manejo de información numérica.",
        relacionadas: ["Administración de Empresas", "Economía", "Ingeniería Financiera"]
    },
    psicologia: {
        nombre: "Psicología",
        descripcion: "Estudia el comportamiento humano, las emociones y los procesos mentales.",
        motivo: "Tus respuestas reflejan interés por comprender a las personas y su comportamiento.",
        relacionadas: ["Trabajo Social", "Ciencias de la Educación", "Sociología"]
    },
    trabajo_social: {
        nombre: "Trabajo Social",
        descripcion: "Busca contribuir al bienestar social y apoyar a personas, familias y comunidades.",
        motivo: "Tus respuestas reflejan interés por la cooperación y el apoyo a otras personas.",
        relacionadas: ["Psicología", "Derecho", "Sociología"]
    }
};

// ========================================
// UNIVERSIDADES
// Los enlaces permiten consultar sus fichas.
// Verifica en cada ficha la oferta de la carrera.
// ========================================

const universidades = [
    ["UPEA", "carreras/upea.html"],
    ["UNIFRANZ", "carreras/unifranz.html"],
    ["UNITEPC", "carreras/unitepc.html"],
    ["Universidad Unión Bolivariana", "carreras/uub.html"],
    ["Universidad Católica Boliviana", "carreras/catolica.html"],
    ["Universidad La Salle", "carreras/lasalle.html"],
    ["USFA", "carreras/usfa.html"],
    
];

// ========================================
// FUNCIONAMIENTO DEL TEST
// ========================================

let indiceActual = 0;
const respuestas = new Array(preguntas.length).fill(null);

function actualizarProgreso() {
    const actual = indiceActual + 1;
    const porcentaje = Math.round((actual / preguntas.length) * 100);

    contadorPreguntas.textContent =
        `Pregunta ${actual} de ${preguntas.length}`;

    porcentajeProgreso.textContent = `${porcentaje}%`;
    barraProgreso.style.width = `${porcentaje}%`;
}

function mostrarPregunta() {
    const pregunta = preguntas[indiceActual];

    numeroPregunta.textContent = `PREGUNTA ${indiceActual + 1}`;
    textoPregunta.textContent = pregunta.texto;
    opcionesPregunta.innerHTML = "";

    pregunta.opciones.forEach(function(opcion) {
        const etiqueta = document.createElement("label");
        etiqueta.className = "opcion-respuesta";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "respuesta";
        radio.value = opcion.valor;
        radio.checked = respuestas[indiceActual] === opcion.valor;

        radio.addEventListener("change", function() {
            respuestas[indiceActual] = radio.value;
            botonSiguiente.disabled = false;
        });

        const texto = document.createElement("span");
        texto.textContent = opcion.texto;

        etiqueta.appendChild(radio);
        etiqueta.appendChild(texto);
        opcionesPregunta.appendChild(etiqueta);
    });

    botonAnterior.disabled = indiceActual === 0;
    botonSiguiente.disabled = !respuestas[indiceActual];

    botonSiguiente.textContent =
        indiceActual === preguntas.length - 1
            ? "Ver resultados"
            : "Siguiente";

    actualizarProgreso();
}

function mostrarResultado() {
    const puntos = {};

    respuestas.forEach(function(respuesta) {
        if (respuesta) {
            puntos[respuesta] = (puntos[respuesta] || 0) + 1;
        }
    });

    const categorias = Object.keys(puntos).sort(function(a, b) {
        return puntos[b] - puntos[a];
    });

    if (categorias.length === 0) {
        alert("Responde las preguntas antes de ver tu resultado.");
        return;
    }

    const carrera = carreras[categorias[0]];

    if (!carrera) {
        alert("No se encontró la información de la carrera recomendada.");
        return;
    }

    tituloCarrera.textContent = carrera.nombre;
    descripcionCarrera.textContent = carrera.descripcion;
    motivoCarrera.textContent = carrera.motivo;

    carrerasRelacionadas.innerHTML = "";

    carrera.relacionadas.forEach(function(nombre) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-relacionada";
        tarjeta.textContent = nombre;
        carrerasRelacionadas.appendChild(tarjeta);
    });

    universidadesResultado.innerHTML = "";

    universidades.forEach(function(universidad) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-universidad-resultado";

        const nombre = document.createElement("h4");
        nombre.textContent = universidad[0];

        const enlace = document.createElement("a");
        enlace.href = universidad[1];
        enlace.textContent = "Consultar información";

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(enlace);
        universidadesResultado.appendChild(tarjeta);
    });

    zonaPreguntas.style.display = "none";
    resultado.hidden = false;
    resultado.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

botonAnterior.addEventListener("click", function() {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
});

botonSiguiente.addEventListener("click", function() {
    if (!respuestas[indiceActual]) {
        alert("Selecciona una respuesta para continuar.");
        return;
    }

    if (indiceActual < preguntas.length - 1) {
        indiceActual++;
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});

botonRepetir.addEventListener("click", function() {
    respuestas.fill(null);
    indiceActual = 0;

    resultado.hidden = true;
    resultado.style.display = "none";
    zonaPreguntas.style.display = "block";

    mostrarPregunta();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

mostrarPregunta();
