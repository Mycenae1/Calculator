const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
console.log(screen);
console.log(screen.textContent);
let calcArray = [];
let calculation;
console.log(buttons);
const calculate = (button) => {
  console.log(button);
  const value = button.textContent;
  if (value === "AC") {
    calcArray = [];
    screen.textContent = " ";
  } else if (value === "D") {
    screen.textContent = " " + screen.textContent.toString().slice(0, -1);
    calcArray.pop();
  } else if (value === "=") {
    screen.textContent = eval(calculation);
  } else {
    console.log(value);
    calcArray.push(value);
    console.log(calcArray);
    calculation = calcArray.join("");
    console.log(calculation);
    screen.textContent = calculation;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});
