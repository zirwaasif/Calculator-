function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const expression = document.getElementById("display").value;
  try {
    const result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// Function to handle keyboard inputs
function handleKeyboardInput(event) {
  const key = event.key;
  const validKeys = /[0-9+\-*/.=]|Enter|Backspace|Delete/;

  if (!validKeys.test(key)) {
    return;
  }

  event.preventDefault(); // Prevent default action of the key

  if (key === "Enter") {
    calculate(); // If Enter key is pressed, calculate the result
  } else if (key === "Backspace" || key === "Delete") {
    clearDisplay(); // If Backspace or Delete key is pressed, clear the display
  } else {
    appendToDisplay(key); // Otherwise, append the pressed key to the display
  }
}

// Add event listener for keyboard inputs
document.addEventListener("keydown", handleKeyboardInput);