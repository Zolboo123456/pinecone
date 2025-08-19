document.addEventListener("DOMContentLoaded", function () {
  const resetBtn = document.getElementById("reset-btn");
  const minusTen = document.getElementById("minus-ten");
  const plusTen = document.getElementById("plus-ten");
  const minusOne = document.getElementById("minus-one");
  const plusOne = document.getElementById("plus-one");
  let main = document.getElementById("main");
  let count = 0;

  minusTen.addEventListener("click", function () {
    count = count - 10;
    updateDisplay();
  });

  plusTen.addEventListener("click", function () {
    count = count + 999999999999999;
    updateDisplay();
  });

  minusOne.addEventListener("click", function () {
    count--;
    updateDisplay();
  });

  plusOne.addEventListener("click", function () {
    count++;
    updateDisplay();
  });

  resetBtn.addEventListener("click", function () {
    count = 0;
    updateDisplay();
  });

  function updateDisplay() {
    main.textContent = count;
  }
});
