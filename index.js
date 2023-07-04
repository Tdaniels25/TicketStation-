/*Javascript for landing to redirect user to the registration form */
let button= document.getElementsByClassName('btn-outline')[0];

function redirectToRegistration(){
window.location.href= 'registration-form.html';
}
button.addEventListener('click', redirectToRegistration);

/*JS for registration form, performing user authentication */
let firstNameInput = document.getElementsByName("name")[0];
  let lastNameInput = document.getElementsByName("last_name")[0];
  let emailInput = document.getElementsByName("email")[0];
  let passwordInput = document.getElementsByName("pass")[0];
  let confirmPasswordInput = document.getElementsByName("re_pass")[0];
  let termsCheckbox = document.querySelector('input[type="checkbox"]');

  // Validation and error handling
let isValid = true;

  // First Name validation
  if (firstNameInput.value.trim() === "") {
      displayError(firstNameInput, "First Name is required");
      isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(firstNameInput.value.trim())) {
      displayError(firstNameInput, "First Name should contain only alphabet characters");
      isValid = false;
  }

  // Last Name validation
  if (lastNameInput.value.trim() === "") {
      displayError(lastNameInput, "Last Name is required");
      isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(lastNameInput.value.trim())) {
      displayError(lastNameInput, "Last Name should contain only alphabet characters");
      isValid = false;
  }

  // Email validation
  if (emailInput.value.trim() === "") {
      displayError(emailInput, "Email is required");
      isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
      displayError(emailInput, "Email format is invalid");
      isValid = false;
  }

  // Password validation
  if (passwordInput.value === "") {
      displayError(passwordInput, "Password is required");
      isValid = false;
  } else if (!isValidPassword(passwordInput.value)) {
      displayError(
          passwordInput,
          "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      isValid = false;
  }

  // Confirm Password validation
  if (confirmPasswordInput.value === "") {
      displayError(confirmPasswordInput, "Confirm Password is required");
      isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
      displayError(confirmPasswordInput, "Passwords do not match");
      isValid = false;
  }

  // Terms checkbox validation
  if (!termsCheckbox.checked) {
      displayError(termsCheckbox, "You must accept the Terms of Use and Privacy Policy");
      isValid = false;
  }

  // If all inputs are valid, redirect to another page
  if (isValid) {
      // Clearing the form fields
      firstNameInput.value = "";
      lastNameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
      confirmPasswordInput.value = "";

      // Users are redirected to another page when all fields have the correct input
      window.location.href = "success.html";
  }
;

function displayError(inputField, errorMessage) {
  let errorSpan = inputField.parentElement.querySelector(".error-message");
  if (errorSpan) {
      errorSpan.textContent = errorMessage;
  } else {
      errorSpan = document.createElement("span");
      errorSpan.className = "error-message";
      errorSpan.textContent = errorMessage;
      inputField.parentElement.appendChild(errorSpan);
  }
}

function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Password should at least be 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
  return passwordRegex.test(password);
}





