
document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");
  cancelBtn = document.querySelector(".cancel-btn");

  showBtn.addEventListener("click", () => section.classList.add("active"));

  overlay.addEventListener("click", () =>
  section.classList.remove("active")
  );

  closeBtn.addEventListener("click", () =>
  section.classList.remove("active")
  );

  cancelBtn.addEventListener("click", () =>
  section.classList.remove("active")
  );

});