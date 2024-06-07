function calculateSum() {
    const arrayInput = document.getElementById("array-input");
    const numbers = arrayInput.value.split(",").map(Number);

    if (numbers.some(isNaN)) {
      document.getElementById("result").textContent = "Please enter valid numbers separated by commas.";
      return;
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    document.getElementById("result").textContent = `The sum of the numbers is: ${sum}`;
  }