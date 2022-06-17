
var currentNumberWrapper = document.getElementById("currentNumber");
var incrementButton = document.getElementById("incrementButton");
var decrementButton = document.getElementById("decrementButton");
var counter = document.getElementById("counter");
var currentNumber = 0;

incrementButton.addEventListener("click", function() {
    currentNumber = currentNumber + 1;  
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 10) incrementButton.disabled = true;
        decrementButton.disabled = false;
});

decrementButton.addEventListener("click", function() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber <= 0) decrementButton.disabled = true;
        incrementButton.disabled = false;
});
