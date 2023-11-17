window.addEventListener("scroll",
  function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) { // Cambia 100 por la cantidad de desplazamiento
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

document.addEventListener('DOMContentLoaded',
  function () {
    // Menú hamburguesa
    const burgerIcon = document.querySelector('.burger-icon');
    const navbarUl = document.querySelector('.navbar nav ul');

    burgerIcon.addEventListener('click', () => {
      navbarUl.classList.toggle('show');
    });
  });
