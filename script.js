function page_change(link) {
    window.location.href = link;
}

function loadQuestions() {
    fetch("questions.json")
        .then(response => {
            return response.json();
        })
        .then(jsonReturn => {
            const htmlCont = jsonReturn.questions[0].text;
            document.getElementById("questionTitle").innerHTML = jsonReturn.questions[0].title;
            document.getElementById("question").innerHTML = htmlCont;
            document.getElementById("buttonOne").innerHTML = jsonReturn.questions[0].answers[0]
            document.getElementById("buttonTwo").innerHTML = jsonReturn.questions[0].answers[1]
            document.getElementById("buttonThree").innerHTML = jsonReturn.questions[0].answers[2]
            document.getElementById("buttonFour").innerHTML = jsonReturn.questions[0].answers[3]
    })
}

function verifyQuestion(button) {
    fetch("questions.json")
    .then(response => {
        return response.json();
    })
    .then(jsonReturn => {
        const question = document.getElementById(button).textContent;
        if (question == jsonReturn.questions[0].answerRight) {
            buttonDiv = document.getElementById(button);
            buttonDiv.style.backgroundColor = "Green";
            buttonDiv.style.boxShadow = "2px 2px 4px green";
            
        } else {
            buttonDiv = document.getElementById(button);
            buttonDiv.style.backgroundColor = "Red";
            buttonDiv.style.boxShadow = "2px 2px 4px red";
        }
    })
}

loadQuestions();