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

function createScores(i){
    let h3 = document.createElement("h3")
    h3.innerText = localStorage.key(i)
    Col.appendChild(h3)
}



let goHome = document.createElement("button")
goHome.classList.add("btn","btn-primary")
goHome.innerText = "Go Home"
Col.appendChild(goHome)


goHome.addEventListener("click", function(){
    location.href = "index.html";
})

for(i=0; i<localStorage.length; i++){
    createScores(i);
}