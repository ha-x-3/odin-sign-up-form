//Compare 2 passwords for equality
const check = function() {
  if (document.getElementById("password").value === document.getElementById("confirmPassword").value) {
    document.getElementById("message").style.color = 'white';
    document.getElementById("message").innerHTML = 'Passwords match';
  } else {
    document.getElementById("message").style.color = 'red';
    document.getElementById("message").innerHTML = 'Passwords do not match *'
  }
}

//Add .error class for "error" inputs
//Add First and Last Name Validation
//Add Email Validation
//Add Phone Number Validation
//Add Password requirements
//Add display of password requirements
//Add .good class for "good" inputs