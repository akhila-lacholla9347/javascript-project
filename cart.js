/*let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");

const totalPrice = document.getElementById("totalPrice");

displayCart();

function displayCart(){

    container.innerHTML="";

    let total=0;

    if(cart.length===0){

        container.innerHTML="<h2>Your Cart is Empty</h2>";

        totalPrice.innerHTML=0;

        return;

    }

    cart.forEach((product,index)=>{
     if(!product)return;
        total += product.price;

        container.innerHTML += `

        <div class="cart-card">

            <img src="${product.image}">

            <div>

                <h2>${product.name}</h2>

                <h3>₹${product.price}</h3>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    totalPrice.innerHTML=total;

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}*/
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");
const totalPrice = document.getElementById("totalPrice");

displayCart();
updateCartCount();

function displayCart() {

    container.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        container.innerHTML = "<h2>Your Cart is Empty</h2>";

        totalPrice.innerHTML = "0";

        updateCartCount();

        return;
    }

    cart.forEach((product, index) => {

        if (!product) return;

        if (!product.quantity) {
            product.quantity = 1;
        }

        total += product.price * product.quantity;

        container.innerHTML += `

        <div class="cart-card">

            <img src="${product.image}">

            <div>

                <h2>${product.name}</h2>

                <h3>₹${product.price}</h3>

                <div class="quantity">

                    <button onclick="decreaseQuantity(${index})">-</button>

                    <span>${product.quantity}</span>

                    <button onclick="increaseQuantity(${index})">+</button>

                </div>

                <h4>Total : ₹${product.price * product.quantity}</h4>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    totalPrice.innerHTML = total;

    updateCartCount();

}

function increaseQuantity(index) {

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function updateCartCount() {

    let totalItems = 0;

    cart.forEach(item => {

        if (item) {
            totalItems += item.quantity;
        }

    });

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.innerHTML = totalItems;
    }

}

