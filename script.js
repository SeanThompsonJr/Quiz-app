//html variables
const questionNumText = document.querySelector('#questionNum');
const questionText = document.querySelector('.question-text');
const answerText = document.querySelectorAll('.answers');
 const nextBtn = document.querySelector('#btn');
 const submitBtn = document.querySelector('#submit-btn');

// primitive variables
let scoreTxt = "";
let currentScore = 0 //new
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
submitBtn.style.cursor = "not-allowed"
 //move this to answer choice func





 //function calls
answerChoice() //new
nextBtn.addEventListener('click', nextQuestion);





function finalQuestion(){ //new
    //display the submit btn
  
    submitBtn.style.cursor = "pointer";
    submitBtn.setAttribute("class", "active-btn btn")
    submitBtn.setAttribute("href", "final.html")

    //submit the results
    scoreTxt =  `${currentScore} / ${questions.length}`
    localStorage.setItem('scoreTxt', scoreTxt)
}



//functions
function answerChoice(){ //new
    answerText.forEach((answer, index) =>{
        answer.addEventListener('click', ()=>{
            correctAnswer(currentQuestion,index);

            nextBtn.style.cursor = "pointer";
            nextBtn.setAttribute("class", "active-btn btn")
        })
    })
}

function nextQuestion(){
    if(currentQuestion < questions.length -1){
        currentQuestion++;
        loadQuestion(currentQuestion);
        resetAnswer(currentQuestion);
        
       
    }else{
        
        finalQuestion()
    }
    
}
//this is the first thing before the change of correct answer func
//corrct answer
function correctAnswer(cq, selectedAnswerIndex){
    // loop current questions
    if (answers[cq][selectedAnswerIndex] === correctAnswers[cq]) {
        answerText[selectedAnswerIndex].style.backgroundColor = "green";
        currentScore += 1;
    } else {
        answerText[selectedAnswerIndex].style.backgroundColor = "red";
        
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





///score no work