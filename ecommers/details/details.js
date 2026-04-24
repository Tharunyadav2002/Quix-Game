document.addEventListener("DOMContentLoaded", () => {
    let productDetails = document.getElementById("productDetails");

    // Get productId from localStorage
    let productId = localStorage.getItem("productId");

    // Fetch single product (better approach)
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(selectedProduct => {

            if (selectedProduct && selectedProduct.id) {

                productDetails.innerHTML = `
                    <div class="product-container">
                        <div class="product-image">
                            <img src="${selectedProduct.thumbnail}" alt="">
                        </div>

                        <div class="product-info">
                            <h2>${selectedProduct.title}</h2>
                            <p><b>Brand:</b> ${selectedProduct.brand}</p>
                            <p><b>Category:</b> ${selectedProduct.category}</p>
                            <p>${selectedProduct.description}</p>

                            <div class="price">₹ ${Math.round(selectedProduct.price*93)}</div>

                            <div class="buttons">
                                <button class="add-cart">Add to Cart</button>
                                <button class="back">Back to Home</button>
                            </div>
                        </div>
                    </div>

                    <div class="reviews">
                        <h3>Customer reviews</h3>
                        <div class="review">
                            <div class="stars">❤️❤️❤️❤️❤️</div>
                            <p>Great product!</p>
                        </div>
                        <div class="review">
                            <div class="stars">❤️❤️❤️❤️</div>
                            <p>Awesome product!</p>
                        </div>
                        <div class="review">
                            <div class="stars">❤️❤️</div>
                            <p>Poor quality!</p>
                        </div>
                    </div>
                `;

                // ✅ Correct way to add event listener
                document.querySelector(".add-cart").addEventListener("click", () => {
                    cartProducts(selectedProduct);
                });

                document.querySelector(".back").addEventListener("click", goBack);

            } else {
                productDetails.innerHTML = `<p>Product Not Found...</p>`;
            }
        })
        .catch(() => {
            productDetails.innerHTML = `<p>Error loading product...</p>`;
        });
});

// Back function
function goBack() {
    history.back();
}

// Add to cart function
function cartProducts(product) {
    console.log(product);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added Successfully...!!!");
}