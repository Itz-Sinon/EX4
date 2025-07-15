const inputContent = document.getElementById("Text-input");
const btnCheck = document.getElementById("Check");

let input = getInput();
checkInput(input);

function splitInput() {
  localStorage.setItem("string", inputContent.value);

  checkInput(inputContent.value);
}

function getInput() {
  return localStorage.getItem("string") ? localStorage.getItem("string") : "";
}

function checkInput(text) {
  inputContent.innerHTML = text;
  const paras = text.split("\n");
  paras.forEach((para) => {
    if (para == "") {
      paras.length -= 1;
    }
  });
  document.getElementById("para").innerHTML = paras.length + " paragraphs";
  const sens = text.split(". ");
  sens.forEach((sen) => {
    if (sen == "") {
      sens.length -= 1;
    }
  });
  document.getElementById("sen").innerHTML = sens.length + " sentences";
  const words = text.split(" ");
  words.forEach((word) => {
    if (word == "") {
      words.length -= 1;
    }
  });
  document.getElementById("word").innerHTML = words.length + " words";
  const letters = text.split("");
  document.getElementById("letter").innerHTML = letters.length + " characters";
}
