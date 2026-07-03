let allProducts = [];

fetch("bestseller.json")
.then(response => response.json())
.then(products => {

    allProducts = products;

    displayProducts(allProducts);

})
.catch(error => console.log(error));

function displayProducts(products) {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        // Paste the full card HTML here
        card.innerHTML = `

<span class="new-badge">${product.badge}</span>

<span class="install-badge">Free Installation</span>

<img src="${product.image}" alt="${product.name}">

<div class="card-body">

    <h3 class="product-name">${product.name}</h3>

    <p class="subtitle">${product.subtitle}</p>

    <div class="rating">
        ⭐ ${product.rating} (${product.reviews} Reviews)
    </div>

    <div class="price">
        ₹${product.price}
    </div>

    <div>
        <span class="mrp">
            <del>₹${product.mrp}</del>
        </span>

        <span class="discount">
            ${product.discount}% OFF
        </span>
    </div>

    <ul class="features">
        ${product.features.map(feature => `
            <li>${feature}</li>
        `).join("")}
    </ul>

    <div class="button-group">
        <button class="view-btn">View Details</button>
        <button class="buy-btn">Buy Now</button>
    </div>

</div>

`;

        container.appendChild(card);

    });

}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
    );

    displayProducts(filtered);

});