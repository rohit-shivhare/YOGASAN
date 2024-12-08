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

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const arrow = item.querySelector(".faq-arrow");

      question.addEventListener("click", () => {
          // Close all other answers and reset arrows
          faqItems.forEach((otherItem) => {
              const otherAnswer = otherItem.querySelector(".faq-answer");
              const otherArrow = otherItem.querySelector(".faq-arrow");
              if (otherItem !== item) {
                  otherAnswer.style.display = "none";
                  otherArrow.classList.remove("rotate");
              }
          });

          // Toggle the current answer and arrow
          const isVisible = answer.style.display === "block";
          answer.style.display = isVisible ? "none" : "block";
          arrow.classList.toggle("rotate", !isVisible);
      });
  });
});

// Selected rating value, default is 1
let selectedRating = 1;

// Get all rating stars
const stars = document.querySelectorAll('#rating button');

// Event listener for rating stars
stars.forEach((star, index) => {
    star.addEventListener('click', function () {
        // Set the selected rating value based on the clicked star
        selectedRating = this.getAttribute('data-value');

        // Reset all stars to inactive
        stars.forEach(s => s.classList.remove('active'));

        // Set stars up to the selected one as active
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }
    });
});

// Get references to feedback container and feedback list
const feedbackContainer = document.getElementById('feedbackContainer');
const feedbackList = document.getElementById('feedbackList');
const feedbackHeader = document.getElementById('feedbackHeader');

// Function to load feedbacks from localStorage
function loadFeedbacks() {
    // Get feedbacks from localStorage or initialize an empty array
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // If no feedbacks exist, hide the feedback container
    if (feedbacks.length === 0) {
        feedbackContainer.style.display = 'none';
        feedbackHeader.style.display = 'none';
    } else {
        // Otherwise, show the feedback container
        feedbackContainer.style.display = 'block';
        feedbackHeader.style.display = 'block';
        feedbackList.innerHTML = ''; // Clear current feedbacks in the UI

        // Loop through each feedback and display it
        feedbacks.forEach((feedback, index) => {
            const feedbackItem = document.createElement('div');
            feedbackItem.classList.add('feedback-item');
            feedbackItem.innerHTML = `
                <p>Name:&nbsp; <strong>${feedback.name}</strong><br>Email:&nbsp; ${feedback.email}</p>
                <p class="stars">${'★'.repeat(feedback.rating)}</p>
                <p>Feedback:&nbsp; ${feedback.feedback}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            feedbackList.appendChild(feedbackItem);
        });

        // Add delete functionality to each delete button
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Get the index of the feedback to delete
                const index = this.getAttribute('data-index');

                // Show confirmation message
                const confirmDelete = confirm("Are you sure you want to delete this feedback?");

                // If the user confirms, delete the feedback
                if (confirmDelete) {
                    feedbacks.splice(index, 1); // Remove feedback from the array
                    localStorage.setItem('feedbacks', JSON.stringify(feedbacks)); // Update localStorage
                    loadFeedbacks(); // Reload feedback list in the UI
                    alert("Feedback deleted successfully."); // Show success message
                }
            });
        });
    }
}

// Initial load of feedbacks from localStorage
loadFeedbacks();

// Add event listener for the feedback form submission
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedbackText = document.getElementById('feedback').value.trim();

    // Get feedbacks from localStorage or initialize an empty array
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Add new feedback to the array
    feedbacks.push({ name, email, rating: selectedRating, feedback: feedbackText });

    // Save updated feedbacks array back to localStorage
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    // Reload feedbacks to update the UI
    loadFeedbacks();

    // Reset the form
    this.reset();

    // Reset the selected rating to the default (1)
    selectedRating = 1;

    // Reset the stars' active states
    stars.forEach(s => s.classList.remove('active'));

    // Show a thank-you message
    alert(`Thank you, ${name}! Your feedback has been submitted.`);
});