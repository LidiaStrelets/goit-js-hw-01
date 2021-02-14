function printElementWithNumber(array) {
    for (const item of array) {
        // console.log(array.indexOf(item), array.length - 1);
        if (array.indexOf(item) === (array.length - 1)) {
            console.log(`${array.indexOf(item) + 1} - ${item}.`);
            return;
        }
        console.log(`${array.indexOf(item)+1} - ${item};`);
    }
}
printElementWithNumber(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

printElementWithNumber([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);