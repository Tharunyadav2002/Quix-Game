let Questionbook=[
    {
        id:"1",
        question:"what is the full-form of JSON",
        Option:[
            "java spring object notation",
            "java script object model",
            "java scring object newton",
            "java script object notation",
        ],
        correctAnswer:"java script object notation",
    },
    {
        id:"2",
        question:"what is the full-form of dom",
        Option:[
            "domine object model",
            "document object model",
            "document only model",
            "domine object model",
        ],
        correctAnswer:"document object model",
    },
    {
        id:"3",
        question:"what is the full-form of ECMA",
        Option:[
            "european computers manufacturer association",
            "european compond manufacturer association",
            "european computers manufacturer assicent",
            "european computers manufacturing association",
        ],
        correctAnswer:"european computers manufacturer association",
    },
];

let questionElement=document.getElementById("question");
let optionElement=document.getElementById("option");
let scoreElement=document.getElementById("score");
let buttonnext=document.getElementById("btnnext");
// let skip=document.getElementById("skip");

let currentQuestion=0;
let score=0;

function displayQuestion(){
    let {question,Option,correctAnswer}=Questionbook[currentQuestion]
   questionElement.innerText=question;


   Option.map((opt)=>{
    let btn=document.createElement("button");
    btn.setAttribute("class","optionbutton");
   btn.innerText=opt;
     optionElement.append(btn);

     
     btn.addEventListener("click",()=>{
        if (correctAnswer ==opt) {
            btn.style.backgroundColor="green";
            score += 1;
        }else{
            btn.style.backgroundColor="red";
             score -= 0.25;
        }
        // setTimeout(()=>{
        //     nextQuestion();
        // },2000)
        scoreElement.textContent=`score:${score}/${Questionbook.length}`;
        let allbuttons = document.querySelectorAll(".optionbutton");
        allbuttons.forEach((b) => b.disabled = true);
     });
   });
}
displayQuestion();
function nextQuestion(){
    currentQuestion++;
    optionElement.textContent="";
    if(Questionbook.length==currentQuestion){
        questionElement.innerText="Quiz completed sucessfully ";
        //  skip.style.display="none";
           buttonnext.style.display="none";
    }else{
        displayQuestion();
    }
}
 buttonnext.addEventListener("click",()=>{
    nextQuestion();
 });
  skip.addEventListener("click",()=>{
    nextQuestion();
 })