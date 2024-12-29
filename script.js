document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();

          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50,
                  behavior: 'smooth'
              });
          }
      });
    });
});s