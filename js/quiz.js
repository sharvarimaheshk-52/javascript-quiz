let questions=[{

    id:1,
    question: "What is the name of Black Panthers kingdom?",
    answer:"Wakanda",
    options:["Makanda","Waklanda","Lambina","Wakanda"]

},
{

    id:2,
    question:"Who is Thanos the Son of ?",
    answer:"A'lars",
    options:["Karen","A'lars","En Sabah Nur","Joe"]


},

{

    id:3,
    question:"Who is Thors Mother ?",
    answer:"Frigga",
    options:["Karen","Frigga","Aegir","Alfdis"]

},
{
    id:4,
    question:"What was Captain America's height before his super soldier transformation ?",
    answer:"5'4",
    options:["4'11","5'1","5'9","5'4"]
},
{
    id:5,
    question:"What was the name of the dwarf on Nidavellir ?",
    answer:"Eitri",
    options:["Eitri","Walsh","Steve","Erik"],
},
{
    id:6,
    question:"Finish this line from Captain America: and Hulk ______ ?",
    answer:"Smash",
    options:["Smash","Kiss Ass","Good Luck","Do It"]
}
];

let value=JSON.stringify(questions)
localStorage.setItem("question",value)

let question_count = 0
let points = 0

window.onload = function (){
    show(question_count)
}

function show(count){
    let question=document.getElementById("questions")
    let [first,second,third,fourth]=questions[count].options
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>
    `
    toggleActive();
    }

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
    for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("active"))
    {
    option[i].classList.remove("active");
    }
    }
    option[i].classList.add("active");
    };
    }
    }
    
    function next(){
        if(question_count == questions.length - 1 ){
        location.href = "./end.html"
        }
        
        let user_answer=document.querySelector("li.option.active").innerHTML
        if(user_answer == questions[question_count].answer){
        points +=1
        sessionStorage.setItem("points",points)
        } else{
        points +=0
        sessionStorage.setItem("points",points)
        }
        question_count++
        show(question_count)
        }