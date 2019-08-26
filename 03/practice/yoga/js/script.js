window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    var hideTabContent = (a) => {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    var showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(e) {
        let target = e.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer
    let deadline = '2019-09-22';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60) % 24),
            days = Math.floor(t/1000/60/60/24);
        
        return {
            'total' : t,
            'hours' : hours,
            'days' : days,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            clockSepar = timer.querySelector('.clock-sep'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);

            if(t.days > 0) {
                if(String(t.days).length == 1) {
                    days.textContent = `0${t.days}`;
                } else {
                    days.textContent = t.days;
                }
                clockSepar.classList.remove('hidden');
                clockSepar.classList.add('showed');
            } else {
                clockSepar.classList.remove('showed');
                clockSepar.classList.add('hidden');
            }
            

            if(String(t.hours).length == 1) {
                hours.textContent = `0${t.hours}`;
            } else {
                hours.textContent = t.hours;
            }

            if(String(t.minutes).length == 1) {
                minutes.textContent = `0${t.minutes}`;
            } else {
                minutes.textContent = t.minutes;
            }

            if(String(t.seconds).length == 1) {
                seconds.textContent = `0${t.seconds}`;
            } else {
                seconds.textContent = t.seconds;
            }
            

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    };

    setClock('timer', deadline);

    
    //Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabsWrap = document.querySelector('.info'),
        tabsMore = document.querySelectorAll('.description-btn');
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = 'visible';
    });

    tabsWrap.addEventListener('click', function(e) {
        let target = e.target;
        if(target && target.classList.contains('description-btn')) {
            for(let i = 0; i < tabsMore.length; i++) {
                if(target == tabsMore[i]) {
                    overlay.style.display = 'block';
                    this.classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    });

});