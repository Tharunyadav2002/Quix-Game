document.getElementById("formContainer")
.addEventListener("submit",function data(e){
    e.preventDefault();
    let email=document.getElementById("email").value;
    let Password=document.getElementById("Password").value;
    // console.log(email);
    // console.log(Password);
let userData=JSON.parse(localStorage.getItem("userData"))
// console.log(userData);
if (userData.email==email && userData.Password==Password) {
    window.location.href="../home/home.html";
}else{
    alert("incorrect credential")
    window.location.reload()
}
});







// document.getElementById("formContainer")
// .addEventListener("submit", function(e) {
//     e.preventDefault();

//     let email = document.getElementById("email").value;
//     let password = document.getElementById("Password").value;

//     let userData = JSON.parse(localStorage.getItem("userData"));

//     if (userData.email === email && userData.password === password) {
//         window.location.href = "../home/home.html";
//     } else {
//         alert("Incorrect credentials");

//     window.location.reload()
        
//     }
// });