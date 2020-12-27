document.querySelector("button").addEventListener("click", function() {

    const startingMinutes = 0.1;
    let time = startingMinutes * 60;
    
    const countDownOne = document.getElementById('timerOne');
    
    setInterval(updateCountdown, 1000);
    
    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        countDownOne.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }
    

    });


