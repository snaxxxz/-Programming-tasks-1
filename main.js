const inputField = document.getElementById('output');
const button = document.getElementById('decline');
const outputParagraph = document.getElementById('input');

button.addEventListener('click', () => {
  const num = parseInt(inputField.value);

  if (isNaN(num)) {
    outputParagraph.textContent = "Пожалуйста, введите число.";
    return;
  }

  const word = склонение(num, "компьютер", "компьютера", "компьютеров");
  outputParagraph.textContent = `Вы ввели: ${num} ${word}`;
  console.log(`Введенное число: ${num} ${word}`);
});


function склонение(number, one, two, five) {
  const n = Math.abs(number);
  const n10 = n % 10;
  const n100 = n % 100;

  if (n10 === 1 && n100 !== 11) {
    return one;
  } else if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 > 20)) {
    return two;
  } else {
    return five;
  }
}