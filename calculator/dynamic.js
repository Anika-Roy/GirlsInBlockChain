document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.number, .operator, .decimal');
    const equalButton = document.querySelector('.equal');
    const clearButton = document.querySelector('.clear');
    const backButton = document.querySelector('.back');

    // Add event listeners to buttons
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        display.value += button.innerText;
      });
    });

    equalButton.addEventListener('click', () => {
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    });

    clearButton.addEventListener('click', () => {
      display.value = '';
    });

    backButton.addEventListener('click', () => {
      display.value = display.value.slice(0, -1);
    });
  });