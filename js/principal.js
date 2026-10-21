document.addEventListener('DOMContentLoaded', function () {

  /* ---------- MenÃº mÃ³vil ---------- */
  var boton = document.querySelector('.boton-menu');
  var enlaces = document.querySelector('.nav-enlaces');
  if (boton && enlaces) {
    boton.addEventListener('click', function () {
      var abierto = enlaces.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    enlaces.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        enlaces.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Animaciones al desplazarse ---------- */
  var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (sinMovimiento || !('IntersectionObserver' in window)) return;

  var selectores = [
    '.seccion-cabecera',
    '.tarjeta-acceso',
    '.tarjeta-jornada',
    '.tarjeta-trimestre',
    '.tarjeta-vacaciones',
    '.tabla-supletorios',
    '.tarjeta-mv',
    '.valor',
    '.ficha-contacto',
    '.mapa-envoltorio',
    '.galeria-item'
  ];
  var elementos = document.querySelectorAll(selectores.join(','));

  // Retraso escalonado entre elementos hermanos (efecto cascada)
  var contadores = new Map();
  elementos.forEach(function (el) {
    var n = contadores.get(el.parentElement) || 0;
    el.style.setProperty('--retraso', (n * 0.12) + 's');
    contadores.set(el.parentElement, n + 1);
    el.classList.add('reveal');
  });

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elementos.forEach(function (el) { observador.observe(el); });
});
