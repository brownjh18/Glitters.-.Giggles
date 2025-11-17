// Gallery page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadGalleryGrid();
});

// Load gallery grid
function loadGalleryGrid() {
    const galleryItems = [];
    for (let i = 1; i <= 15; i++) {
        galleryItems.push({
            id: i,
            title: `Event ${i}`,
            category: getCategoryForIndex(i)
        });
    }

    const container = document.getElementById('gallery-grid');
    if (!container) return;

    container.innerHTML = galleryItems.map((item, index) => {
        const imageName = item.id <= 8 ? 'gallery' : 'Gallery';
        return `
        <div class="col-lg-3 col-md-4 col-sm-6 animate-on-scroll">
            <div class="gallery-item position-relative">
                <img src="img/${imageName}-${item.id}.jpg" alt="${item.title}" class="img-fluid rounded shadow-sm" onclick="openLightbox('img/${imageName}-${item.id}.jpg', '${item.title}')">
                <div class="gallery-overlay">
                    <div class="text-center">
                        <h6>${item.title}</h6>
                        <small>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</small>
                    </div>
                </div>
            </div>
        </div>
    `}).join('');

    // Update gallery count
    const galleryCount = document.getElementById('gallery-count');
    if (galleryCount) {
        galleryCount.textContent = galleryItems.length;
    }
}

// Get category based on index (for variety)
function getCategoryForIndex(index) {
    const categories = ['birthday', 'school', 'corporate', 'cultural', 'stem', 'inclusive'];
    return categories[index % categories.length];
}

// Open lightbox
function openLightbox(src, alt) {
    // Remove existing lightbox
    const existingLightbox = document.querySelector('.lightbox-overlay');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${alt}">
            <button class="lightbox-close">&times;</button>
        </div>
    `;

    document.body.appendChild(lightbox);

    // Close lightbox on click
    lightbox.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('lightbox-close')) {
            this.remove();
        }
    });

    // Add lightbox styles if not already present
    if (!document.querySelector('#lightbox-styles')) {
        const styles = document.createElement('style');
        styles.id = 'lightbox-styles';
        styles.textContent = `
            .lightbox-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: pointer;
            }
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            .lightbox-content img {
                max-width: 100%;
                max-height: 100%;
                border-radius: 10px;
            }
            .lightbox-close {
                position: absolute;
                top: -15px;
                right: -15px;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;
        document.head.appendChild(styles);
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