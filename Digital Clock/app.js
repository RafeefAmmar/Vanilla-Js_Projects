const clock=()=>{
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let second=date.getSeconds();
    let currentDay=date.getDay();
    let year=date.getFullYear();
    let timeFormat='AM';

    if(hours>12){
        hours=hours-12;
        timeFormat='PM'
    }else if(hours==0){
        hours=12;
    }
    else{
        timeFormat='AM'
    }

    if(currentDay==6){
        currentDay='Friday'
    }else if(currentDay==5){
        currentDay='Thursday'
    }
    else if(currentDay==4){
        currentDay='Wednesday'
    }else if(currentDay==3){
        currentDay='Tuesday'
    }else if(currentDay==2){
        currentDay='Monday'
    }else if(currentDay==1){
        currentDay='Sunday'
    }else if(currentDay==0){
        currentDay='Saturday'
    }

    hours=hours<10?`0${hours}`:hours;
    minutes=minutes<10?`0${minutes}`:minutes;
    second=second<10?`0${second}`:second;



    document.querySelector('#time').innerHTML=`${hours} : ${minutes} : ${second}`;
    document.querySelector('#format').innerHTML=timeFormat;
    document.querySelector('#date').innerHTML=`Today is : ${currentDay} and ${year}`;
    setInterval(clock,1000);
}

clock();