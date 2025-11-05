// Contact page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeBookingForm();
});

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner me-2"></span>Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (since we can't actually send emails from static site)
            setTimeout(() => {
                showAlert('Thank you for your message! We\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Booking form handling
function initializeBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner me-2"></span>Submitting...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                showAlert('Thank you! Your booking request has been submitted. We\'ll contact you soon.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Service selection for booking form
function selectService(serviceId, serviceTitle) {
    const serviceSelect = document.getElementById('id_event_type');
    const bookingModal = document.getElementById('bookingModal');

    if (serviceSelect && bookingModal) {
        serviceSelect.value = serviceId;

        // Show booking modal
        const modal = new bootstrap.Modal(bookingModal);
        modal.show();
    }
}

// Show QR code modal
function showQRModal() {
    const qrModal = document.getElementById('qrModal');
    if (qrModal) {
        const modal = new bootstrap.Modal(qrModal);
        modal.show();
    }
}

// QR code hover functionality
document.addEventListener('DOMContentLoaded', function() {
    const qrHoverElements = document.querySelectorAll('.qr-code-hover');

    qrHoverElements.forEach(element => {
        let hoverTimeout;

        element.addEventListener('mouseenter', function() {
            hoverTimeout = setTimeout(() => {
                showQRHoverModal();
            }, 500); // 500ms delay
        });

        element.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
        });
    });
});

function showQRHoverModal() {
    // Remove existing modal if any
    const existingModal = document.querySelector('.qr-modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }

    // Create new modal
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'qr-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="qr-modal-content">
            <img src="img/qr-code.png" alt="QR Code for quick contact" class="qr-image">
            <p class="qr-text">Scan for instant contact with Glitters & Giggles</p>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    // Show modal
    setTimeout(() => {
        modalOverlay.classList.add('show');
    }, 10);

    // Hide modal on click
    modalOverlay.addEventListener('click', function() {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.remove();
        }, 300);
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