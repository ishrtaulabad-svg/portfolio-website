// Select Elements
let settingBtn = document.getElementById('Setting');
let resetBtn = document.getElementById('Reset');
let Btn1 = document.querySelector('.btn1');
let Btn2 = document.querySelector('.btn2');
let counterDisplay = document.getElementById('counterDisplay');

let counter = 0;

// Function to update counter display
function updateDisplay() {
    counterDisplay.textContent = counter;
}

// Settings Button: Toggle Dark/Light Mode
settingBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

// Reset Button: Reset Counter & Mode
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
    document.body.classList.remove("light");
});

// Plus Button: Increase Counter
Btn2.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

// Minus Button: Decrease Counter (min 0)
Btn1.addEventListener('click', () => {
    if(counter > 0){
        counter--;
    }
    updateDisplay();
});
