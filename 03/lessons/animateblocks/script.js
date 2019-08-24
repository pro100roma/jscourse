// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
// 	console.log('Hello World');
// }

// let timerId = setTimeout(function log() {
// 	console.log('Hello');
// 	setTimeout(log, 3000);
// });

let btn = document.querySelector('.btn'),
	elem = document.querySelector('.box');

function myAnimation() {
	let pos = 0;

	let id = setInterval(frame, 10);
	function frame() {
		if(pos == 200) {
			clearInterval();
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
	btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(e) {
	//e.target.classList.contains('first')
	//e.target.tagName('BUTTON')
	if(e.target && e.target.matches('button.first')) {
		console.log('Hello');
	}
});
