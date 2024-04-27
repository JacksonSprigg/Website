
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


// scroll-animations.js
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.25// This value can be adjusted based on when you want the animation to trigger
    });

    const targets = document.querySelectorAll('.list-outer-container, .content-inner, .hero, .social-icons');
    targets.forEach(target => {
        observer.observe(target);
    });
});

//Preload images.
document.addEventListener("DOMContentLoaded", function() {
    var images = document.images,
        totalImages = images.length,
        imagesLoaded = 0;
  
    // Check if there are images on the page
    if (totalImages > 0) {
      var imageLoaded = function() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          document.body.classList.remove("preload");
        }
      };
  
      for (var i = 0; i < totalImages; i++) {
        if (images[i].complete) {
          imageLoaded();
        } else {
          images[i].addEventListener('load', imageLoaded);
          images[i].addEventListener('error', imageLoaded); // handle broken images
        }
      }
    } else {
      // If there are no images, remove the preload class immediately
      document.body.classList.remove("preload");
    }
  });

  // Clickable container
function navigateToURL(url) {
    window.location.href = url;
}
  

