function validateForm() {
    // Clear any previous error messages
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    // Username validation
    if (username.length < 5) {
        document.getElementById("usernameError").innerText = "Username must be at least 5 characters.";
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    return isValid;
}