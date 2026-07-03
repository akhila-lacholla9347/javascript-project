const product = JSON.parse(localStorage.getItem("buyProduct"));

document.getElementById("productImage").src = product.image;

document.getElementById("productName").innerHTML = product.name;

document.getElementById("productPrice").innerHTML = "₹" + product.price;

document.getElementById("placeOrder").addEventListener("click",function(){

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const address = document.getElementById("address").value;

    if(name==="" || phone==="" || address===""){

        alert("Please fill all details");

        return;

    }

    window.location.href="success.html";

});