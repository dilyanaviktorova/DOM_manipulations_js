function solve() {
  let firstTextBox = document.getElementById("text").value.toLowerCase();
  let secondTextBox = document.getElementById("naming-convention").value.toLowerCase();
  let result = document.getElementById("result");

  let splittedFirstBox = firstTextBox.split(" ");
  let resultString = '';

  if (secondTextBox === ("Camel Case").toLowerCase()) {
    resultString += splittedFirstBox[0];
    for (let i = 1; i < splittedFirstBox.length; i++) {
      resultString += splittedFirstBox[i][0].toUpperCase() + splittedFirstBox[i].slice(1);
    }
    result.textContent = resultString;

  } else if (secondTextBox === ("Pascal Case").toLowerCase()) {

    for (let i = 0; i < splittedFirstBox.length; i++) {
      resultString += splittedFirstBox[i][0].toUpperCase() + splittedFirstBox[i].slice(1);
    }
    result.textContent = resultString;

  } else {
    result.textContent = "Error!";
  }
}