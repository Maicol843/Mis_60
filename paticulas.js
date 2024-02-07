particlesJS("#particles-js", {
    "particles": {
        "number": {
            "value": 50,
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
            "value": 10,
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
