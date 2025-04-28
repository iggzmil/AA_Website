/**
 * iOS Orientation Change Fix
 * This script fixes background image issues when rotating from portrait to landscape on iOS devices
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isIOS) {
        // Get all parallax sections
        const parallaxSections = document.querySelectorAll('.inner-intro.bg-1, .inner-intro.bg-custom-divider, .inner-intro.bg-premium-audio, .inner-intro.bg-work-action, .inner-intro.bg-testimonial-custom');
        
        // Function to refresh background images on orientation change
        function refreshBackgrounds() {
            parallaxSections.forEach(function(section) {
                // Force a repaint by temporarily changing the display
                const originalDisplay = section.style.display;
                section.style.display = 'none';
                
                // This forces the browser to recalculate and repaint
                void section.offsetHeight;
                
                // Restore the original display
                section.style.display = originalDisplay;
                
                // Ensure the background is visible
                if (section.classList.contains('bg-1')) {
                    section.style.backgroundImage = 'url(images/bg/01.jpg)';
                } else if (section.classList.contains('bg-custom-divider')) {
                    section.style.backgroundImage = 'url(images/bg/03.png)';
                } else if (section.classList.contains('bg-premium-audio')) {
                    section.style.backgroundImage = 'url(images/bg/4.jpg)';
                } else if (section.classList.contains('bg-work-action')) {
                    section.style.backgroundImage = 'url(images/bg/002.jpg)';
                } else if (section.classList.contains('bg-testimonial-custom')) {
                    section.style.backgroundImage = 'url(images/bg/03.jpg)';
                }
            });
        }
        
        // Listen for orientation changes
        window.addEventListener('orientationchange', function() {
            // Delay the refresh to ensure it happens after the orientation change is complete
            setTimeout(refreshBackgrounds, 100);
        });
        
        // Also refresh on page load
        refreshBackgrounds();
    }
});
