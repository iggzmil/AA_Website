/**
 * Auto Acoustics Smooth Scroll
 * This file contains custom smooth scrolling functionality for the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all contact buttons
    const contactButtons = document.querySelectorAll('a[href="#contact-section"]');

    // Function to handle smooth scrolling
    function smoothScrollToContact(e) {
        e.preventDefault();

        // Get the target section
        const targetSection = document.getElementById('contact-section');

        if (targetSection) {
            // Get the button that was clicked
            const button = e.currentTarget;

            // Calculate scroll position (slightly above the element to account for fixed header)
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Smooth scroll to the target section
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Reset button color after click
            setTimeout(function() {
                // Check if button exists and has a style property before setting styles
                if (button && button.style) {
                    button.style.backgroundColor = '#db2d2e';
                    button.style.color = '#ffffff';
                }
            }, 300);
        }
    }

    // Add click event listener to each button
    contactButtons.forEach(function(button) {
        // Remove any existing event listeners first
        button.removeEventListener('click', smoothScrollToContact);

        // Add the event listener
        button.addEventListener('click', smoothScrollToContact);
    });

    // Also handle any buttons that might be added dynamically
    document.addEventListener('click', function(e) {
        // Find the closest anchor tag (handles clicks on child elements of the anchor)
        const anchor = e.target.closest('a[href="#contact-section"]');
        if (anchor) {
            e.preventDefault();

            // Create a new event with the anchor as the currentTarget
            const newEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });

            // Set the currentTarget property
            Object.defineProperty(newEvent, 'currentTarget', {
                value: anchor,
                writable: false
            });

            // Call the smooth scroll function with the new event
            smoothScrollToContact(newEvent);
        }
    });
});
