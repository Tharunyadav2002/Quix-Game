//!object Destructuring============
// let emp={
//     name:"tharun",
//     age:23,
//     skill:"html"
// }

// let {name,age,skill}=emp;
// console.log(name);
// console.log(age);
// console.log(skill);

//! array Destructuring============
// let arr=["html","css","javascript","tailwindcss"];
// let [a,b]=arr;
// console.log(a);
// console.log(b);



//!========  Spread & rest operator=====
// let arr=["html","css","js","react"];
// let b=[...arr];//!spread
// let b=[...arr,"sql"];//!spread

// let [a,...b]=arr;//!rest
// console.log(a);
// console.log(b);


// let emp={
//     name:"anish",
//     age:23,
//     skill:"html"
// }

// let a={...emp};
// let a={...emp,city:"hydrabad"};


// let {name,...b}=emp;
// console.log(name);
// console.log(b);





// function Cake(cname,cprice){
//     this.cake_name=cname;
//     this.cake_price=cprice;
// }
// let c1=new Cake("blackforest",600)
// console.log(c1);
// let c2=new Cake("whiteforest",900)
// console.log(c2);
// Cake.prototype.brand="cakeforest";
// console.log(c1.brand);
// console.log(c2.brand);






//!sdet time out============
let timeout=setTimeout(()=>{
    console.log("webtech");
    
},3000);


let interval=setInterval(()=>{
    console.log("mock");
    
},3000);

