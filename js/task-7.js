const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(login) {
    if ((login.length >= 4) && (login.length <= 16)) {
        return true;
    }
    return false;
}

function isLoginUnique(allLogins, login) {
    if (allLogins.includes(login)) {
        return false;
    }
    return true;
}

function addLogin(allLogins, login) {
    if (login === null) {
        return 'Некорректный ввод';
    }
    else {
       if (isLoginValid(login) === false) {
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
    else {
        if (isLoginUnique(allLogins, login) === false) {
            return 'Такой логин уже используется!';
        }
        else {
            allLogins.push(login);
            return 'Логин успешно добавлен!';
        }
    } 
    }
    
    
}

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, prompt('Enter unique login:')));
console.log(addLogin(logins, prompt('Enter unique login:')));

// console.log(logins);