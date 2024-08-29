// Function to handle button press
function pressKey(key) {
    const display = document.getElementById('display');
    display.value += key;
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to handle backspace
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Handle numbers and operators
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        pressKey(key);
    }

    // Handle Enter key for calculation
    if (key === 'Enter') {
        calculateResult();
    }

    // Handle Backspace key
    if (key === 'Backspace') {
        backspace();
    }

    // Handle 'C' key to clear display
    if (key.toUpperCase() === 'C') {
        clearDisplay();
    }
});