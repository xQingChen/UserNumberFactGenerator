// Reference button, number input, and fact element paragraph. 
let generateButton = document.getElementById('generateButton');
let numberInput = document.getElementById('numberInput');
let factElement = document.getElementById('fact');

// Use an event listener for generateButton when clicked. 
// We are going to make a userInput variable to convert numberInput into an integer. 
// We will check using an if statement to see if the number is between 1 to 100. We are going to return the value and then use it. 
// Then we are going to fetch from numbersapi using our userInput number integer variable. 
generateButton.addEventListener('click', () => {
  let userInput = parseInt(numberInput.value);
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  fetch(`http://numbersapi.com/${userInput}`)
    .then(response => response.text())
    .then(fact => {
      factElement.textContent = fact;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});