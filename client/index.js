
// Counter Function Attempt
function sumScore(data) {
  let totalScore = 0;
    for (let i = 0; i < data.length; i++) {
      totalScore += data[i].correct_ans_id;
    }
    return totalScore;
  }

  const totalScore = sumScore(data);
  console.log(totalScore);


  // Display Image

  async function displayImage() {
    const res = await fetch("http;//localhost:3000/data/iamge")
    const data = await res.json()

    const theImage = document.querySelector('.imageElement');

    theImage.textContent = data['image']
}
