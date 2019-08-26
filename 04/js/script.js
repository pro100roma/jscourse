// let options = {
// 	width: 1366,
// 	height: 768,
// 	background: 'red',
// 	font: {
// 		size: '16px',
// 		color: '#fff'
// 	}
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputUah = document.getElementById('uah'),
	inputUsd = document.getElementById('usd');

inputUah.addEventListener('input', () => {
	let request = new XMLHttpRequest();

	//request.open(method, url, async, login, pass);
	//request.open('GET', 'js/current.json');
	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	//Свойства метода XMLHttpRequest
	//status //404 ...
	//statusText
	//responseText / response
	//readyState

	

	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);

			inputUsd.value = inputUah.value / data.usd;
		} else {
			inputUsd.value = 'Something went wrong...';
		}
	});
});