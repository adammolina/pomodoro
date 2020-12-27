document.querySelector("button").addEventListener("click", function() {

//First Timer variables
    const startingMinutes = 0.2;
    let time = startingMinutes * 60;
    const countDownOne = document.getElementById('timerOne');

//Second Timer variables
    const startingMinutesTwo = 0.2;
    let timeTwo = startingMinutesTwo * 60;
    const countDownTwo = document.getElementById('timerTwo');

    
//First Timer
    setInterval(updateCountdown, 1000);//runs the code every second
    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        countDownOne.innerHTML = `${minutes}: ${seconds}`;
        time !== 0 ? time-- : time;;
        }

//Second Timer

setTimeout(delayTimerTwo, 12000); //delays the code starting for the first 50 minutes

    function delayTimerTwo() {
    setInterval(updateCountdownTwo, 1000); //runs the code every second

    function updateCountdownTwo() {
        const minutesTwo = Math.floor(timeTwo / 60);
        let secondsTwo = timeTwo % 60;

        secondsTwo = secondsTwo < 10 ? '0' + secondsTwo : secondsTwo;
    
        countDownTwo.innerHTML = `${minutesTwo}: ${secondsTwo}`;
        timeTwo !== 0 ? timeTwo-- : timeTwo;;
        return outputTwo;
    }
}

});

