// set the element to holding the result
const countdown=document.querySelector(".countdown");
let time=10;

// display the time by the element countdown.innerHTML=time--;

// callback nesting
setTimeout(()=>{
 countdown.innerHTML=time--;
    setTimeout(() => {
     countdown.innerHTML=time--;
        setTimeout(() => {
         countdown.innerHTML=time--;
            setTimeout(() => {
             countdown.innerHTML=time--;
                setTimeout(() => {
                 countdown.innerHTML=time--;
                    setTimeout(() => {
                     countdown.innerHTML=time--;
                        setTimeout(() => {
                         countdown.innerHTML=time--;
                            setTimeout(() => {
                             countdown.innerHTML=time--;
                                setTimeout(() => {
                                 countdown.innerHTML=time--;
                                    setTimeout(() => {
                                     countdown.innerHTML="happy independence day";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
},1000);