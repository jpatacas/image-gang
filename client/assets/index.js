let score = 0;

let questionNumber = 1 // current question number

//create the first question
displayQuestion(questionNumber)

//create the first buttons/answers  
createButtons(questionNumber).then( () => {

    let buttons = document.getElementsByClassName("answerButton")

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].onclick = () => {
            console.log("clicked button: " + buttons[i].innerText)
            checkAnswer(i, buttons[i].innerText) 

        }
    }
}
)

//create questions 2 until end
getNumberOfQuestions().then(dataLength => {

    for (let qIndex = 2; qIndex <= dataLength; qIndex++) { 
        
        (function(index) {

            setTimeout(function(){

            //update the question displayed
            updateDisplayQuestion(index)

            // updated the buttons
            updateButtons(index).then( () => {

                let buttons = document.getElementsByClassName("answerButton")

                //console.log(buttons)

                for (let i = 0; i < buttons.length; i++) {

                    buttons[i].onclick = () => {
                        console.log("clicked button: " + buttons[i].innerText)

                        console.log(qIndex)
                        checkAnswer(qIndex, buttons[i].innerText) // questionNumber - 1?? needs more testing? 

                    }
                }
            }
            )
            console.log(qIndex)
            if (qIndex == dataLength)
            {
                console.log("go to the last page") //needs to be after the last page, this goes directly when last question is loaded
            }


            }, index * 4.0 * 1000)})(qIndex) // 4 seconds
            //console.log("go to the last page")

    }
  
    }
)

async function updateButtons (id) { //id of outer object

    const response = await fetch (`http://localhost:3000/data/${id}`)
    const question = await response.json()

    const answers = question.answers // array of answers objects

    const buttons = document.getElementsByClassName("answerButton") //get buttons html array of elements

    for (let i = 0; i< answers.length; i++)
    {
        // for (let j = 0; j <= buttons.length; j++)
        // {
        //     console.log(buttons[j])
            buttons[i].innerText = answers[i].ans
        // }

    }
    
}

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
    question.id = "question"

    question.innerText = questionText

    const quizSection = document.getElementById("quiz")

    quizSection.appendChild(question)
}

function updateQuestion (questionText) {
    const question = document.getElementById("question")

    question.innerText = questionText
}

async function displayQuestion (id) {

    const response = await fetch (`http://localhost:3000/data/${id}`)
    const question = await response.json()

    createQuestion(question.question)

}

async function updateDisplayQuestion (id) {

    const response = await fetch (`http://localhost:3000/data/${id}`)
    const question = await response.json()

    updateQuestion(question.question)

}

//get data/question length

async function getNumberOfQuestions () {
    const response = await fetch(`http://localhost:3000/data/`)
    const data = await response.json()

    //console.log(data.length)
    return data.length
}

//function that checks if correct answer id = clicked answer, increments score
async function checkAnswer (qid, buttonText) { //input question id
    const response = await fetch (`http://localhost:3000/data/${qid}`) //question id
    const question = await response.json()

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
            console.log(`answer id: ${answers[i].id}`)
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