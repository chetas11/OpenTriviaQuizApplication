let MainContainer = document.createElement("div");
MainContainer.classList.add("container","main","text-center");
document.body.appendChild(MainContainer);

let Row = document.createElement("div");
Row.classList.add("row")
MainContainer.appendChild(Row)

let Col = document.createElement("div")
Col.classList.add("col-lg-12", "col-md-12", "col-sm-6")
Row.appendChild(Col)

let h2 = document.createElement("h2")
h2.innerText = "Score"
Col.appendChild(h2)

let inputBox = document.createElement("input")
inputBox.classList.add("form-group","text-center")
Col.appendChild(inputBox)

let saveScore = document.createElement("button")
saveScore.classList.add("btn","btn-primary","disabled")
saveScore.innerText = "Save"
Col.appendChild(saveScore)

let playAgain = document.createElement("button")
playAgain.classList.add("btn","btn-primary")
playAgain.innerText = "Play Again"
Col.appendChild(playAgain)

let goHome = document.createElement("button")
goHome.classList.add("btn","btn-primary")
goHome.innerText = "Go Home"
Col.appendChild(goHome)

let ScoredPoints = sessionStorage.getItem("score");

h2.innerText = ScoredPoints


inputBox.addEventListener("input" , function(){
    saveScore.classList.remove("disabled")
    console.log(inputBox)
})

playAgain.addEventListener("click", function(){
    location.href = "game.html";
})

goHome.addEventListener("click", function(){
    location.href = "index.html";
})

saveScore.addEventListener("click", ()=>{
    var Scores = JSON.parse(localStorage.getItem("AllScores"))
    if(Scores === null){
        Scores = [];
    }
    
    Scores.push({userName: inputBox.value, scoredpoints: h2.innerText});    
    localStorage.setItem("AllScores", JSON.stringify(Scores)) 
    location.href = "highscore.html";


 
})








