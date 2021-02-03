let userNumber;
let number;
let summary = 0;
do {
    userNumber = prompt('Введите произвольное число');
    number = Number(userNumber);
    const isIncorrect = isNaN(number);
    if (isIncorrect === true) {
        alert('Некорректный ввод, введите число!')
    }
    else {
        summary += number;
    }
} while (userNumber !== null);
alert(`Вы закончили ввод. Общая сумма введенных чисел равна ${summary}`)