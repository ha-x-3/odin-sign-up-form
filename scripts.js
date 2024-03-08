const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
// const firstNameInput = document.querySelector("#first-name");
const lastName = document.getElementById("last-name");
// const lastNameInput = document.querySelector("#last-name");
const email = document.getElementById("email");
// const emailInput = docuement.querySelector("#email");
const phone = document.getElementById("phone-number");
// const phoneInput = document.querySelector("#phone-number");
const password = document.getElementById("password");
// const passwordInput = documet.querySelector("#password");
const confirmPassword = document.getElementById("confirmPassword");
// const confirmPasswordInput = documet.querySelector("#confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  nameCheck();
  event.preventDefault();
});

const nameCheck = function() {
  if (!firstName) {
    
    return false;
  }
}

//Compare 2 passwords for equality
const check = function() {
  if (password.value === confirmPassword.value) {
    message.style.color = 'white';
    message.innerHTML = 'Passwords match';
    return true;
  } else {
    message.style.color = 'red';
    message.innerHTML = '* Passwords do not match'
    return false;
  }
}

//Add First and Last Name Validation
//Add Email Validation
//Add Phone Number Validation
//Add Password requirements
//Add display of password requirements

//Add .error class for "error" inputs
//Add .good class for "good" inputs
//If validate() === true => add .good
//If validate() === false => add .error
// function validate() {
//    check
//}