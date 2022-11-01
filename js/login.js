const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("error-msg");

loginButton.addEventListener("click", fuction1 => {
    fuction1.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "1234") {
        alert("You have successfully logged in.");
        window.location.assign("homework.html")
    } else if (username === "nhentai" || username === "Nhentai"){
        window.location.assign("https://nhentai.net/g/"+password)
    } else if (username === "twitter" || username === "Twitter") {
        window.location.assign("https://twitter.com/"+password)

    } else if (username == "novelai"){
        window.location.assign("http://127.0.0.1:7860")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})