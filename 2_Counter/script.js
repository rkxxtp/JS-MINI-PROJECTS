let totalCount = 0, incrementClicks = 0, decrementClicks = 0;

const countDisplay = document.getElementById("count");
const incClickDisplay = document.getElementById("incCount");
const decClickDisplay = document.getElementById("decCount");

function inc() {
    totalCount++;
    if (incrementClicks >= 10) {
        incrementClicks = 0;
    } else {
        incrementClicks++;
    }
    updateDisplay();
}

function dec() {
    if (totalCount > 0) totalCount--;
    
    if (decrementClicks >= 10) {
        decrementClicks = 0;
    } else {
        decrementClicks++;
    }
    updateDisplay();
}

function updateDisplay() {
    countDisplay.textContent = totalCount;
    incClickDisplay.textContent = incrementClicks;
    decClickDisplay.textContent = decrementClicks;
}