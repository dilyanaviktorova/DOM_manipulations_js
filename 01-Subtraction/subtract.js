function subtract() {

   let firstNumber = Number(document.getElementById("firstNumber").value);
   let secondNumber = Number(document.getElementById("secondNumber").value);

   let subtraction = firstNumber - secondNumber;

   let resultDiv = document.getElementById("result");
   resultDiv.textContent = subtraction.toFixed(2);
} 