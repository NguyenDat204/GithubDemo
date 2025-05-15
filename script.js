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

  if (isNaN(a) || isNaN(b)) {
    resultEl.textContent = "Vui lòng nhập đúng số!";
    return;
  }

  if (operator === "/" && b === 0) {
    resultEl.textContent = "Không thể chia cho 0!";
    return;
  }
}
