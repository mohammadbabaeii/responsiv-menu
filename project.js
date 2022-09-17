
const menuBtn=document.querySelector('#menu-btn');
const responsiveMenu=document.querySelector('.responsive-menu');


menuBtn.addEventListener('click',function(){
    responsiveMenu.classList.toggle('show');
  
})