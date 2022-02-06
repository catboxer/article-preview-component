const bioFooter = document.querySelector('.card__footer--bio');
const socialFooter = document.querySelector('.card__footer--social')
const shareButton = document.querySelector('.footer__icon')
const screenSize = document.documentElement.clientWidth || window.innerWidth;

  shareButton.addEventListener('click', ()=> {  
    socialFooter.classList.toggle('hidden');
    shareButton.classList.toggle('active');
  })


