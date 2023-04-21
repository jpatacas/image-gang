fetch("http://localhost:3000/scorepage")
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayFact(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
 
  async function displayFact(data) {
    const factDiv = document.getElementById("final"); 
    let response = await fetch("http://localhost:3000/scorepage");
    const {fact} = await response.json(); // Destructure the "fact" value from the JSON response
    const heading = document.getElementById("fact");
    heading.innerHTML = fact;
    factDiv.appendChild(heading);
  }

