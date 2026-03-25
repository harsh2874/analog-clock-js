let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();
    //getting hours, minutes and seconds from date object
    let hh = date.getHours();    //360/12 = 30
    let mm = date.getMinutes();  //360/60 = 6
    let ss = date.getSeconds();  //360/60 = 6

    let hRotation = 30*hh + mm/2; //hour hand rotation
let mRotation = 6*mm; //minute hand rotation
let sRotation = 6*ss; //second hand rotation

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

/* setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds). It will continue calling the function until clearInterval() is called, or the window is closed. It is always run after the specified time, so if you set it to 1000 milliseconds, the function will be called after every 1 second.it is different than setTimeout() method which calls a function or evaluates an expression after a specified number of milliseconds, but only once. The setInterval() method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval(). */
setInterval(() => {displayTime()},1000);