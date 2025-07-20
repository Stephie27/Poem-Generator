function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instruction");

  let apiKey = "dbc80t431e2275e57a3b2912ao37a0f9";
  let prompt = `Generate a poem on about ${instructionsInput.value}`;
  let context =
    "You are a Haiku expert and love to write haikus. Your mission is to generate a haiku in basic HTML, do Not show the HTML ticks. Separate each line with a <br/>. Display only the Haiku, sign the Haiku with 'SheCodes AI' inside a <strong> element at the end of the Haiku. Make sure to follow the user instructions. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "blink"> Generating a Haiku about ${instructionsInput.value} </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
