let clicks = [];
let min_clicks = 10;

document.addEventListener('DOMContentLoaded', function() {
let tapButtonVariable = document.getElementById("tapButton");
tapButtonVariable.addEventListener("click", getBPM);
});

function getBPM() {
    let date_right_now = Date.now();
    clicks.push(date_right_now);

    if (clicks.length >= min_clicks) {
        let calculatedBPM = calculateBPMFromClicks(clicks);
        alert(`Your BPM is: ${calculatedBPM}`);
        clicks = [];
    }
}

function  calculateBPMFromClicks(clickTimestamps) {
    let totalIntervals = 0;

    for (let i = 1; i < clickTimestamps.length; i++) {
        let interval = clickTimestamps[i] - clickTimestamps[i - 1];
        totalIntervals += interval;
    }
    let  numIntervals = clickTimestamps.length - 1;
    let averageInterval = totalIntervals / numIntervals;
    return Math.round(60000 / averageInterval);
}
