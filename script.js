// ============================================
//  Unit 8.8 – The Date Object
// ============================================

// WARM-UP: Day Name
let now = new Date();
let dayNum = now.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];

document.getElementById("warmUpDate").innerHTML = days[dayNum];


// PART 1: Current Date Display
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

document.getElementById("myDate").innerHTML = month + "/" + day + "/" + year;


// PART 2: Elapsed Timer
let startTime = new Date().getTime();
let timerId = null;
let running = true;

function updateTimer() {
    let currentTime = new Date().getTime();
    let elapsedSeconds = (currentTime - startTime) / 1000;
    document.getElementById("myTimer").innerHTML = elapsedSeconds.toFixed(3);
}

// Start at 0.000
document.getElementById("myTimer").innerHTML = "0.000";
timerId = setInterval(updateTimer, 10);


// PART 3: Start/Stop Toggle Button
document.getElementById("myBtn").innerHTML = "Stop";

document.getElementById("myBtn").addEventListener("click", function () {
    if (running) {
        clearInterval(timerId);
        this.innerHTML = "Start";
        running = false;
    } else {
        startTime = new Date().getTime();
        timerId = setInterval(updateTimer, 10);
        this.innerHTML = "Stop";
        running = true;
        document.getElementById("myTimer").innerHTML = "0.000";
    }
});