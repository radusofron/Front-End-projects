// Extract dropdown buttons
const features = document.getElementById("features")
const company = document.getElementById("company")

// Extract arrows
const featuresDown = document.getElementById("features-down")
const featuresUp = document.getElementById("features-up")
const companyDown = document.getElementById("company-down")
const companyUp = document.getElementById("company-up")

// Extract dropdown menus
const featuresMenu = document.querySelector(".features-list")
const companyMenu = document.querySelector(".company-list")

// Add functionality to dropdown menus
features.addEventListener("click", function() {
    // Display / hide
    featuresDown.classList.toggle("active")
    featuresUp.classList.toggle("active")
    featuresMenu.classList.toggle("active")
});
company.addEventListener("click", function() {
    // Display / hide
    companyDown.classList.toggle("active")
    companyUp.classList.toggle("active")
    companyMenu.classList.toggle("active")
});


// Extract mobile menu buttons and mobile navigation
const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close-menu")
const navigation = document.getElementById("nav")

// Add functionality to mobile navigation
menu.addEventListener("click", function(){
    navigation.classList.toggle("active")
});
closeMenu.addEventListener("click", function() {
    navigation.classList.toggle("active")
});
