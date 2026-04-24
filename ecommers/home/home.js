let product=[];
function fetchData(){
    fetch("https://dummyjson.com/products")
    .then((res)=>{
        return res.json();
    })
    .then((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allproducts",JSON.stringify(product));
        displayproduct(product)
    });
}
fetchData()


function displayproduct(prod) {
let output="";
prod.map((val)=>{
    output +=`
    <main>
    <img src="${val.images[0]}"width="300" >
    <h1>${val.title}</h1>
    <h3>₹${Math.round(val.price*93)}</h3>
    <h3>Stock:${val.stock}</h3>
    <h3>Rating:${val.rating}</h3>
    <button onclick="viewDetails(${val.id})">Details</button>
    </main>
    `
});
  document.getElementById("productContainer").innerHTML=output;
}
document.getElementById("searchProduct")
   .addEventListener("input",function data (e){ 
    let searchTerm=e.target.value.toLowerCase();
    let filteredProduct=product.filter((v)=>{
        return v.title.toLowerCase().includes(searchTerm)
        ||v.category.toLowerCase().includes(searchTerm)
    });
    displayproduct(filteredProduct)
   })
      function viewDetails(id){
    console.log(id);
    localStorage.setItem("productId",id);
    window.location.href="../details/details.html"
   }