console.log("JavaScript file is connected!");
function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
  }
// Get the current year and full date
const currentYear = new Date().getFullYear();
const fullDate = new Date().toDateString();

// Target the footer element
const footer = document.getElementById('footer');

// Set the footer content
footer.innerHTML = `&copy; Shaza Kayed, ${currentYear}`;

// Log the full date to the console
console.log(`Today's date is: ${fullDate}`);
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the current hour
    const currentHour = new Date().getHours();
  
    // Select the greeting element
    const greetingElement = document.getElementById('greeting');
  
    // Determine the greeting and apply a style class
    if (currentHour < 12) {
      greetingElement.textContent = "Good morning!";
      greetingElement.classList.add('morning');
    } else if (currentHour >= 12 && currentHour <= 17) {
      greetingElement.textContent = "Good afternoon!";
      greetingElement.classList.add('afternoon');
    } else {
      greetingElement.textContent = "Good evening!";
      greetingElement.classList.add('evening');
    }
  });
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the button by its ID
    const alertButton = document.getElementById('btn-alert');
  
    // Add a click event listener
    alertButton.addEventListener('click', () => {
      // Display an alert message
      alert('Hello world!');
    });
  });
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the button by its ID
    const alertButton = document.getElementById('btn-alert');
  
    // Change the text on mouse hover
    alertButton.onmouseover = () => {
      alertButton.innerText = 'Hovered!';
    };
  
    // Revert the text on mouse leave
    alertButton.onmouseout = () => {
      alertButton.innerText = 'Click Me';
    };
  
    // Add a click event to display an alert
    alertButton.addEventListener('click', () => {
      alert('Hello world!');
    });
  });
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the ordered list by its ID
    const numbersList = document.getElementById('numbers');
  
    // Loop through numbers 1 to 12
    for (let i = 1; i <= 12; i++) {
      // Create a new <li> element
      const listItem = document.createElement('li');
  
      // Set the text content based on whether the number is even or odd
      listItem.textContent = i % 2 === 0 ? `Even (${i})` : `Odd (${i})`;
  
      // Append the <li> to the ordered list
      numbersList.appendChild(listItem);
    }
  });
        