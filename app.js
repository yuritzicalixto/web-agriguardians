// const toggle = document.getElementById('menu-toggle');
//     const navLinks = document.getElementById('nav-links');
  
//     toggle.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//     });

    
    
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
  
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });



// Preguntas Frecuentes
function toggleFAQ(element) {
    element.classList.toggle('active');
  }