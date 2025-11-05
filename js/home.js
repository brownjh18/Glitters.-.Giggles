// Home page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadServicesPreview();
    loadGalleryPreview();
    loadBlogPreview();
});

// Load services preview
function loadServicesPreview() {
    const services = [
        {
            id: 1,
            title: "Birthday Parties",
            description: "Make your child's birthday unforgettable with our magical party packages.",
            category: "birthday"
        },
        {
            id: 2,
            title: "STEM Activities",
            description: "Educational and fun STEM activities that spark curiosity in young minds.",
            category: "stem"
        },
        {
            id: 3,
            title: "Cultural Programs",
            description: "Celebrate Ugandan culture with traditional music, dance, and storytelling.",
            category: "cultural"
        },
        {
            id: 4,
            title: "School Events",
            description: "Engaging activities for school field days, sports days, and celebrations.",
            category: "school"
        },
        {
            id: 5,
            title: "Corporate Child Care",
            description: "Professional childcare services during corporate events and conferences.",
            category: "corporate"
        },
        {
            id: 6,
            title: "Inclusive Playdates",
            description: "Welcoming playdates designed for children of all abilities and backgrounds.",
            category: "inclusive"
        }
    ];

    const container = document.getElementById('services-preview');
    if (!container) return;

    container.innerHTML = services.map(service => `
        <div class="col-lg-4 col-md-6 animate-on-scroll">
            <div class="card service-card h-100">
                <img src="img/service-${service.category}.jpg" class="card-img-top" alt="${service.title}" onerror="this.src='img/logo.png'">
                <div class="card-body">
                    <h5 class="card-title">${service.title}</h5>
                    <p class="card-text">${service.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-secondary">${service.category.charAt(0).toUpperCase() + service.category.slice(1)}</span>
                        <button class="btn btn-primary btn-sm" onclick="selectService(${service.id}, '${service.title}')">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Load gallery preview
function loadGalleryPreview() {
    const galleryItems = [];
    for (let i = 1; i <= 12; i++) {
        galleryItems.push({
            id: i,
            title: `Event ${i}`,
            category: "birthday"
        });
    }

    const container = document.getElementById('gallery-preview');
    if (!container) return;

    container.innerHTML = galleryItems.map((item, index) => {
        const imageNumber = index + 1;
        const imageName = imageNumber <= 8 ? `gallery-${imageNumber}.jpg` : `Gallery-${imageNumber}.jpg`;
        return `
        <div class="col-lg-3 col-md-4 col-sm-6 animate-on-scroll">
            <div class="gallery-item">
                <img src="img/${imageName}" alt="${item.title}" class="img-fluid" onerror="this.src='img/logo.png'">
                <div class="gallery-overlay">
                    <div class="text-center">
                        <h6>${item.title}</h6>
                        <small>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</small>
                    </div>
                </div>
            </div>
        </div>
    `;}).join('');
}

// Load blog preview
function loadBlogPreview() {
    const blogPosts = [
        {
            id: 1,
            title: "The Importance of Play in Child Development",
            content: "Discover how structured play activities contribute to cognitive, emotional, and social development in children.",
            author: "Doreen Martha",
            date: "2025-01-15"
        },
        {
            id: 2,
            title: "Planning the Perfect Birthday Party",
            content: "Tips and tricks for organizing memorable birthday celebrations that both parents and children will love.",
            author: "Doreen Martha",
            date: "2025-01-10"
        },
        {
            id: 3,
            title: "STEM Education Through Fun Activities",
            content: "How to introduce science, technology, engineering, and math concepts through engaging, hands-on activities.",
            author: "Doreen Martha",
            date: "2025-01-05"
        }
    ];

    const container = document.getElementById('blog-preview');
    if (!container) return;

    container.innerHTML = blogPosts.map((post, index) => `
        <div class="col-lg-4 animate-on-scroll">
            <div class="card h-100 shadow-sm">
                <img src="img/blog-${index + 1}.jpg" class="card-img-top" alt="${post.title}" style="height: 200px; object-fit: cover;" onerror="this.src='img/logo.png'">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content.substring(0, 150)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">By ${post.author} • ${new Date(post.date).toLocaleDateString()}</small>
                        <a href="blog.html#post-${post.id}" class="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
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