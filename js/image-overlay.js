/**
 * Add overlay to all car images in the "Our Work in Action" section
 * This version ensures compatibility with the click-to-zoom functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log("Image overlay script loaded");

    // Function to add overlays
    function addOverlays() {
        console.log("Adding overlays to images");

        // Find all car images that don't already have the date overlay
        const carImages = document.querySelectorAll('.car-listing-sidebar .car-image:not(:has(.date))');
        console.log("Found " + carImages.length + " car images without overlays");

        // Add the date overlay to each car-image
        carImages.forEach(function(carImage, index) {
            console.log("Adding overlay to image " + index);

            // Create the date div
            const dateDiv = document.createElement('div');
            dateDiv.className = 'date';

            // Create the span inside the date div
            const span = document.createElement('span');
            span.textContent = 'Auto Acoustics';

            // Append the span to the date div
            dateDiv.appendChild(span);

            // Append the date div to the car-image
            carImage.appendChild(dateDiv);
        });
    }

    // Wait for the zoom containers to be created first
    setTimeout(addOverlays, 600);

    // Add overlays again after a longer delay to catch any that might have been missed
    setTimeout(addOverlays, 1200);
});
