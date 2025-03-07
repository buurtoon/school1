function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "shadmehr" && password === "1112") {
        document.getElementById("login").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("login").style.display = "none";
            document.getElementById("main").style.opacity = "1";
            document.getElementById("main").style.visibility = "visible";
        }, 1000);
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است!");
    }
}