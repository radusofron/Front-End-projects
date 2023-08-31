// Extract images
const images = document.querySelectorAll(".clickable-image")

// Extract checked overlaps
const checks = document.querySelectorAll(".checked-interest")

for(let index = 0; index < images.length; index++) {
    images[index].addEventListener("click", function() {
        checks[index].classList.toggle("active")
    });
}

checks.forEach(check => {
    check.addEventListener("click", function() {
        check.classList.toggle("active")
    });
});