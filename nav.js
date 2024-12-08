document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const closeBtn = document.getElementById('close-btn');


  document.addEventListener('DOMContentLoaded', () => {
      const dropdownToggles = document.querySelectorAll('#dropdown-toggle');
    
      dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const dropdownMenu = toggle.nextElementSibling;
    
          // Close other dropdowns if any
          document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdownMenu) {
              menu.style.display = 'none';
            }
          });
    
          // Toggle current dropdown
          if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
          } else {
            dropdownMenu.style.display = 'block';
          }
        });
      });
    
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
          });
        }
      });
  });
    

  // Open sidebar
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    hamburger.style.display = "none"; 
  });

  // Close sidebar
  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.style.display = "block";
  });

  // Optional: Close sidebar when clicking a link
  navLinks.querySelectorAll('.link a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});

// ScrollToTop Button
// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll effect
    });
};
