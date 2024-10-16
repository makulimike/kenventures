
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

// auto increament numbers

const items =document.querySelectorAll('.number');
const updateCount = (el)=>{
    const value =parseInt(el.dataset.value);
    const increament = Math.ceil(value/1000)



    
    let intialValue = 0;
    const increaseCount= setInterval(()=>{
        intialValue += increament;

        if(intialValue > value){
            el.innerText   = `${value}+`;
            clearInterval(increaseCount);
            return;
        }
        el.innerText = `${intialValue}+`;
    })

};

items.forEach((item)=>{
    updateCount(item);
})