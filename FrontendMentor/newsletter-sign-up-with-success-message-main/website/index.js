// Extract images
const desktopImage = document.getElementById("desktop")
const mobileImage = document.getElementById("phone")

function uploadProperImage() {
    // Extract window width
    const windowInnerWidth  = window.innerWidth;
    // Decide what image to upload
    if (windowInnerWidth <= 1000) {
        desktopImage.classList.add("hide")
    }
    else {
        mobileImage.classList.add("hide")
    }
}
// Upload proper image at the begining
uploadProperImage()


// Upload proper image when resizing
// Add event listener for webpage
window.addEventListener("resize", function() {
    // Extract current window width
    let currentWindowInnerWidth  = window.innerWidth;
    // Decide what image to upload
    if (currentWindowInnerWidth <= 1000) {
        if (!desktopImage.classList.contains("hide")) {
            desktopImage.classList.add("hide")
            mobileImage.classList.remove("hide")
        }
    }
    else {
        if (!mobileImage.classList.contains("hide")) {
            mobileImage.classList.add("hide")
            desktopImage.classList.remove("hide")
        }
    }
});


// Verify email format and act accordingly
// Extract form
const form = document.getElementById("form")
// Add event listener for form
form.addEventListener("submit", function(ev) {
    // Extract input
    const inputElement = document.getElementById("email")
    // Extract email
    const inputEmail = inputElement.value
    // Extract error message
    const errorMessage = document.getElementById("error")
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
});