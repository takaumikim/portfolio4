'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const closed = document.getElementById('closed');
  const closed1 = document.getElementById('closed1');
  const closed2 = document.getElementById('closed2');
  const closed3 = document.getElementById('closed3');
  const closed4 = document.getElementById('closed4');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  closed.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  closed1.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  closed2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  closed3.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  closed4.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}

