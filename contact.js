const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function sendEmail() {
    sendEmail.send({
        Host: "Smtp.gmail.com",
        Username: "raushanraunak2002@gmail.com",
        Password: "Radha1208@123",
        To: "raushanraunak2002@gmail.com",
        Form: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry"
    }).then(
        message => alert = (message)
    );
}