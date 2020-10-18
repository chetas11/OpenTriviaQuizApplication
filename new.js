//Function to display next question (if no next question available then save score as session variable myScore then GoTo end.html) -->takes input an object from the main questions array
function showQuestion(questionObject){
    if(window.questionNumber>window.JsonQnA.length-1){sessionStorage.setItem('myScore', document.querySelector("#scoreVal").innerText);    ;window.location.href = "end.html"}
    //change displayed question number
    document.querySelector("#questionNumber").innerText=window.questionNumber+1
    //change question text
    document.querySelector("#question").innerText=questionObject.question;
    //create array of options for current question
    let options=[];
    questionObject.incorrect_answers.forEach((o)=>options.push({val:o,correct:"No"}))
    options.push({val:questionObject.correct_answer,correct:"Yes"})
    //shuffle the position of correct answer
    options=shuffleArray(options);
    let optionsHTML=document.querySelector(".options");
    //removing old options
    optionsHTML.innerHTML="";
    //adding new options
    options.forEach((option)=>{let optionButton =document.createElement("button");optionButton.classList.add("btn","option","btn-outline-primary","btn-block");optionButton.setAttribute("data-correct",option.correct);optionButton.innerHTML=option.val;optionsHTML.appendChild(optionButton);})
    //adding eventlistener for each option
    document.querySelectorAll(".option").forEach((o)=>o.addEventListener("click",selectAnswer))

}
