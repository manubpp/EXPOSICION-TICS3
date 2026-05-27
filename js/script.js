        // --- Variables en Español para la Técnica de Respiración ---
        const circulo = document.getElementById('circulo-animado');
        const textoEstado = document.getElementById('texto-estado');
        const btnIniciar = document.getElementById('btn-iniciar');
        const btnDetener = document.getElementById('btn-detener');
        
        let intervaloBucle;
        let estaRespirando = false;

        // Tiempos de la técnica 4-7-8 (en milisegundos)
        const tiempoInhalar = 4000;  // 4s
        const tiempoSostener = 7000; // 7s
        const tiempoExhalar = 8000;  // 8s
        const tiempoTotal = tiempoInhalar + tiempoSostener + tiempoExhalar; // 19s por ciclo

        // Función principal de la animación
        function animacionRespiracion() {
            // Fase 1: Inhalar
            textoEstado.innerText = 'Inhala...';
            circulo.className = 'circulo-respiracion inhala';

            // Fase 2: Sostener la respiración
            setTimeout(() => {
                textoEstado.innerText = 'Sostén...';
                circulo.className = 'circulo-respiracion sosten';

                // Fase 3: Exhalar
                setTimeout(() => {
                    textoEstado.innerText = 'Exhala...';
                    circulo.className = 'circulo-respiracion exhala';
                }, tiempoSostener);

            }, tiempoInhalar);
        }

        // Evento al presionar "Iniciar"
        btnIniciar.addEventListener('click', () => {
            if(estaRespirando) return;
            
            estaRespirando = true;
            btnIniciar.classList.add('d-none'); // Ocultar botón iniciar usando Bootstrap
            btnDetener.classList.remove('d-none'); // Mostrar botón detener
            
            animacionRespiracion(); // Ejecutar la primera vez de inmediato
            intervaloBucle = setInterval(animacionRespiracion, tiempoTotal); // Repetir en bucle
        });

        // Evento al presionar "Detener"
        btnDetener.addEventListener('click', () => {
            estaRespirando = false;
            clearInterval(intervaloBucle);
            
            // Reiniciar estado visual
            circulo.className = 'circulo-respiracion';
            textoEstado.innerText = 'Listo';
            
            btnDetener.classList.add('d-none');
            btnIniciar.classList.remove('d-none');
        });

        // Efecto de sombra sutil en la Navbar al hacer scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbarMenu');
            if (window.scrollY > 10) {
                navbar.classList.add('shadow');
            } else {
                navbar.classList.remove('shadow');
            }
        });