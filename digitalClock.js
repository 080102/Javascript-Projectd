let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let red = document.getElementById('red');
let amber = document.getElementById('amber');
let green = document.getElementById('green');
let day = document.getElementById('day')
let sec = 0;
let min=0;
let hrs = 0;
let dd = 'AM'
green.addEventListener('click',function(){
    setInterval(function () {
        sec++;
        console.log(sec);
        seconds.innerHTML = sec;
        if(sec >= 59){
            sec=0;
            min++;
            minutes.innerHTML = min;
        }
        if(min>= 59){
            min=0;
            hrs++;
            hours.innerHTML = hrs;
        }
        if(hrs>=12){
            day.innerHTML = 'PM';
        }
        if (hrs >= 23){
            hrs=0;
            hours.innerHTML = hrs;
            day.innerHTML = 'AM'
        }

    },-1000)
    
})