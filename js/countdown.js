let cdHour = document.querySelector('.fc-hour');
let cdMinute = document.querySelector('.fc-minute');
let cdSecond = document.querySelector('.fc-second');

let hour = 0;
let minute = 1;
let second = 0;

let countdown = setInterval( () => {
    second--;
    if (second == -1 && minute != 0){
        second = 59;
        minute--;
    }
    else {
        if (minute == 0){
            if (second == -1){
                minute = 59;
                hour--;
                second = 59;
            }
            else
            if (hour == 0 && second ==0){
               refreshFlashSale();
                minute = 1;
                second = 0;
            }
        }
    }

    cdHour.textContent = hour;
    cdMinute.textContent = minute;
    cdSecond.textContent = second;
},1000);



