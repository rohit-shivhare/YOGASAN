const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

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

// section-1
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    origin: "right",
});

// section-2
ScrollReveal().reveal(".classes__image", {
    duration: 1000,
    interval: 500,
});

// section-3
ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOption,
    interval: 500,
});

// section-5
ScrollReveal().reveal(".stories__card", {
    ...scrollRevealOption,
    interval: 500,
});

// section-6
ScrollReveal().reveal(".posts__card", {
    ...scrollRevealOption,
    interval: 500,
});

// section-7
ScrollReveal().reveal(".photos__card", {
    duration: 1000,
    interval: 500,
});

// membership container
ScrollReveal().reveal(".membership__card", {
    ...scrollRevealOption,
    interval: 500,
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

function Activate() {
  alert("Activate Successfully!!");
}

// Function to handle button click
function handleButtonClick() {
  const buttonClicked = localStorage.getItem("buttonClicked");
  if (buttonClicked === "true") {
      // If already clicked, show an alert with the stored date
      const clickedDate = localStorage.getItem("clickedDate");
      alert(`You have already clicked the button on ${clickedDate}`);
      return;
  }
  // Get the current date
  const currentDate = new Date().toDateString();
  // Store the date and mark the button as clicked
  localStorage.setItem("buttonClicked", "true");
  localStorage.setItem("clickedDate", currentDate);
  // Display the date
  document.getElementById("dateDisplay").innerText = `You clicked on: ${currentDate}`;
  // Disable the button
  document.getElementById("showDateBtn").disabled = true;
}
// Function to initialize the state on page load
function initializeState() {
  const buttonClicked = localStorage.getItem("buttonClicked");
  if (buttonClicked === "true") {
      // If already clicked, disable the button and display the stored date
      document.getElementById("showDateBtn").disabled = true;
      const clickedDate = localStorage.getItem("clickedDate");
      document.getElementById("dateDisplay").innerText = `${clickedDate}`;
  }
}
// Initialize the state on page load
window.onload = initializeState;
// Add click event listener to the button
document.getElementById("showDateBtn").addEventListener("click", handleButtonClick);