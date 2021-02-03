const userCountry = prompt('В какую страну Вы хотите заказать доставку?');
if(userCountry===null){
    alert('Отменено пользователем');
}
else {
const country = userCountry.toLowerCase();
let price = 0;

switch (country) {
    case 'китай':
        price = 100;
        break;
    case 'чили':
        price = 250;
        break;
    case 'австралия':
        price = 170;
        break;
    case 'индия':
        price = 80;
        break;
    case 'ямайка':
        price = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
if (price === 0) {
    alert('Попробуйте оформить доставку в другую страну');
}
else {
    alert(`Доставка в ${userCountry} будет стоить ${price} кредитов`);


}

}
