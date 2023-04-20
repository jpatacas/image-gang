import  score  from "./index.js";

console.log("total score: " + score)

const randomiseButton = document.querySelector("btn-facts");
randomiseButton.addEventListener("click", displayRandomFacts);

// Display Random Facts
async function displayRandomFacts() {
    const response = await fetch("http://localhost:3000/scorepage")
    const facts = await response.json();
    console.log(facts);

    const factElement = document.getElementById("#facts");
    factElement.textContent = facts["facts"];
}