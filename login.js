document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    

    const user = users.find(function(user){

        return user.email === email && user.password === password;

    });

    if(user){

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert("Login Successful!");

        window.location.href = "Home.html";

    }
    else{

        alert("Invalid Email or Password");

    }

});