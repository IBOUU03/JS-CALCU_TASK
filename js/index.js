let calculateSystem = document.getElementById('calculateSystem');

document.addEventListener("keydown", function(event) {
    const allowedChars = "0123456789/*-+";
  
    if (!allowedChars.includes(event.key)) {
      event.preventDefault(); 
    }
  });
  
function addNumber(number) {
    calculateSystem.value += number;
}

function addOperator(operator) {
    calculateSystem.value += operator;
}

function clearCalculate() {
    calculateSystem.value = '';
}

function calculate() {
  let result = eval(calculateSystem.value);
  calculateSystem.value = result;
}

calculateSystem.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === "=") {
      calculate();
    }
  });