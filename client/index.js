
// // // Counter Function Attempt
// function sumScore(data) {
//   let totalScore = 0;
//     for (let i = 0; i < data.length; i++) {
//       totalScore += data[i].correct_ans_id;
//     }
//     return totalScore;
//   }

//   const totalScore = sumScore(data);
//   console.log(totalScore);


// Display question

async function displayQuestion() {
  const res = await fetch("http://localhost:3000/data")
  const data = await res.json()

  const theQuestion = document.querySelector('.question');

  theQuestion.textContent = data[1].question
}
displayQuestion()

  // Display Image

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
displayImage()
