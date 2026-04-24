document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
});
function displayCart(){
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");

    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cartContent);
    console.log(totalPrice);
    console.log(cart);
    cartContent.innerHTML="";
    let totalBill=0;
    if(cart.length==0){
        cartContent.innerHTML=`<p>Your Cart is Empty. Start Shopping...!</p>`
        totalPrice.innerHTML=" ";
    }else{
        cart.map((v,i)=>{
            totalBill +=v.price;
            let newElement = document.createElement("div");
            newElement.setAttribute("class","prod-info");
            newElement.innerHTML=`
            <div id="cartImg">
                <img src="${v.thumbnail}"/>
            </div>
            <div id="cartCnt">
                <h1>"${v.title}"</h1>
                <p>"${v.brand}"</p>
                <p>"${v.category}"</p>
                <p>"${v.description}"</p>
            </div>
            <div>
            <button onclick="removeFromCart(${i})">remove</button></div>
            `;
            cartContent.append(newElement);

        });
        totalPrice.innerHTML=`<h2>Total Amount is: ₹${Math.round(totalBill.toFixed())}</h2>`;
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    // location.reload();
     displayCart();
}



