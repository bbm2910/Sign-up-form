const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const mail = document.querySelector("#mail");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#c-password");
const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const mailError = document.querySelector(".mail-error");

const btn = document.querySelector(".btn");


firstName.addEventListener("focus", function () {
    document.getElementsByName("firstname")[0].placeholder = "...";
});
firstName.addEventListener("focusout", function () {
    if (firstName.value.length < 2) {
        firstNameError.textContent = "Name too short";
        firstNameError.style.color = "#CD1818";
    }
    else if (firstName.value.length > 2) {
        firstNameError.textContent = "First name";
        firstNameError.style.color = "#A8E890";
    }
});


lastName.addEventListener("focus", function () {
    // document.getElementsByName("lastname")[0].value = "";
    document.getElementsByName("lastname")[0].placeholder = "...";
});
lastName.addEventListener("focusout", function () {
    if (lastName.value.length < 2) {
        lastNameError.textContent = "Name too short";
        lastNameError.style.color = "#CD1818";
    }
    else if (lastName.value.length > 2) {
        lastNameError.textContent = "Last name";
        lastNameError.style.color = "#A8E890";
    }
});

mail.addEventListener('focus', function () {
    document.getElementsByName("mail")[0].value = "";
    document.getElementsByName("mail")[0].placeholder = "...";
});
mail.addEventListener("focusout", function () {
    if (mail.value.includes("@")) {
        mailError.style.color = "#A8E890";
        mailError.textContent = "Email adress";
    }
    else {
        mailError.style.color = "#CD1818";
        mailError.textContent = "Invalid email";
    }
});


phoneNumber.addEventListener('focus', function () {
    document.getElementsByName("phone-number")[0].value = "";
    document.getElementsByName("phone-number")[0].placeholder = "...";
});



btn.addEventListener("click", function () {
    const passError = document.querySelectorAll(".pass-error")
    for (let i = 0; i < passError.length; i++) {
        if (password.value != confirmPassword.value) {
            passError[i].textContent = "Passwords do not match";
            passError[i].style.color = "#CD1818"
        }
        else if (password.value == confirmPassword.value) {
            passError[i].textContent = "Passwords do match";
            passError[i].style.color = "#A8E890"
        }
    }

})

