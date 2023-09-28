// Extract button elements
const inputCheckbox = document.getElementById("theme-checkbox")
const buttonCircle = document.querySelector(".theme-switcher-circle")

// Extract body
const body = document.body

// Detect theme changes
inputCheckbox.addEventListener("click", function() {
    // Move the circle inside the button left or right
    buttonCircle.classList.toggle("dark")
    // Change theme
    body.classList.toggle("dark")
});