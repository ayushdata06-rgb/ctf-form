const form = document.getElementById("detail-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    alert("Registration submitted successfully!");
    form.reset();
});