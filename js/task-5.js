const countryInputRef = document.querySelector('.task-5__input');
const btnRef = document.querySelector('.task-5__button');

btnRef.addEventListener('click', () => {
    let country = countryInputRef.value;
    country = country.toLowerCase();
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
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    }
})

