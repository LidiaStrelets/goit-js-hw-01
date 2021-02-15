function printElementWithNumber(array) {
    if (array === null) {
        return 'Ввод отменен пользователем';
    }

    if (array === '') {
        return 'Вы не ввели ни одного элемента';
    }

    if ((typeof array) === 'string') {
        array = array.split(' ');
        }

    for (const item of array) {
        if (array.indexOf(item) === (array.length - 1)) {
            console.log(`${array.indexOf(item) + 1} - ${item}.`);
            return "Массив пронумерован успешно";
        }
        console.log(`${array.indexOf(item)+1} - ${item};`);
    }
}

printElementWithNumber(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

printElementWithNumber([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// console.log(printElementWithNumber(prompt('Введите массив элементов, разделяя их пробелом:')));
