const container = document.querySelector('.container'); 
const registerBtn = document.querySelector('.register-btn'); 
const loginBtn = document.querySelector('.login-btn'); 
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let email = document.getElementById("email"); 
let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");

registerBtn.addEventListener('click', () => { 
  container.classList.add('active'); 
}); 

loginBtn.addEventListener('click', () => { 
    container.classList.remove('active'); 
});

confirmPassword.addEventListener('input', function() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity(""); 
    }
});

email.addEventListener('input', function() {
    let emailPattern = /[^@\s]+@[^@\s]+\.[^@\s]+/;

    if (!emailPattern.test(email.value)) {
        email.setCustomValidity("Please enter a valid email address. \nEx:- your@gmail.com");
    } else {
        email.setCustomValidity("");
    }
});

password.addEventListener('input', function() {
    let passwordPattern = /(?=.*[@#$&_]).{4,10}/;

    if (!passwordPattern.test(password.value)) {
        password.setCustomValidity("Password must be 4 to 10 characters long and include at least one these characters (@, #, _, $, &).");
    } else {
        password.setCustomValidity("");
    }
});

loginUsername.addEventListener('input', function() {
  let loginUsernamePattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*_).{4,14}/;

  if (loginUsername.value < 4 || loginUsername.value > 14) {
    loginUsername.setCustomValidity("Username must be 4 to 14 characters long.");
  }
  else if (!loginUsernamePattern.test(loginUsername.value)) {
    loginUsername.setCustomValidity("Invalid username. \n Must contain at least one uppercase letter 'A-Z', one lowercase letter 'a-z', one digit '0-9', and one underscore '_'.");
  } 
  else {
    loginUsername.setCustomValidity("");
  }  
});

loginPassword.addEventListener('input', function() {
  let loginPasswordPattern = /(?=.*[@#$&_]).{4,10}/;

  if (loginPassword.value < 4 || loginPassword.value > 10) {
    loginPassword.setCustomValidity("Password must be 4 to 10 characters long.")
  }
  else if (!loginPasswordPattern.test(loginPassword.value)) {
    loginPassword.setCustomValidity("Incorrect Password. \n Must include at least one these characters (@, #, _, $, &).");
  } 
  else {
    loginPassword.setCustomValidity("");
  }
});

