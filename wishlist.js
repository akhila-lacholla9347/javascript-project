
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistContainer");

displayWishlist();

function displayWishlist() {

    container.innerHTML = "";

    if (wishlist.length === 0) {

        container.innerHTML = "<h2 class='empty'>❤️ Your Wishlist is Empty</h2>";
        return;
    }

    wishlist.forEach((product, index) => {

        container.innerHTML += `

        <div class="wishlist-card">

            <img src="${product.image}" alt="${product.name}">

            <h2>${product.name}</h2>

            <div class="price">
                ₹${product.price}
            </div>

            <button class="remove-btn" onclick="removeWishlist(${index})">
                🗑 Remove
            </button>

        </div>

        `;

    });

}

function removeWishlist(index) {

    wishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist();

}

