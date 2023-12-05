document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino
      const target = document.getElementById(targetId); // Encuentra el elemento de destino
  
      if (target) {
        const offset = target.getBoundingClientRect().top; // Calcula la posición de desplazamiento
        const duration = 1000; // Duración de la animación en milisegundos
  
        const startTime = performance.now();
        const animateScroll = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          window.scrollTo(0, easeInOutCubic(elapsedTime, 0, offset, duration));
          if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        };
  
        const easeInOutCubic = (t, b, c, d) => {
          // Función de aceleración para la animación
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        };
  
        requestAnimationFrame(animateScroll);
      }
    });
  });
  