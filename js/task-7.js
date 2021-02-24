/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,
  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
createTransaction(amount, type) {
        const transaction = {};
        transaction.amount = amount;
    transaction.type = type;
    
    const { transactions } = this;

        if (transactions.length === 0) {
            transaction.id = 1;
        }
        else {
            transaction.id = transactions[transactions.length - 1].id + 1;
        }
    
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        const { transactions } = this;
        const transaction = account.createTransaction(amount, 'deposit');
        transactions.push(transaction);
        
        this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('На счету недостаточно средств, невозможно выполнить транзакцию');
            return;
        }
        const { transactions } = this;
        
        const transaction = account.createTransaction(amount, 'withdraw');
        transactions.push(transaction);

        this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
      console.log(`Текущий баланс по счету ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        const { transactions } = this;
        for (const transaction of transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }
        console.log('Транзакции с таким номером не существует');
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        const { transactions } = this;
        let total = 0;
        for (const {type: currentTransactionType,amount } of transactions) {
            if (currentTransactionType === type) {
                total += amount;
            }
        }
        console.log(`Транзакций типа ${type} совершено на сумму ${total}`);
  },
};


account.deposit(490);
account.deposit(4900);

account.withdraw(7000);
account.withdraw(210);
account.withdraw(3500)

account.getBalance();

account.getTransactionDetails(29);
console.log(account.getTransactionDetails(3));

account.getTransactionTotal('deposi')