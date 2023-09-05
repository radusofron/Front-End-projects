// Extract buttons
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")

// Extract points
const points = document.querySelectorAll(".point")

// Extract apps & their testimonials
const logos = document.querySelectorAll(".logo")
const text = document.querySelectorAll(".text")

leftArrow.addEventListener("click", function(){
    // Points animation
    for(let index = 1; index < points.length; index++) {
        if (points[index].classList.contains("active")) {
            // Hide current app
            points[index].classList.remove("active")
            logos[index].classList.remove("active")
            text[index].classList.remove("active")
            // Show next app
            points[index - 1].classList.add("active")
            logos[index - 1].classList.add("active")
            text[index - 1].classList.add("active")
            break;
        }
    }
});

rightArrow.addEventListener("click", function() {
    // Points animation
    for(let index = 0; index < points.length - 1; index++) {
        if (points[index].classList.contains("active")) {
            // Hide current app
            points[index].classList.remove("active")
            logos[index].classList.remove("active")
            text[index].classList.remove("active")
            // Show next app
            points[index + 1].classList.add("active")
            logos[index + 1].classList.add("active")
            text[index + 1].classList.add("active")
            break;
        }
    }
});