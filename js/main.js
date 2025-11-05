// Main JavaScript file for Glitters & Giggles

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeAnimations();
    initializeScrollEffects();
    initializeFormValidation();
    initializeMobileNav();
});

// Animations on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Utility function to show alerts
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(alertDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation enhancement
function initializeFormValidation() {
    const forms = document.querySelectorAll('form[data-validate="true"]');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            this.classList.add('was-validated');
        });
    });
}

// Scroll effects for enhanced UX
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow to navbar on scroll
        if (scrollTop > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        lastScrollTop = scrollTop;
    });
}

// Modern mobile navigation
function initializeMobileNav() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const mobileNavOverlay = document.createElement('div');
    const mobileNavMenu = document.createElement('div');

    if (!navbarToggler) return;

    // Create overlay
    mobileNavOverlay.className = 'mobile-nav-overlay';
    mobileNavOverlay.innerHTML = `
        <div class="mobile-nav-menu">
            <button class="mobile-nav-close">&times;</button>
            <nav class="text-center">
                <a class="nav-link" href="index.html">Home</a>
                <a class="nav-link" href="about.html">About</a>
                <a class="nav-link" href="services.html">Services</a>
                <a class="nav-link" href="gallery.html">Gallery</a>
                <a class="nav-link" href="blog.html">Blog</a>
                <a class="nav-link" href="contact.html">Contact</a>
            </nav>
        </div>
    `;

    document.body.appendChild(mobileNavOverlay);

    // Toggle mobile nav
    navbarToggler.addEventListener('click', function(e) {
        e.preventDefault();
        mobileNavOverlay.classList.toggle('show');
    });

    // Close mobile nav
    mobileNavOverlay.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('mobile-nav-close')) {
            mobileNavOverlay.classList.remove('show');
        }
    });

    // Close on nav link click
    mobileNavOverlay.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileNavOverlay.classList.remove('show');
        });
    });
}