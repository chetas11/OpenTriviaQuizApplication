let MainContainer = document.createElement("div");
MainContainer.classList.add("container","text-center")
document.body.appendChild(MainContainer)

let Row = document.createElement("div");
Row.classList.add("row")
MainContainer.appendChild(Row)

let Col = document.createElement("div")
Col.classList.add("col-lg-12", "col-md-12", "col-sm-6")
Row.appendChild(Col)

let TopHeading = document.createElement("h1")
TopHeading.innerText = "Quick Quiz"
TopHeading.classList.add()
MainContainer.append(TopHeading)

let PlayButton = document.createElement("button")
PlayButton.classList.add("btn","btn-primary")
PlayButton.innerText = "Play"
PlayButton.setAttribute("name","play")
PlayButton.setAttribute("id","play")


let HighScore = document.createElement("button")
HighScore.classList.add("btn","btn-primary")
HighScore.setAttribute("name","highScores")
HighScore.setAttribute("id","highScores")
HighScore.innerText = "High Score"

Col.appendChild(TopHeading)
Col.appendChild(PlayButton)
Col.appendChild(HighScore)


PlayButton.addEventListener("click", function(){
    location.href = "game.html";
})

HighScore.addEventListener("click", function(){
    location.href = "highscore.html";
})




