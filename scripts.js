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
   NAVIGATION HELPERS
   ============================================================================ */

// Navigate to URL when clicking on clickable containers
function navigateToURL(url) {
    window.location.href = url;
}
