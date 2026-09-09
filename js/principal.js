document.addEventListener('DOMContentLoaded', function () {
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
});
