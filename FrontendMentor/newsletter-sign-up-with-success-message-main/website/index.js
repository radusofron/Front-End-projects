// Extract button, form & add event listener
const submitButton = document.getElementById("submit")
const form = document.getElementById("form")
submitButton.addEventListener("click", function() {
    // Extract email
    const inputElement = document.getElementById("email")
    const inputEmail = inputElement.value
    // Create regex
    const emailPattern = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/)
    // Verify email format
    if(emailPattern.test(inputEmail)) {
        form.setAttribute("action", "success.html")
    }
})