/**
 * Auto Acoustics Image Zoom
 * This file contains the functionality for zooming images in the "Our Work in Action" section
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Image zoom script loaded");

    // Create overlay element for zoomed images
    const overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';

    // Create image element for the overlay
    const overlayImg = document.createElement('img');
    overlay.appendChild(overlayImg);

    // Create close button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'zoom-close';
    closeBtn.innerHTML = '&times;';
    overlay.appendChild(closeBtn);

    // Add overlay to the body
    document.body.appendChild(overlay);

    // Function to initialize zoom containers
    function initializeZoomContainers() {
        console.log("Initializing zoom containers");

        // Get all car images in the "Our Work in Action" section
        const carImages = document.querySelectorAll('.car-listing-sidebar .car-image');
        console.log("Found " + carImages.length + " car images");

        // Add zoom container to each car image
        carImages.forEach(function(carImage, index) {
            // Get the image element
            const img = carImage.querySelector('img');
            if (!img) {
                console.log("No image found in car image " + index);
                return;
            }

            // Check if this image already has a zoom container
            if (img.parentNode.classList.contains('zoom-container')) {
                console.log("Image " + index + " already has a zoom container");
                return;
            }

            console.log("Adding zoom container to image " + index);

            // Create zoom container
            const zoomContainer = document.createElement('div');
            zoomContainer.className = 'zoom-container';

            // Move the image into the zoom container
            img.parentNode.insertBefore(zoomContainer, img);
            zoomContainer.appendChild(img);

            // Add click event to zoom container
            zoomContainer.addEventListener('click', function(e) {
                console.log("Image clicked");
                e.preventDefault();

                // Set the overlay image source
                overlayImg.src = img.src;

                // Show the overlay
                overlay.style.display = 'flex';

                // Prevent body scrolling
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Initialize zoom containers
    initializeZoomContainers();

    // Re-initialize after a short delay to catch any images that might be added dynamically
    setTimeout(initializeZoomContainers, 500);

    // Close overlay when clicking on it
    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Close overlay when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Prevent the close button from closing the overlay when clicked
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });
});
