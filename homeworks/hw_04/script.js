'use strict';

let money, time;

function start() {

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Введите месячный бюджет', '');
	}

	time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

//start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function() {
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
	},
	chooseOptExpenses: function() {
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
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(1);

		alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
			console.log('Средний уровень достатка');
		} else if(appData.moneyPerDay > 500) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('Упс... Что-то пошло не так.');
		}
	},
	checkSavings: function() {
		if(appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?', ''),
				percent = +prompt('Под какой процент?', '');
			
			appData.monthIncome = save/100/12 * percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}
	},
	chooseIncome: function() {
	
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

		if(typeof(items) === 'string' && typeof(items) != null && items != '') {
			appData.income = items.split(', ');
			appData.income.push(prompt('Может что-то еще?', ''));
			appData.income.sort();

			appData.income.forEach(function(item, i, mass) {
				if (item != '') {
					console.log(i + ': Способы доп. заработка: ' + item);
				}
			});
		} else {
			console.log('Неправильно! Попробуйте еще раз.');
			appData.chooseIncome();
		}	
		
	}
};
//appData.chooseIncome();

for(let key in appData) {
	console.log('Наша программа включает в себя данные: ' + key);
}

