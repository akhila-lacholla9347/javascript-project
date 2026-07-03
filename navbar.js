function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(item => {
        if (item) {
            totalItems += item.quantity || 1;
        }
    });

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.innerHTML = totalItems;
    }
}

updateCartCount();