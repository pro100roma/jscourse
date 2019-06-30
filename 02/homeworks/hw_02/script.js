'use strict';

let money = +prompt('What your mounth budget?', ''),
	time = prompt('Enter date in YYYY-MM-DD format', '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {

	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = prompt('Во сколько обойдется?', '');

	if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
		&& a != '' && b != '' && a.length < 30) {
		console.log('done');
		appData.expenses[a] = b;
	} else {

	}

};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
	console.log('Средний уровень достатка');
} else if(appData.moneyPerDay > 500) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Упс... Что-то пошло не так.');
}
