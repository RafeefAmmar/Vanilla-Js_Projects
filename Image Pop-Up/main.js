"use strict";
alert('Hit the images to see the preview');
let containerImg=document.querySelector('.container');
let allImages=containerImg.querySelectorAll('img');
let modal=document.querySelector('#modal');
let modalImg=document.querySelector('#modalImg');
let closeBtn=document.querySelector('#close');
let caption=document.querySelector('.caption');
let nxt=document.querySelector('#nxt');
let prev=document.querySelector('#prev');
let imgArray=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];
let imgCount=0;
// let imgCap=document.getAttribute('alt');
// console.log(imgCap)

allImages.forEach((allImage) =>{
    //  console.log(allImage)
 allImage.addEventListener('click', ()=>{
    modal.classList.add('openModal');
    
    modalImg.src=allImage.src;
    caption.innerText=allImage.alt;
    


 })
 
})

nxt.onclick=()=>{
    imgCount++;
    caption.innerText='';
    
    if(imgCount>=imgArray.length){
        imgCount=0;
        modalImg.src=imgArray[imgCount];
        
    }else{
        modalImg.src=imgArray[imgCount];
        
    }
}



prev.onclick=()=>{
    imgCount--;
    if(imgCount<=0){
        imgCount=imgArray.length-1;
        modalImg.src=imgArray[imgCount];

    }else{
        modalImg.src=imgArray[imgCount];
    }
}
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('openModal');
})

