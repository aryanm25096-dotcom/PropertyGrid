// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", function() {

    // --- Task 1: Homepage Search Redirect ---
    // Find the search form on the homepage
    const heroSearchForm = document.querySelector(".hero-search-form");

    // Check if the form actually exists on this page
    if (heroSearchForm) {
        
        // Add an event listener for when the form is "submitted"
        heroSearchForm.addEventListener("submit", function(event) {
            
            // 1. Prevent the form from actually submitting (which reloads the page)
            event.preventDefault(); 

            // 2. Redirect the user to the listings page
            console.log("Form submitted! Redirecting to listings.html...");
            window.location.href = "listings.html";
        });
    }

    // --- Task 2: Contact Form Validation ---
    
    // Select the form and the elements we need to check
    const contactForm = document.querySelector("#contact-form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");

    // Select the error message spans
    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");

    // Check if we are on the contact page (if contactForm exists)
    if (contactForm) {

        contactForm.addEventListener("submit", function(event) {
            // Stop the form from submitting
            event.preventDefault(); 
            
            let isValid = true; // Assume the form is valid to start

            // --- Reset errors ---
            // Remove red borders
            nameInput.classList.remove("input-error");
            emailInput.classList.remove("input-error");
            // Hide error messages
            nameError.classList.remove("show");
            emailError.classList.remove("show");

            // --- Validate Name ---
            if (nameInput.value.trim() === "") {
                nameError.textContent = "Name is required";
                nameError.classList.add("show");
                nameInput.classList.add("input-error");
                isValid = false;
            }

            // --- Validate Email ---
            if (emailInput.value.trim() === "") {
                emailError.textContent = "Email is required";
                emailError.classList.add("show");
                emailInput.classList.add("input-error");
                isValid = false;
            } else if (!emailInput.value.includes("@")) { // Simple email check
                emailError.textContent = "Please enter a valid email address";
                emailError.classList.add("show");
                emailInput.classList.add("input-error");
                isValid = false;
            }

            // --- If All is Valid ---
            if (isValid) {
                console.log("Form is valid! Submitting...");
                // In a real project, you'd send this data to a server.
                // For now, we'll just log it and reset the form.
                alert("Thank you for your message!");
                contactForm.reset(); // Clear the form
            }
        });
    }

// This is the closing brace for the DOMContentLoaded listener
});
// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", function() {

    // --- Task 1: Homepage Search Redirect ---
    const heroSearchForm = document.querySelector(".hero-search-form");
    if (heroSearchForm) {
        // ... (your existing code for Task 1) ...
    }


    // --- Task 2: Contact Form Validation ---
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        // ... (your existing code for Task 2) ...
    }


    // --- Task 3: Property Details Image Gallery ---
    
    // Select the main image and all the thumbnail images
    const mainImage = document.querySelector("#main-property-image");
    const thumbnails = document.querySelectorAll(".thumbnail-img");

    // Check if we are on the details page (if mainImage exists)
    if (mainImage && thumbnails.length > 0) {
        
        // Loop through every thumbnail image
        thumbnails.forEach(function(thumbnail) {
            
            // Add a click event listener to each one
            thumbnail.addEventListener("click", function() {
                
                // 1. Get the 'src' (image URL) of the thumbnail that was clicked
                const newImageSrc = thumbnail.src;
                
                // 2. Set the 'src' of the main image to that URL
                mainImage.src = newImageSrc;
            });
        });
    }

}); // <-- This is the final closing bracket
