
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

