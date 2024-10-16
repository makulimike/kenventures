window.addEventListener('scroll',reveal);
function reveal(){
   //alert('welcome home');
   var reveals= document.querySelectorAll('section');
   for(var i = 0 ; i< reveals.length ; i++){
       var windowheight= window.innerHeight;
       var revealtop= reveals[i].getBoundingClientRect().top;
       var revealpoint= 150;
       if(revealtop < windowheight - revealpoint){
           reveals[i].classList.add('activetab');
       }else{
           reveals[i].classList.remove('activetab');
       }
   }
}