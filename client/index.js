let score = 0;

let secondsInterval = 4.0; //how long to display each question (s)

//create the first question
updateDisplayQuestion(1);

//create the first buttons/answers
updateButtons(1).then(() => {
  let buttons = document.getElementsByClassName("answerButton");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      console.log("clicked button: " + buttons[i].innerText);
      checkAnswer(1, buttons[i].innerText);
    };
  }
});

displayImage(1);

//create questions 2 until end
getNumberOfQuestions().then((dataLength) => {
  for (let qIndex = 2; qIndex <= dataLength; qIndex++) {
    (function (index) {
      setTimeout(function () {
        //update the question displayed
        updateDisplayQuestion(index);

        displayImage(index);

        // updated the buttons
        updateButtons(index).then(() => {
          let buttons = document.getElementsByClassName("answerButton");

          //console.log(buttons)

          for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = () => {
              console.log("clicked button: " + buttons[i].innerText);

              console.log(qIndex);
              checkAnswer(qIndex, buttons[i].innerText); // questionNumber - 1?? needs more testing?
            };
          }
        });
        console.log("current question index: " + qIndex);

        if (qIndex == dataLength) {
          setTimeout(function () {
            window.location.href = "./scorepage.html";
            console.log("go to the last page"); //needs to be after the last page, this goes directly when last question is loaded
          }, secondsInterval * 1000);
          //wait
        }
      }, index * secondsInterval * 1000);
    })(qIndex); // 4 seconds
  }
});

//.style.display = "initial"
async function updateButtons(id) {
  //id of outer object

  const response = await fetch(`http://localhost:3000/data/${id}`);
  const question = await response.json();

  const answers = question.answers; // array of answers objects

  const buttons = document.getElementsByClassName("answerButton"); //get buttons html array of elements

  for (let i = 0; i < answers.length; i++) {
    buttons[i].hidden = false;
    buttons[i].innerText = answers[i].ans;
  }
}

function updateQuestion(questionText) {
  const question = document.getElementById("question");

  question.innerText = questionText;
}

async function updateDisplayQuestion(id) {
  const response = await fetch(`http://localhost:3000/data/${id}`);
  const question = await response.json();

  updateQuestion(question.question);
}

function updateImage(imageUrl) {
  const image = document.getElementById("imageElement");
  image.src = imageUrl;
  image.hidden = false;
}

async function displayImage(id) {
  const res = await fetch(`http://localhost:3000/data/${id}`);
  const data = await res.json();
  ///const imageUrl = data.image

  console.log(data.image);

  //get the url

  updateImage(data.image);
  //   console.log(image[0].question)
  //  document.getElementById('#imageElement').src = data[1].image

  //   theImage.innerHTML = image[0].image
}

//get data/question length

async function getNumberOfQuestions() {
  const response = await fetch(`http://localhost:3000/data/`);
  const data = await response.json();

  //console.log(data.length)
  return data.length;
}

//function that checks if correct answer id = clicked answer, increments score
async function checkAnswer(qid, buttonText) {
  //input question id
  const response = await fetch(`http://localhost:3000/data/${qid}`); //question id
  const question = await response.json();

  const answers = question.answers; // array of answers objects

  for (let i = 0; i < answers.length; i++) {
    if (buttonText == answers[i].ans) {
      console.log(buttonText + " " + answers[i].ans);
      if (answers[i].correct) {
        //(answers[i].id == question.correct_ans_id)
        score += 1;
        //post the score to the server

        const scoreData = {
          score: score,
        };

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scoreData),
        };

        const response = fetch("http://localhost:3000/score", options);
      }
      console.log(`answer id: ${answers[i].id}`);
    }
  }

  console.log(`score: ${score}`);
  return score;
}
