'use strict';

let money, time;

function start() {

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Введите месячный бюджет', '');
	}

	time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExpenses() {
	let expensCount = +prompt('Сколько пунктов обязательных расходов?');

	if(isNaN(expensCount) == true) {
		expensCount = 0;
	}
	
	for (let i = 0; i < expensCount; i++) {

		let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
			b = prompt('Во сколько обойдется?', '');
	
		if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
			&& a != '' && b != '' && a.length < 30) {
			console.log('done');
			appData.expenses[a] = b;
		} else {
			i--;
		}
	}
}

chooseExpenses();


function chooseOptExpenses() {
	let optExpensCount = +prompt('Сколько пунктов необязательных расходов?');

	if(isNaN(optExpensCount) == true) {
		optExpensCount = 0;
	}

	for(let i = 0; i < optExpensCount; i++) {
		let a = prompt('Статья необязательных расходов?'),
			b = prompt('Во сколько обойдется?');
		
		if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
			&& a != '' && b != '' && a.length < 30) {
				console.log('Optional expense succesfully added');
				appData.optionalExpenses[a] = b;
			} else {
				alert('Неправильное значение! Повторите попытку...');
				i--;
			}
	}
	
}

chooseOptExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(1);

	alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
	if(appData.moneyPerDay < 100) {
		console.log('Минимальный уровень достатка');
	} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
		console.log('Средний уровень достатка');
	} else if(appData.moneyPerDay > 500) {
		console.log('Высокий уровень достатка');
	} else {
		console.log('Упс... Что-то пошло не так.');
	}
}

detectLevel();

function checkSavings() {
	if(appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?', ''),
			percent = +prompt('Под какой процент?', '');
		
		appData.monthIncome = save/100/12 * percent;
		alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
	}
}

checkSavings();
