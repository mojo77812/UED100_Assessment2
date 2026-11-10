// stops the return date being set earlier than the departure date
document.getElementById("depart").addEventListener("change", (e) => {
  document.getElementById("return").min = e.target.value;
});

// runs when any of the three forms are submitted
document.querySelectorAll(".needs-validation").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops the page from reloading
    form.classList.add("was-validated"); // tells bootstrap to show the error messages
    // checkValidity() is only true when every box is filled in correctly
    form.querySelector(".form-result").textContent = form.checkValidity() ? "Next time..." : "";
  });
});

// the passkey button shows the same message
document.getElementById("passkeyBtn").addEventListener("click", () => {
  document.querySelector("#login .form-result").textContent = "Next time...";
});