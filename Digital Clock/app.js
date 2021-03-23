const clock=()=>{
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let second=date.getSeconds();
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

    hours=hours<10?`0${hours}`:hours;
    minutes=minutes<10?`0${minutes}`:minutes;
    second=second<10?`0${second}`:second;



    document.querySelector('#time').innerHTML=`${hours} : ${minutes} : ${second}`;
    document.querySelector('#format').innerHTML=timeFormat;
    setInterval(clock,1000);
}

clock();