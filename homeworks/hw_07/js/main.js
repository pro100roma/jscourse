'use strict'

let startBtn = document.getElementById('start'),
    rightBlocks = document.querySelectorAll('.result-table div[class *= value]'),
    expensesItems = document.querySelectorAll('input.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    dayBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItems = document.querySelectorAll('input.optionalexpenses-item'),
    income = document.querySelector('.choose-income'),
    savingsCheckbox = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


console.log(dayBudgetBtn);
    

