        document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
  
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });



// Preguntas Frecuentes
const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });