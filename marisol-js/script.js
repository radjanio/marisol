window.addEventListener("load", function() {
  const musica = document.getElementById("musica");
  musica.play().catch(error => {
      console.log("Reprodução automática bloqueada pelo navegador:", error);
  });
});

function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src =  "marisol-icons/on-menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src =  "marisol-icons/off-menu.png";  
    }
}

const toggleButton = document.getElementById('darkModeToggle');
  toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  });
  
const menuMobileToggle = document.querySelector('#menu-mobile-toggle');
const menuMobile = document.querySelector('menu-mobile');

menuMobileToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});