// Extract form
const form = document.getElementById("form")
// Extract input
const inputElement = document.getElementById("email")
// Extract error message
const errorMessage = document.getElementById("error")

// Add event listener for form
form.addEventListener("submit", function(ev) {
    // Extract email
    const inputEmail = inputElement.value
    // Create regex
    const emailPattern = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/)
    // Verify email format
    if(!emailPattern.test(inputEmail)) {
        // Display error
        inputElement.classList.add("error")
        errorMessage.classList.add("true")
        // Pass default form action
        ev.preventDefault()
    }
})