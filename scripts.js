/* ============================================================================
   HEADER LOADER
   ============================================================================ */

// Load navigation header
function loadHeader() {
    const headerHTML = `
        <nav>
            <div class="home-link">
                <a href="index.html"><b>ABOUT</b></a>
            </div>
            <div class="spacer"></div>
            <div>
                <a href="projects.html"><b>PROJECTS</b></a>
            </div>
            <div>
                <a href="writing.html"><b>WRITING</b></a>
            </div>
            <div>
                <a href="bookshelf.html"><b>BOOKSHELF</b></a>
            </div>
            <div class="separator">|</div>
            <div class="theme-toggle-wrapper">
                <label class="theme-toggle" for="theme-toggle-checkbox">
                    <input type="checkbox" id="theme-toggle-checkbox" />
                    <div class="slider"></div>
                </label>
            </div>
        </nav>
    `;

    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = headerHTML;
    }
}

// Load header immediately when script is parsed
loadHeader();

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

/* ============================================================================
   SOCIAL ICONS LOADER
   ============================================================================ */

// Load social icons with optional quote
function loadSocialIcons(quote = null, author = null) {
    const iconsHTML = `
        <div class="icons-container">
            <a href="https://twitter.com/altsurd" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 50 50" alt="Twitter">
                <path fill="currentColor" d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"/>
                </svg>
            </a>
            <a href="https://www.instagram.com/jacksonsprigg/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 50 50" alt="Instagram">
                <path fill="currentColor" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                </svg>
            </a>
            <a href="https://www.goodreads.com/review/list/171423136-jackson-sprigg?order=d&shelf=read&sort=rating" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" alt="Goodreads">
                    <path fill="currentColor" d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.078c.695.007 1.375-.013 2.07-.006c.224 1.342 1.065 2.43 2.683 3.026c1.583.496 3.737.46 5.082-.174c1.351-.636 2.145-1.822 2.503-3.577c.212-1.042.236-1.734.231-2.92l-.005-1.631h-.059c-1.245 2.564-3.315 3.53-5.59 3.475c-5.74-.054-7.68-4.534-7.528-8.606c.01-5.241 3.22-8.537 7.557-8.495c2.354-.14 4.605 1.362 5.554 3.37l.059.002l.002-2.918l2.099.004l-.002 15.717c-.193 7.04-4.376 7.89-8.209 7.811zm6.1-15.633c-.096-3.26-1.601-6.62-5.503-6.645c-3.954-.017-5.625 3.592-5.604 6.85c-.013 3.439 1.643 6.305 4.703 6.762c4.532.591 6.551-3.411 6.404-6.967z"/>
                </svg>
            </a>
            <a href="https://github.com/JacksonSprigg/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" alt="GitHub">
                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                </svg>
            </a>
            <a href="mailto:jacksonsprigg@gmail.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" alt="Email">
                    <path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"/>
                </svg>
            </a>
            <a href="https://au.linkedin.com/in/jackson-sprigg-2b334a1b7" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" alt="LinkedIn">
                    <path fill="currentColor" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756zm2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"/>
                </svg>
            </a>

            ${quote ? `
            <hr class="thin-hr">

            <p class="quote-block">
                ${quote}
                ${author ? `<span class="citation">${author}</span>` : ''}
            </p>
            <br><br>` : ''}
        </div>
    `;

    // Insert into page
    const socialSection = document.querySelector('.social-icons');
    if (socialSection) {
        socialSection.innerHTML = iconsHTML;
    }
}
