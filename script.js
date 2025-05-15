function calculate() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const operator = document.getElementById("operator").value;

  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Không chia cho 0";
      break;
    default:
      result = "Phép tính không hợp lệ";
  }

  document.getElementById("result").textContent = result;
}

function resetForm() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("operator").value = "+";
  document.getElementById("result").textContent = "--";
}

