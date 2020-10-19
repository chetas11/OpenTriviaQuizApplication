
// --------------------Design Part-------------------------------

let MainContainer = document.createElement("div");
MainContainer.classList.add("container","main");
document.body.appendChild(MainContainer);

let Row = document.createElement("div");
Row.classList.add("row")
MainContainer.appendChild(Row)

let Col = document.createElement("div")
Col.classList.add("col-lg-12", "col-md-12", "col-sm-6")
Row.appendChild(Col)

let TotalQuestions = document.createElement("p");
TotalQuestions.innerText = "Questions 1/10"
TotalQuestions.setAttribute("id", "progressText")
Col.appendChild(TotalQuestions)

let Score = document.createElement("p");
Score.innerText = "Score"
Score.classList.add("score")
Col.appendChild(Score)

let Points = document.createElement("p");
Points.innerText = "0"
Points.classList.add("points")
Col.appendChild(Points)

let Container = document.createElement("div");
Container.classList.add("container");
MainContainer.appendChild(Container)

let Question = document.createElement("h2");
Question.innerText = "Question"
Question.classList.add("m-4")
Container.appendChild(Question)

let Option1 = document.createElement("p");
Option1.innerText = "Answer";
Option1.classList.add("choice-text")
Container.appendChild(Option1)

let Option2 = document.createElement("p");
Option2.innerText = "Answer";
Option2.classList.add("choice-text")
Container.appendChild(Option2)

let Option3 = document.createElement("p");
Option3.innerText = "Answer";
Option3.classList.add("choice-text")
Container.appendChild(Option3)

let Option4 = document.createElement("p");
Option4.innerText = "Answer";
Option4.classList.add("choice-text")
Container.appendChild(Option4)


// --------------------------- Fetching API and Loading Questions/Answers---------------

let count = 1;          // Counter to end the Quiz

const fetcher = async () => {
    try{
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
        const data = await response.json()
        console.log(data.results)
            let i = 0;
            function LoadData(i){                           // Function to Load Questions and Answers
            Question.innerText = data.results[i].question
            TotalQuestions.innerText = "Questions "+count+"/10"
            AllOptions = document.querySelectorAll(".choice-text")
        
            let Correctanswer = data.results[i].correct_answer

            answers = [Correctanswer, ...data.results[i].incorrect_answers]
        
            for(let j=0; j<answers.length; j++){
                answers.sort();
                AllOptions[j].innerText = answers[j]
             }

             count++
        }

        LoadData(i)    // Loading Question for first Time

        AllOptions.forEach(answer => {
            answer.addEventListener("click", e => {
                let Rightanswer = data.results[i].correct_answer
                if(Rightanswer == e.target.textContent){
                    Points.innerText = parseInt(Points.innerText) + 10;
                }else{

                }

                if(count>10){                       // once counter complete load the scores and navigate to save scores
                sessionStorage.setItem("score", Points.innerText);
                location.replace("end.html")
                }

                i = i+1
                LoadData(i);        // Loading new question once answers is clicked 
            })
        })

    }catch(e){
        console.log(e)
    }
}

fetcher();              // Calling Fetcher to fetch the data
















