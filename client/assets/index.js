let score = 0;

let question = 1

//create the first question
displayQuestion(question)


// creating the buttons - only for the first object
createButtons(question).then( () => {

    let buttons = document.getElementsByClassName("answerButton")

    //console.log(buttons)

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].onclick = () => {
            console.log("clicked button: " + buttons[i].innerText)
            checkAnswer(1, buttons[i].innerText)

            

            //move to next page, i.e. displaynextQuestion
            //if no more questions, display score page
        }

    }

}
) 

//function to go through the array of objects, 

function createButton(answerText) {
    const button = document.createElement("button")
    button.className = "answerButton"

    button.innerText = answerText

    const quizSection = document.getElementById("quiz")

    quizSection.appendChild(button)

}

async function createButtons(id) { //id of the outer object (q+a)

    const response = await fetch (`http://localhost:3000/data/${id}`)
    const question = await response.json()

    const answers = question.answers // array of answers objects

    for (let i = 0; i< answers.length; i++)
    {
        createButton(answers[i].ans)
    }

}

function createQuestion (questionText) {
    const question = document.createElement("p")
    question.className = "question"

    question.innerText = questionText

    const quizSection = document.getElementById("quiz")

    quizSection.appendChild(question)
}

async function displayQuestion (id) {

    const response = await fetch (`http://localhost:3000/data/${id}`)
    const question = await response.json()

    // console.log(question.question)

    // return question.question

    createQuestion(question.question)

}

//check if answers.correct == true instead

//function that checks if correct answer id = clicked answer, increments score
async function checkAnswer (qid, buttonText) { //input question id
    const response = await fetch (`http://localhost:3000/data/${qid}`) //question id
    const question = await response.json()

    //let score = 0; //needs to be a global variable?

    const answers = question.answers // array of answers objects

    for (let i =0; i < answers.length; i++)
    {

        if (buttonText == answers[i].ans)
        {
            console.log(buttonText + " " + answers[i].ans )
            if (answers[i].correct)//(answers[i].id == question.correct_ans_id)
            {
                score += 1;
            }
            console.log(`answer id: ${answers[i].id}`)// correct andswer id: ${question.correct_ans_id}`)
        }

    }

    console.log(`score: ${score}`)
    return score;
}

//unused functions below



// async function displayAnswer (qid) {
//     const response = await fetch (`http://localhost:3000/data/${qid}`) //question id
//     const question = await response.json()

//     const answers = question.answers // array of answers objects

//     for (let i =0; i < answers.length; i++)
//     {
//         console.log(answers[i].id + answers[i].ans)
//     }

//     //console.log(answer)

// }