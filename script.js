let allProducts = [];

fetch("products.json")
.then(response => response.json())
.then(products => {

    allProducts = products;

    displayProducts(allProducts);

})
.catch(error => console.log(error));




document.getElementById("sortProducts").addEventListener("change", function () {

    let sortedProducts = [...allProducts];

    switch(this.value){

        case "high":
            sortedProducts.sort((a,b)=>b.price-a.price);
            break;

        case "low":
            sortedProducts.sort((a,b)=>a.price-b.price);
            break;

        case "new":
            sortedProducts.sort((a,b)=>b.id-a.id);
            break;

        case "old":
            sortedProducts.sort((a,b)=>a.id-b.id);
            break;

        default:
            sortedProducts = [...allProducts];
    }

    displayProducts(sortedProducts);

});










function displayProducts(products) {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        // Paste the full card HTML here
        card.innerHTML = `

<span class="new-badge">${product.badge}</span>



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

    <button class="view-btn" onclick="viewProduct(${product.id})">
        View Details
    </button>

    <button class="buy-btn" onclick="buyNow(${product.id})">
        Buy Now
    </button>

</div>
</div>

`;

        container.appendChild(card);

    });

}
function viewProduct(id){
    window.location.href = `productdetails.html?id=${id}&page=new`;
}

function buyNow(id) {

    const product = allProducts.find(item => item.id === id);

    localStorage.setItem("buyProduct", JSON.stringify(product));

    window.location.href = "checkout.html";
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


//filter and checkbox

const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

priceRange.addEventListener("input", function () {

    priceValue.textContent = this.value;

    const searchText = searchInput.value.toLowerCase();

    const filtered = allProducts.filter(product => {

        const matchSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);

        const matchPrice = product.price <= Number(this.value);

        return matchSearch && matchPrice;
    });

    displayProducts(filtered);

});
const filterBtn = document.getElementById("filterBtn");
const filterPanel = document.getElementById("filterPanel");
const arrow = document.getElementById("arrow");

filterBtn.addEventListener("click", () => {

    filterPanel.classList.toggle("show");

    if(filterPanel.classList.contains("show")){
        arrow.innerHTML = "▲";
    }else{
        arrow.innerHTML = "▼";
    }

});

const available = document.getElementById("available");

available.addEventListener("change", function () {

    if (this.checked) {

        const filtered = allProducts.filter(product => product.available === true);

        displayProducts(filtered);

    } else {

        displayProducts(allProducts);

    }

});