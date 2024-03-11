document.getElementById("form").addEventListener("submit", function (event) {
    var name = document.getElementById("FullName").value;
    var email = document.getElementById("Email").value;
    var CIN = document.getElementById("CIN").value;
    var phone = document.getElementById("Phone_Number").value;
    var isValid = true;

    // Full name
    const name_error = document.getElementById("name_error");
    if (name.trim() === "") {
        name_error.innerHTML = "Please enter your full name.<br>";
        isValid = false;
    } else if (!validateMoroccanName(name)) {
        name_error.innerHTML = "Please enter a valid Moroccan name.<br>";
        isValid = false;
    } else {
        name_error.innerHTML = ""; // Clear the error message if the field is valid
    }

    // Email
    const email_error = document.getElementById("email_error");
    if (email.trim() === "") {
        email_error.innerHTML = "Please enter your email.<br>";
        isValid = false;
    } else {
        email_error.innerHTML = ""; // Clear the error message if the field is valid
    }

    // CIN
    const CIN_error = document.getElementById("CIN_error");
    if (CIN.trim() === "") {
        CIN_error.innerHTML = "Please enter your CIN.<br>";
        isValid = false;
    } else if (!validateMoroccanID(CIN)) {
        CIN_error.innerHTML = "Please enter a valid Moroccan CIN.<br>";
        isValid = false;
    } else {
        CIN_error.innerHTML = ""; // Clear the error message if the field is valid
    }

    // Phone
    const Phone_Number_error = document.getElementById("Phone_Number_error");
    if (phone.trim() === "") {
        Phone_Number_error.innerHTML = "Please enter your phone number.<br>";
        isValid = false;
    } else if (!validateMoroccanPhoneNumber(phone)) {
        Phone_Number_error.innerHTML = "Please enter a valid Moroccan phone number.<br>";
        isValid = false;
    } else {
        Phone_Number_error.innerHTML = ""; // Clear the error message if the field is valid
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateMoroccanID(cin) {
    // Regular expression for a Moroccan CIN (Carte d'Identité Nationale)
    var regex = /^[a-zA-Z]{2}\d{6}||\d{5}$/;
    return regex.test(cin);
}

function validateMoroccanName(name) {
    // Regular expression for a Moroccan name (allowing letters, spaces, and hyphens)
    var regex = /^[A-Za-zÀ-ÖØ-öø-ÿ- ]+$/;
    return regex.test(name);
}

function validateMoroccanPhoneNumber(phone) {
    // Regular expression for a Moroccan phone number: starts with "0" or "212" followed by nine digits
    var regex = /^(0|212)\d{9}$/;
    return regex.test(phone);
}
