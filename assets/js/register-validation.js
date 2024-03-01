document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const eField = form.querySelector(".email");
  const eInput = eField.querySelector("input");
  const nField = form.querySelector(".name");
  const nInput = nField.querySelector("input");
  const pField = form.querySelector(".password");
  const pInput = pField.querySelector("input");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    (eInput.value === "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value === "") ? pField.classList.add("shake", "error") : checkPass();
    (nInput.value === "") ? nField.classList.add("shake", "error") : checkName();

    setTimeout(() => {
      eField.classList.remove("shake");
      pField.classList.remove("shake");
      nField.classList.remove("shake");
    }, 500);
  });

  eInput.addEventListener("blur", checkEmail);
  pInput.addEventListener("blur", checkPass);
  nInput.addEventListener("blur", checkName);

  function checkEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!eInput.value.match(pattern)) {
      eField.classList.add("error");
      eField.classList.remove("valid");
      const errorTxt = eField.querySelector(".error-txt");
      errorTxt.innerText = eInput.value ? "Enter a valid email address" : "Email can't be blank";
      errorTxt.setAttribute("id", "email-error");
      eInput.setAttribute("aria-invalid", "true");
      eInput.setAttribute("aria-describedby", "email-error");
    } else {
      eField.classList.remove("error");
      eField.classList.add("valid");
      eInput.removeAttribute("aria-invalid");
      eInput.removeAttribute("aria-describedby");
    }
  }

  function checkPass() {
    if (pInput.value === "") {
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else {
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  function checkName() {
    if (nInput.value === "") {
      nField.classList.add("error");
      nField.classList.remove("valid");
      const errorTxt = nField.querySelector(".error-txt");
      (nInput.value !== "") ? errorTxt.innerText = "Please enter a valid name" : errorTxt.innerText = "Name can't  be blank";
    } else {
      nField.classList.remove("error");
      nField.classList.add("valid");
    }
  }

  if (!eField.classList.contains("error") && !pField.classList.contains("error") && !nField.classList.contains("error")) {
    window.location.href = form.getAttribute("action");
  }
});

// Password Meter //

document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.querySelector(".pass-field input");
  const eyeIcon = document.querySelector(".pass-field i");
  const requirementList = document.querySelectorAll(".requirement-list li");

  const requirements = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[^A-Za-z0-9]/, index: 3 },
    { regex: /[A-Z]/, index: 4 },
  ];

  passwordInput.addEventListener("keyup", function(e) {
    requirements.forEach(item => {
      const isValid = item.regex.test(e.target.value);
      const requirementItem = requirementList[item.index];

      if (isValid) {
        requirementItem.classList.add("valid");
        requirementItem.firstElementChild.className = "fa-solid fa-check";
      } else {
        requirementItem.classList.remove("valid");
        requirementItem.firstElementChild.className = "fa-solid fa-circle";
      }
    });
  });

  eyeIcon.addEventListener("click", function() {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
  });
});
