'use strict'

let menuItems = document.querySelectorAll('.menu-item'),
    menuWrap = document.querySelector('.menu'),
    bodySel = document.querySelector('body'),
    title = document.getElementById('title'),
    titleStartInsPos = title.textContent.indexOf('технику'),
    newStr01 = title.textContent.substring(0, titleStartInsPos),
    newStr02 = title.textContent.substring(titleStartInsPos),
    fiveMenuPoint = document.createElement('li'),
    adv = document.querySelectorAll('.adv'),
    appleLoyalty = prompt('Как Вы относитесь к продукции Apple?', ''),
    applePrompt = document.getElementById('prompt');


fiveMenuPoint.classList.add('menu-item');
fiveMenuPoint.textContent ='Пятый пункт';

menuWrap.insertBefore(menuItems[2], menuItems[1]);
menuWrap.append(fiveMenuPoint);
bodySel.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = newStr01 + 'подлинную ' + newStr02;

adv.forEach(function(item, i, advArr) {
    advArr[i].remove();
});

applePrompt.textContent = appleLoyalty;





