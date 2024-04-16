let clicked = false;

window.addEventListener("click", function () {
    if (clicked) return;

    clicked = true;

    (function () {
        const container = document.querySelector(".lights");
        const lights = document.querySelectorAll(".light");
        const time = document.querySelector(".reaction");
        const delay = (min = 1, max = 2) => Math.floor((Math.random() * (max - min) + min) * 1000);
        const turnON = (i) => lights[i].classList.add("on");
        const shortBeep = document.querySelector(".short-beep");
        const longBeep = document.querySelector(".long-beep");
        let i = 0;
    
        function removeLights(config){
            // lights.forEach(l => l.classList.remove("on"));
            container.classList.add("go")
            
            if (typeof config.onComplete === "function") {
                config.onComplete();
            }
        };
    
    
        // Need refactoring
        let startTime;
        let intervalId;
    
        window.addEventListener("click", function () {
            stopTimer();
        })
    
        function startTimer() {
            startTime = new Date();
            intervalId = setInterval(updateTimer, 1); // Update the timer every 1 millisecond
        }
        
        function stopTimer() {
            clearInterval(intervalId);
        }
        
        function updateTimer() {
            const currentTime = new Date();
            const elapsedTime = currentTime - startTime;
            const formattedTime = formatTime(elapsedTime);
            time.textContent = formattedTime;
            console.log(formattedTime);
        }
        
        function formatTime(milliseconds) {
            const minutes = Math.floor(milliseconds / (60 * 1000));
            const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
            const millisecondsPart = (milliseconds % 1000).toString().padStart(3, '0');
            return `${seconds}.${millisecondsPart}`;
        }
    
        // audio.pause();
    
        // function startAudio() {
        //     audio.play();
        // }
    
        // function stopAudio() {
        //     audio.pause();
        //     audio.currentTime = 0;
        // }
    
        // function resetAudio() {
        //     stopAudio(); // Stop the audio
        //     audio.currentTime = 0; // Set playback position to the beginning
        // }
    
        setTimeout(function(){
            // Light 1
            turnON(i);
            shortBeep.play();
    
            i++;
            
            
            setTimeout(function(){
                // Light 1
                turnON(i);
    
                shortBeep.currentTime = 0;
                shortBeep.play();
    
                i++;
                
                
                setTimeout(function(){
                    // Light 1
                    turnON(i);
    
                    shortBeep.currentTime = 0;
                    shortBeep.play();
    
                    i++;
                    
                    
                    
                    
                    setTimeout(function(){
                        // Light 1
                        turnON(i);
    
                        shortBeep.currentTime = 0;
                        shortBeep.play();
    
                        i++;
                        
    
                        setTimeout(function () {
                            turnON(i);
                            shortBeep.currentTime = 0;
                            shortBeep.play();
                            
    
                            setTimeout(function () {
                                removeLights({
                                    onComplete: function () {
                                        longBeep.play();
                                        startTimer();
                                    }
                                })
        
                            }, delay())
    
                            
                        }, delay())
                
                
                    }, delay())
            
            
                }, delay())
        
        
            }, delay())
    
    
        }, delay())
    })();

 })