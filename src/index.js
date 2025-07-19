function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating poem",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
