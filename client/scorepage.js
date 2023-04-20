//import  score  from "./index.js";

console.log("total score: " + score)

const randomiseButton = document.getElementById("btn-facts");
randomiseButton.addEventListener("click", displayRandomFacts);

// buttons[i].onclick = () => {
//     console.log("clicked button: " + buttons[i].innerText)

//     console.log(qIndex)
//     checkAnswer(qIndex, buttons[i].innerText) // questionNumber - 1?? needs more testing? 

// }

// Display Random Facts
async function displayRandomFacts() {
    const response = await fetch("http://localhost:3000/scorepage")
    const facts = await response.json();
    console.log(facts);

    const factElement = document.getElementById("facts");
    factElement.textContent = facts["fact"];
}