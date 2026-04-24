document.getElementById("formContainer")
.addEventListener("submit",function data(e){
    e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("Password").value;
let Mobile=document.getElementById("MobileNo").value;

let formData={
    name:name,
    email:email,
    password:password,
    Mobile:Mobile
};
localStorage.setItem("userData",JSON.stringify(formData));
window.location.href="./login1.html"
})
