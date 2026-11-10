// runs when any of the three forms are submitted
document.querySelectorAll(".needs-validation").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops the page from reloading
    form.classList.add("was-validated"); // tells bootstrap to show the error messages
    // checkValidity() is only true when every box is filled in correctly
    form.querySelector(".form-result").textContent = form.checkValidity() ? "Next time..." : "";
  });
});