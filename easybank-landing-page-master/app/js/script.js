const toggle = document.querySelector('#toggle');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const togbox = document.querySelector('#togbox'); //boxmenu
const body = document.querySelector('body');

toggle.addEventListener('click', function () { //hamburger clicked
    console.log('Stop touching me!');

    if (header.classList.contains('open')) { //close
        body.classList.remove('noscroll');
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        togbox.classList.add('maxmini');
        togbox.classList.remove('minimax');

        /* default anim
        togbox.classList.add('fade-out');
        togbox.classList.remove('fade-in');
        */

    } else {    // open
        body.classList.add('noscroll');
        overlay.classList.remove('hidden');
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        togbox.classList.remove('hidden');
        togbox.classList.remove('maxmini');
        togbox.classList.add('minimax');
        /* def anim
        togbox.classList.remove('fade-out');
        togbox.classList.add('fade-in');
        */
    }

});