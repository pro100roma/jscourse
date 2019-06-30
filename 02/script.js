'use strict'

let btn = document.querySelectorAll('button'),
	wrap = document.querySelector('.wrapper'),
	link = document.querySelector('a');

// btn[0].onclick = function() {
// 	alert('You are click first btn');
// };

// btn[0].addEventListener('click', function(e) {
// 	// let target = event.target;
// 	// target.style.display = 'none';
// 	// console.log(event);
// 	console.log('Event has been: ' + e.type + ' on element ' + e.target);
// });

// wrap.addEventListener('click', function(e) {
// 	console.log('Event has been: ' + e.type + ' on element ' + e.target);
// });

link.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('Event has been: ' + e.type + ' on element ' + e.target);
});

btn.forEach(function(item) {
	item.addEventListener('mouseleave', function() {
		console.log('Exited!');
	});
});


// btn[0].addEventListener('mouseenter', function() {
// 	alert('You hovered on first btn');
// });
