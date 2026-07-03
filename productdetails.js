

const params = new URLSearchParams(window.location.search);

const id = params.get("id");
const page = params.get("page");

let jsonFile;

if (page === "bestseller") {
    jsonFile = "bestseller.json";
} else {
    jsonFile = "products.json";
}

let product;

fetch(jsonFile)
.then(response => response.json())
.then(products => {

    product = products.find(p => p.id == id);


    console.log("ID from URL:", id);
console.log("Products:", products);
console.log("Found Product:", product);

    document.getElementById("productImage").src = product.image;
    document.getElementById("productName").innerHTML = product.name;
    document.getElementById("productSubtitle").innerHTML = product.subtitle;
    document.getElementById("productPrice").innerHTML = "₹" + product.price;
    document.getElementById("productMrp").innerHTML = "₹" + product.mrp;
    document.getElementById("productDiscount").innerHTML = product.discount + "% OFF";
    document.getElementById("productRating").innerHTML =
        "⭐ " + product.rating + " (" + product.reviews + " Reviews)";

    const featureList = document.getElementById("productFeatures");
    featureList.innerHTML = "";

    product.features.forEach(feature => {
        const li = document.createElement("li");
        li.innerHTML = feature;
        featureList.appendChild(li);
    });

});




document.getElementById("cartBtn").addEventListener("click", function () {

    if (!product) {
        alert("Product not loaded.");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item && item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added to Cart");

    window.location.href = "cart.html";

});


// Buy Now
document.getElementById("buyBtn").addEventListener("click",function(){

    localStorage.setItem("buyProduct",JSON.stringify(product));

    window.location.href="checkout.html";

});

document.getElementById("wishlistBtn").addEventListener("click", function () {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some(item => item.id === product.id);

    if (!exists) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Product Added to Wishlist ❤️");
    } else {
        alert("Product already exists in Wishlist");
    }

});
