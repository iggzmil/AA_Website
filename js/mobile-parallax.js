/**
 * Mobile-friendly Parallax Effect
 * This script provides a parallax effect that works on all devices including iOS
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Get the testimonial sections by their specific IDs
    const section1 = document.getElementById('testimonial-parallax-1');
    const section2 = document.getElementById('testimonial-parallax-2');
    const testimonialSections = [section1, section2].filter(Boolean); // Filter out any null values

    if (testimonialSections.length > 0) {
        // If on iOS, enhance the first section and hide the second
        if (isIOS) {
            // Make sure the first section is visible and has proper height
            testimonialSections[0].style.minHeight = '350px';
            testimonialSections[0].style.height = '60vh';

            // If there's a second section, hide it on iOS
            if (testimonialSections.length > 1) {
                testimonialSections[1].style.display = 'none';
            }
        }

        // Add scroll-based parallax effect that works on all devices
        window.addEventListener('scroll', function() {
            // Only apply to the first section (which is visible on all devices)
            const section = testimonialSections[0];
            const scrollPosition = window.pageYOffset;
            const sectionPosition = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Check if the section is in the viewport
            if (scrollPosition + window.innerHeight > sectionPosition &&
                scrollPosition < sectionPosition + sectionHeight) {

                // Calculate parallax offset (slower movement for background)
                const yOffset = (scrollPosition - sectionPosition) * 0.4;

                // Apply the parallax effect using transform instead of background-position
                // This works better on mobile devices
                section.style.backgroundPosition = 'center calc(50% + ' + yOffset + 'px)';
            }
        });
    }
});
