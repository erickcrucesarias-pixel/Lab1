let contador = 1; 

    function rotarBanner() {
        let titulo = document.getElementById("titulo-popular");
        let imagen = document.getElementById("img-popular");
        // ESTA LÍNEA TE FALTA (Importante):
        let descripcion = document.getElementById("desc-popular"); 
        let p0 = document.getElementById("p0");
        let p1 = document.getElementById("p1");

        if (contador == 0) {
            titulo.innerHTML = "Iphone 17 PRO MAX";
            // AÑADE ESTO:
            descripcion.innerHTML = "Eleva tu experiencia móvil a la máxima potencia con el nuevo iPhone 17 Pro Max. Diseñado para creadores, profesionales y quienes no aceptan menos que lo mejor, este dispositivo combina el rendimiento más salvaje con un diseño revolucionario. ";
            imagen.src = "iphonepopular.png";
            
            p0.style.color = "cyan";
            p1.style.color = "gray";
            contador = 1;
        } 
        else {
            titulo.innerHTML = "PS5";
            // AÑADE ESTO:
            descripcion.innerHTML = "¿Buscas la mejor experiencia de gaming sin gastar de más? La PlayStation 5 sigue siendo la reina de los hogares, ofreciendo una velocidad increíble y un catálogo de juegos exclusivos que te dejarán sin aliento. Es la consola ideal para disfrutar de la máxima calidad sin complicaciones.";
            imagen.src = "ps5.jpg";
            
            p0.style.color = "gray";
            p1.style.color = "cyan";
            contador = 0;
        }
    }

    setInterval(rotarBanner, 4000);

    /* Ocultar / mostrar navbar en scroll solo en páginas con navbar fijo (index) */
    (function(){
        const navbars = Array.from(document.querySelectorAll('.custom-navbar, .navclas'));
        const body = document.body;
        if (!navbars.length || !body.classList.contains('has-fixed-navbar')) return;

        let lastScrollY = window.scrollY || 0;
        const threshold = 50; // px antes de activar
        let ticking = false;

        window.addEventListener('scroll', function(){
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const current = window.scrollY;
                    if (current > lastScrollY && current > threshold) {
                        // scrolldown -> ocultar todos los navbars encontrados
                        navbars.forEach(nb => nb.classList.add('nav-hidden'));
                        body.classList.add('navbar-hidden');
                    } else if (current < lastScrollY) {
                        // scrollup -> mostrar
                        navbars.forEach(nb => nb.classList.remove('nav-hidden'));
                        body.classList.remove('navbar-hidden');
                    }
                    lastScrollY = Math.max(current, 0);
                    ticking = false;
                });
                ticking = true;
            }
        });
    })();