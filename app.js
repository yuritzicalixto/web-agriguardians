  //       document.addEventListener('DOMContentLoaded', function () {
  //   const toggle = document.getElementById('menu-toggle');
  //   const navLinks = document.getElementById('nav-links');
  
  //   toggle.addEventListener('click', () => {
  //     navLinks.classList.toggle('active');
  //   });
  // });


  // //MENU
  //   const menuToggle = document.getElementById('menu-toggle');
  // const closeMenu = document.getElementById('closeMenu');
  // const navLinks = document.getElementById('nav-links');

  // // Mostrar menú y cambiar iconos
  // menuToggle.addEventListener('click', () => {
  //   navLinks.classList.add('active');
  //   menuToggle.style.display = 'none';
  //   closeMenu.style.display = 'block';
  // });

  // // Cerrar menú y restaurar icono
  // closeMenu.addEventListener('click', () => {
  //   navLinks.classList.remove('active');
  //   closeMenu.style.display = 'none';
  //   menuToggle.style.display = 'block';
  // });

  // // Opcional: cerrar el menú al hacer clic en un enlace
  // document.querySelectorAll('.container-navegation a').forEach(link => {
  //   link.addEventListener('click', () => {
  //     navLinks.classList.remove('active');
  //     closeMenu.style.display = 'none';
  //     menuToggle.style.display = 'block';
  //   });
  // });

  //MENU



  const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
  menuToggle.classList.add('hidden');
  closeMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
  closeMenu.classList.add('hidden');
  menuToggle.classList.remove('hidden');
});

document.querySelectorAll('.container-navegation a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeMenu.classList.add('hidden');
    menuToggle.classList.remove('hidden');
  });
});


// Preguntas Frecuentes
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('open');
  });
});



