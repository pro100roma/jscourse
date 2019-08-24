// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log('Hello ' + this.name);
// 	}
// }
// User.prototype.exit = function(name) {
// 	console.log('Пользователь ' + this.name + ' ушел.');
// }

// let ivan = new User('Ivan', 25),
// 	alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// let obj = {
// 	a : 20,
// 	b : 15,
// 	sum: function() {
// 		console.log(this);
// 		function showed() {
// 			console.log(this);
// 		}
// 		showed();
// 	}
// }
// obj.sum();

// let user = {
// 	name: 'John'
// }

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
// 	return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
	console.log(this);
	this.style.background = '#000';
	function showThis() {
		console.log(this);
	}
	showThis();
});


// Просто выхов функции - window/undefined
// Метод объекта - this = объект
// Конструктор (new) - this = новый созданный объект
// Указание конкретного контекста - call, apply, bind