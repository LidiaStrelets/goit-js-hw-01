let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const userQuantity = prompt('Сколько дроидов добавить в корзину?');
const quantity = Number(userQuantity);
const isText = isNaN(quantity);

if (quantity == 0) {
    console.log('Отменено пользователем!');
}
else if (isText === true) {
    console.log('Ошибка ввода, введите число!');
}
else {
    totalPrice = pricePerDroid * quantity;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    }
    else {
        credits -= totalPrice;
        console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`);
    }
}