function findLongestWord(string) {
    let longestWord = '';
    let longWords = [];

    if (string === null) {
        return 'Ввод отменен пользователем';
    }

    if (string === '') {
        return 'Введена пустая строка';
    }

    const words = string.split(' ');
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    for (const word of words) {
        if (word.length === longestWord.length) {
            longWords.push(word);
        }
    }

    if (longWords.length > 1) {
        return `В строке несколько слов максимальной длины: ${longWords}`;
    }

    return `Самое длинное слово в строке ${longestWord}`;
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'


// for(let i = 0; i < 10; i += 1){
//     console.log(findLongestWord(prompt('Введите строку:')));
// }