const inputContent = document.getElementById("Text-input");
const btnCheck = document.getElementById("Check");

let input = getInput();
checkInput(input);

function splitInput() {
  if (inputContent.value == "") {
    alert("Enter input");
    return false;
  }

  localStorage.setItem("string", inputContent.value);

  checkInput(inputContent.value);
}

function getInput() {
  return localStorage.getItem("string") ? localStorage.getItem("string") : "";
}

function checkInput(text) {
  inputContent.innerHTML = text;
  const sens = text.split(". ");
  document.getElementById("sen").innerHTML = sens.length;
  const words = text.split(" ");
  words.forEach((word) => {
    if (word == "") {
      words.length -= 1;
    }
  });
  document.getElementById("word").innerHTML = words.length;
  const letters = text.split("");
  document.getElementById("letter").innerHTML = letters.length;
}
