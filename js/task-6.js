function countSummary() {
    let userInput;
    let total = 0;
    const numbers = [];

    do {
        userInput = prompt('Введите произвольное число');
        
        let input = Number(userInput);

        const isIncorrect = isNaN(input);
        
        if (isIncorrect === true) {
            alert('Некорректный ввод, введите число!')
        }
        else {
            numbers.push(input);
        }

    } while (userInput !== null);
    
    numbers.pop();

    if (numbers.length > 0) {
        for (const number of numbers) {
            total += number; 
        }
        console.log(`Общая сумма чисел равна ${total}`);
    }
    else {
        console.log('Вы не ввели чисел');
    }
}

countSummary();