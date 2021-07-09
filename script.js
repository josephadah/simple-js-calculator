const displayElem = document.getElementById('display');
let display = '';

const inputNumber = (number) => {
  display = `${display}${number}`;
  displayElem.innerText = display;
};

const inputOperator = (operator) => {
  display = `${display} ${operator} `;
  displayElem.innerText = display;
};

const calculate = () => {
  const result = eval(display);
  const resultElem = document.getElementById('result');
  resultElem.innerText = result;
};
