function CheckLoginForm() {
    username = document.getElementById("username").value
    password = document.getElementById("password").value
    error = document.getElementById("error")

    if (!(username == "admin" && password == "admin")) {
        error.innerHTML = "Username or password is incorrect!"
        error.style.visibility = "visible"
        return false
    }
    return true
}