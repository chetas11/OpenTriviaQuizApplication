// --------------------Design Part-------------------------------

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
h2.innerText = "High Scores"
Col.appendChild(h2)

let HighScores = JSON.parse(localStorage.getItem("AllScores"));          // getting scores from local storage
HighScores = HighScores.sort((a, b) => b.scoredpoints - a.scoredpoints); // sorting scores from highest to lowest  

HighScores.forEach((user) => {                        
   if(HighScores === null){
        HighScores = [];
    }
    let DisplayScore = document.createElement("h6");    //Display Scores 
    DisplayScore.classList.add("names")
    DisplayScore.innerText = user.userName+" - "+user.scoredpoints;
    Col.appendChild(DisplayScore);
});

let goHome = document.createElement("button")
goHome.classList.add("btn","btn-primary")
goHome.innerText = "Go Home"
Col.appendChild(goHome)

goHome.addEventListener("click", function(){
    location.href = "index.html";
})
