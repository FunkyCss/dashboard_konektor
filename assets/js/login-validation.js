document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const eField = form.querySelector(".email");
  const eInput = eField.querySelector("input");
  const pField = form.querySelector(".password");
  const pInput = pField.querySelector("input");

  form.onsubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    (eInput.value === "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value === "") ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(() => { // Remove shake class after 500ms
      eField.classList.remove("shake");
      pField.classList.remove("shake");
    }, 500);
  };

  eInput.onblur = () => { checkEmail(); }; // Call checkEmail function on email input blur
  pInput.onblur = () => { checkPass(); }; // Call checkPassword function on password input blur

  function checkEmail() { // Email validation function
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Pattern to validate email
    if (!eInput.value.match(pattern)) { // If pattern not matched, add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      const errorTxt = eField.querySelector(".error-txt");
      // Show appropriate error message based on whether email is blank or invalid
      (eInput.value !== "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    } else { // If pattern matched, remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass() { // Password validation function
    if (pInput.value === "") { // If password is blank, add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else { // If password is not blank, remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
});
