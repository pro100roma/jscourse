'use strict';

let money = prompt('What your mounth budget?', ''),
	time = prompt('Enter date in YYYY-MM-DD format', '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
	a2 = prompt('Во сколько обойдется?', ''),
	a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
	a4 = prompt('Во сколько обойдется?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);
