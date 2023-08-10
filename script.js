users = ["Sestak", "Komarek", "Nguyen"]
users = {
    "Sestak": "1234",
    "Komarek": "1234",
    "Nguyen": "1234"
}

function CheckLoginForm(e) {
    e.preventDefault()

    username = document.getElementById("username").value
    password = document.getElementById("password").value
    error = document.getElementById("error")

    if (users[username] != password) {
        error.innerHTML = "Username or password is incorrect!"
        error.style.visibility = "visible"
        return false
    }
    localStorage.setItem("user", username);
    window.location.href = "education.html"
}

function checkLoginStatus() {
    if (!localStorage.getItem("user")) window.location.href = "index.html"
    console.log("Welcome", localStorage.getItem("user"))
}

function logout() {
    localStorage.removeItem("user")
}