// Define la fecha objetivo para el conteo de días
const fechaObjetivo = new Date('2024-07-20');

function actualizarConteo() {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const formatoHoras = horas.toString().padStart(2, '0');
    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0');

    document.getElementById('countdown').innerHTML = `Faltan: <br> ${dias} días, ${formatoHoras} : ${formatoMinutos} : ${formatoSegundos}`;
}

// Actualiza el conteo cada segundo
setInterval(actualizarConteo, 1000);

// Inicializa el conteo al cargar la página
actualizarConteo();

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "shape": {
            "type": "image",
            "image": {
                "src": "./assets/petalo.png", // Ruta de la imagen del pétalo
                "width": 100,
                "height": 100
            }
        },
        "size": {
            "value": 13,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff", // Color de las líneas, si lo deseas diferente
            "opacity": 0, // Opacidad de las líneas, si lo deseas diferente
            "width": 0 // Ancho de las líneas, configurado en 0 para hacerlas transparentes
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            }
        }
    }
});
