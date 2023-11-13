
// Theme toggle
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
    themeToggleCheckbox.addEventListener('change', () => {
        if (themeToggleCheckbox.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });
});

// Function to toggle theme and save preference
function toggleTheme() {
    let theme = document.body.getAttribute('data-theme');
    let newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Event listener for theme change
document.getElementById('theme-toggle-checkbox').addEventListener('change', toggleTheme);

// Function to apply saved theme on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
}

// Call applySavedTheme on page load
document.addEventListener('DOMContentLoaded', applySavedTheme);