/* ============================================================================
   THEME TOGGLE
   ============================================================================ */

// Initialize theme toggle on page load
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Apply saved theme
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Set checkbox state based on saved theme
    if (savedTheme === 'light') {
        themeToggleCheckbox.checked = true;
    }

    // Handle theme toggle changes
    themeToggleCheckbox.addEventListener('change', () => {
        const newTheme = themeToggleCheckbox.checked ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

/* ============================================================================
   SCROLL ANIMATIONS
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15 // Trigger animation when 15% of element is visible
    });

    // Observe elements for scroll animations
    const targets = document.querySelectorAll('.list-outer-container, .content-inner, .hero, .social-icons');
    targets.forEach(target => observer.observe(target));
});

/* ============================================================================
   IMAGE PRELOADING
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const images = document.images;
    const totalImages = images.length;
    let imagesLoaded = 0;

    // If no images, remove preload class immediately
    if (totalImages === 0) {
        document.body.classList.remove("preload");
        return;
    }

    // Track image loading
    const imageLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            document.body.classList.remove("preload");
        }
    };

    // Check each image
    for (let i = 0; i < totalImages; i++) {
        if (images[i].complete) {
            imageLoaded();
        } else {
            images[i].addEventListener('load', imageLoaded);
            images[i].addEventListener('error', imageLoaded); // Handle broken images
        }
    }
});

/* ============================================================================
   NAVIGATION HELPERS
   ============================================================================ */

// Navigate to URL when clicking on clickable containers
function navigateToURL(url) {
    window.location.href = url;
}
