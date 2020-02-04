'use strict';

let q = document.querySelector('.picture__view--col-2');
let w = document.querySelector('.picture__view--col-3');
let conteiner = document.querySelector('.picture);
let item = document.querySelector('.picture__item);

q.addEventlistener('click', () => {
    conteiner.classList.remove('picture-min');
    item.classList.remove('picture-min');
});

w.addEventlistener('click', () => {
    conteiner.classList.add('picture-min');
    item.classList.add('picture-min');
});

