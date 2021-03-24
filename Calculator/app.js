let output=document.querySelector('#output');
let btns=document.querySelectorAll('button');
let screenVal='';
btns.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    let btnTxt=e.target.innerText;
    //console.log(btnTxt)
    if(btnTxt=='C'){
        screenVal='';
        output.value=screenVal;
    }else if(btnTxt=='='){
        output.value=eval(screenVal);
    }else{
        screenVal+=btnTxt;
        output.value=screenVal;
    }
  }) 
})