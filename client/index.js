let score = 0;

//let questionNumber = 1 // current question number

let secondsInterval = 4.0 //how long to display each question (s)

//create the first question
// displayQuestion(questionNumber)

// //create the first buttons/answers  
// createButtons(questionNumber).then( () => {

//     let buttons = document.getElementsByClassName("answerButton")

//     for (let i = 0; i < buttons.length; i++) {

//         buttons[i].onclick = () => {
//             console.log("clicked button: " + buttons[i].innerText)
//             checkAnswer(1, buttons[i].innerText) 

//         }
//     }
// }
// )

//create questions 2 until end
getNumberOfQuestions().then(dataLength => {

    for (let qIndex = 1; qIndex <= dataLength; qIndex++) { 
        
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
            console.log("current question index: "+ qIndex)

            if (qIndex == dataLength)
            {
                setTimeout(function () {
                  window.location.href = './scorepage.html';
                    console.log("go to the last page") //needs to be after the last page, this goes directly when last question is loaded
                  }, secondsInterval * 1000);
                //wait
               
            }

            }, index * secondsInterval * 1000)})(qIndex) // 4 seconds
            

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


// Display question



// async function displayQuestion() {
//   const res = await fetch("http://localhost:3000/data")
//   const data = await res.json()

//   const theQuestion = document.querySelector('.question');

//   theQuestion.textContent = data[1].question
// }

//   // Display Image

  async function displayImage() {
    const res = await fetch("http://localhost:3000/data")
    const data = await res.json()

    console.log(image[0].question)
   document.getElementById('#imageElement').src = data[1].image

    theImage.innerHTML = image[0].image


    // var img = document.createElement('img');
    // img.src = data[1].image;
    // document.img.appendChild(img);
}


// // Counter Function Attempt
// function sumScore(data) {
//   let totalScore = 0;
//     for (let i = 0; i < data.length; i++) {
//       totalScore += data[i].correct_ans_id;
//     }
//     return totalScore;
//   }

//   const totalScore = sumScore(data);
//   console.log(totalScore);

