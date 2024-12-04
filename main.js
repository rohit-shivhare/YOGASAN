const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

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

// Profile bar
function toggleOffcanvas() {
    const offcanvas = document.getElementById('offcanvas');
    offcanvas.classList.toggle('open');
}

// Profile Form 
// Form and button references
const form = document.getElementById('profile-form');
const submitBtn = document.getElementById('submit-btn');
const formDetails = document.getElementById('form-details');
const editBtn = document.getElementById('edit-btn');
const formSection = document.getElementById('form-section');

// Field references
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const mobileField = document.getElementById('mobile');
const ageField = document.getElementById('age');
const heightField = document.getElementById('height');
const weightField = document.getElementById('weight');

const displayName = document.getElementById('display-name');
const displayEmail = document.getElementById('display-email');
const displayMobile = document.getElementById('display-mobile');
const displayAge = document.getElementById('display-age');
const displayHeight = document.getElementById('display-height');
const displayWeight = document.getElementById('display-weight');

// Load saved data from local storage
window.onload = function () {
    const savedProfile = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfile) {
        nameField.value = savedProfile.name || '';
        emailField.value = savedProfile.email || '';
        mobileField.value = savedProfile.mobile || '';
        ageField.value = savedProfile.age || '';
        heightField.value = savedProfile.height || '';
        weightField.value = savedProfile.weight || '';

        displayName.textContent = savedProfile.name || '';
        displayEmail.textContent = savedProfile.email || '';
        displayMobile.textContent = savedProfile.mobile || '';
        displayAge.textContent = savedProfile.age || '';
        displayHeight.textContent = savedProfile.height || '';
        displayWeight.textContent = savedProfile.weight || '';

        formDetails.style.display = 'block';
        submitBtn.style.display = 'none';
        formSection.style.display = 'none';
        form.querySelectorAll('input').forEach(input => input.disabled = true);
    }
};

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Save entered details to local storage
    const profileData = {
        name: nameField.value,
        email: emailField.value,
        mobile: mobileField.value,
        age: ageField.value,
        height: heightField.value,
        weight: weightField.value
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Display entered details
    displayName.textContent = nameField.value;
    displayEmail.textContent = emailField.value;
    displayMobile.textContent = mobileField.value;
    displayAge.textContent = ageField.value;
    displayHeight.textContent = heightField.value;
    displayWeight.textContent = weightField.value;

    // Hide form inputs and submit button, show form details and edit button
    formDetails.style.display = 'block';
    submitBtn.style.display = 'none';
    formSection.style.display = 'none';
    form.querySelectorAll('input').forEach(input => input.disabled = true);
});

// Handle edit button click
editBtn.addEventListener('click', function () {
    // Show form inputs and submit button, hide form details
    formDetails.style.display = 'none';
    submitBtn.style.display = 'block';
    formSection.style.display = 'block';
    form.querySelectorAll('input').forEach(input => input.disabled = false);
});
// Profile Form End

