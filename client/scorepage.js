


fetch("http://localhost:3000/scorepage")
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    //console.log(data);
    displayFact(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  displayFact()

  document.getElementById("generateButton").addEventListener('click', displayFact)
 
  async function displayFact() {
    const factDiv = document.getElementById("final"); 
    let response = await fetch("http://localhost:3000/scorepage");
    const {fact} = await response.json(); // Destructure the "fact" value from the JSON response
    const heading = document.getElementById("fact");
    heading.innerHTML = fact;
    factDiv.appendChild(heading);
  }

async function displayFinalScore () {
    const response = await fetch(`http://localhost:3000/score/`)
    const score = await response.json()

    console.log(score)

    document.getElementById("finalScore").innerText = score.score + "/10"

    return score
} 

displayFinalScore()
