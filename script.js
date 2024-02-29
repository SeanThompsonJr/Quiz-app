//html variables
const questionNumText = document.querySelector('#questionNum');
const questionText = document.querySelector('.question-text');
const answerText = document.querySelectorAll('.answers');
 const nextBtn = document.querySelector('#btn')

// primitive variables
let currentQuestion = 0;
let userAnswers = [];
// reference variables
const questions = [
    "where was Jesus Born", "how many books are in the bible", "what is the first book of the bible"
];
const answers = [
    ["Bethlaham", "Judea", "babylon", "Jerusalem"], ["39", "27", "66", "58" ], ["Matthew", "Genesis", "Revelation", "Exodus"]
];
const correctAnswers = ["Bethlaham", "66", "Genesis"];


//logic when a correct execute next question



//load the question
loadQuestion(currentQuestion);
//misc
nextBtn.style.cursor = "not-allowed";
 //move this to answer choice func





 //function calls
answerChoice(currentQuestion)



nextBtn.addEventListener('click', nextQuestion);


function answerChoice(cq){
    answerText.forEach((answer) =>{
        answer.addEventListener('click', ()=>{
            correctAnswer(currentQuestion);

            nextBtn.style.cursor = "pointer";
            nextBtn.setAttribute("class", "deny-btn btn")
        })
    })

    
}

function nextQuestion(){
    currentQuestion++;
    loadQuestion(currentQuestion);
    resetAnswer(currentQuestion)
}


//functions

//corrct answer
function correctAnswer(cq){
    // loop current questions
    for (let i = 0; i < answers[cq].length; i++) {
        if (answers[cq][i] === correctAnswers[cq]){
            answerText[i].style.backgroundColor = "green";
        }else{
            answerText[i].style.backgroundColor = "red";
        }
    }
}
//reset answer
function resetAnswer(cq){
    // loop current questions
    for (let i = 0; i < answers[cq].length; i++) {
        if (answers[cq][i] === correctAnswers[cq]){
            answerText[i].style.backgroundColor = "#D9D9D9";
        }else{
            answerText[i].style.backgroundColor = "#D9D9D9";
        }
    }
}



//next question function



//load the question function
function loadQuestion(cq){
    //increment the question number
    questionNumText.innerText = cq+1;
    //load the question
    questionText.innerText = questions[currentQuestion];
    //load the answers
    answerText.forEach((answer, index) => {
        answer.innerText = answers[currentQuestion][index];
    });
}