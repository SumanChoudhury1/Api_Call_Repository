
const accoedians = document.querySelector('.accordian');

accoedians.forEach(accordian =>{
   const icon = accordian.querySelector('.icon');
   const answer =accordian.querySelector('.answer');

   accordian.addEventListener('click',()=>{
   if(icon.classList.contains('active')){
      icon.classList.removel('active');
      answer.style.maxHeight = null;
   }else{
    icon.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight +'px';
   }
   });
 });


