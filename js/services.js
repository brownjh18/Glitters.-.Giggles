// Services page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadServicesList();
});

// Load services list
function loadServicesList() {
    const services = [
        {
            id: 1,
            title: "Birthday Parties",
            description: "Make your child's birthday unforgettable with our magical party packages. We handle everything from themed decorations to engaging activities.",
            category: "birthday",
            fullDescription: "We understand that every child is unique, which is why we offer customizable birthday party packages that cater to different age groups, interests, and budgets. Our experienced team ensures that every detail is perfect, so you can focus on celebrating with your child.",
            features: [
                "Themed Decorations", "Interactive Games", "Music & Entertainment", "Food & Cake",
                "Photography", "Staff Support"
            ],
            duration: "2-4 hours",
            ageRange: "2-16 years",
            groupSize: "5-50 children",
            themes: ["Princess Party", "Superhero Adventure", "Space Explorer"]
        },
        {
            id: 2,
            title: "STEM Activities",
            description: "Educational and fun STEM activities that spark curiosity in young minds. Hands-on experiments and problem-solving challenges.",
            category: "stem",
            fullDescription: "STEM (Science, Technology, Engineering, and Mathematics) education is crucial for developing critical thinking, problem-solving, and innovation skills in young children. Our STEM activities make learning engaging and fun while building a strong foundation for future success.",
            features: [
                "Science Experiments", "Engineering Challenges", "Math Games", "Simple Robotics",
                "Microscopy & Observation", "Problem Solving"
            ],
            duration: "1-3 hours",
            ageRange: "3-12 years",
            groupSize: "8-20 children",
            themes: ["Space Exploration", "Ocean Discovery", "Green Energy"]
        },
        {
            id: 3,
            title: "Cultural Programs",
            description: "Celebrate Ugandan culture with traditional music, dance, and storytelling. Learn about heritage while having fun.",
            category: "cultural",
            fullDescription: "Our cultural programs celebrate Uganda's rich heritage through engaging activities that educate and entertain. Children learn about traditional music, dance, storytelling, and cultural values while developing an appreciation for diversity.",
            features: [
                "Traditional Music", "Cultural Dance", "Storytelling Sessions", "Craft Activities",
                "Language Learning", "Cultural Games"
            ],
            duration: "1-2 hours",
            ageRange: "4-14 years",
            groupSize: "10-30 children",
            themes: ["Music & Dance", "Folktales", "Traditional Crafts"]
        },
        {
            id: 4,
            title: "School Events",
            description: "Engaging activities for school field days, sports days, and celebrations. Perfect for school communities and families.",
            category: "school",
            fullDescription: "We provide comprehensive event management for schools, from field days and sports events to cultural celebrations and educational activities. Our programs are designed to foster teamwork, physical activity, and school spirit.",
            features: [
                "Sports Activities", "Team Building Games", "Cultural Celebrations", "Educational Games",
                "Prize Distributions", "Photography Services"
            ],
            duration: "2-6 hours",
            ageRange: "5-16 years",
            groupSize: "20-200 children",
            themes: ["Sports Day", "Cultural Festival", "Science Fair"]
        },
        {
            id: 5,
            title: "Corporate Child Care",
            description: "Professional childcare services during corporate events and conferences. Safe, engaging activities for employee children.",
            category: "corporate",
            fullDescription: "During corporate events, conferences, and team-building activities, we provide professional childcare services that keep children engaged and safe. Our trained staff ensures a positive experience for both children and parents.",
            features: [
                "Supervised Activities", "Age-Appropriate Games", "Arts & Crafts", "Quiet Reading Areas",
                "Snack Services", "Medical Emergency Response"
            ],
            duration: "2-8 hours",
            ageRange: "2-12 years",
            groupSize: "5-50 children",
            themes: ["Creative Play", "Educational Activities", "Team Games"]
        },
        {
            id: 6,
            title: "Inclusive Playdates",
            description: "Welcoming playdates designed for children of all abilities and backgrounds. Inclusive activities that everyone can enjoy.",
            category: "inclusive",
            fullDescription: "Our inclusive playdates create welcoming environments where children of all abilities, backgrounds, and learning styles can play together. We focus on activities that promote understanding, empathy, and friendship.",
            features: [
                "Adaptive Activities", "Sensory Play", "Cooperative Games", "Peer Buddy System",
                "Individualized Support", "Inclusive Materials"
            ],
            duration: "1-3 hours",
            ageRange: "3-12 years",
            groupSize: "6-15 children",
            themes: ["Sensory Play", "Cooperative Games", "Creative Expression"]
        }
    ];

    const container = document.getElementById('services-list');
    if (!container) return;

    container.innerHTML = services.map(service => `
        <div class="col-lg-4 col-md-6 animate-on-scroll">
            <div class="card service-card h-100 shadow-sm">
                <img src="img/service-${service.category}.jpg" class="card-img-top" alt="${service.title}" style="height: 200px; object-fit: cover;" onerror="this.src='img/logo.png'">
                <div class="card-body">
                    <h5 class="card-title">${service.title}</h5>
                    <p class="card-text">${service.description}</p>
                    <div class="d-flex justify-content-start align-items-center mb-3">
                        <span class="badge bg-secondary">${service.category.charAt(0).toUpperCase() + service.category.slice(1)}</span>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary" onclick="showServiceDetail(${service.id})">Learn More</button>
                        <button class="btn btn-primary" onclick="selectService(${service.id}, '${service.title}')">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Store services data globally for detail view
    window.servicesData = services;
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

// Show service detail
function showServiceDetail(serviceId) {
    const service = window.servicesData.find(s => s.id === serviceId);
    if (!service) {
        console.log('Service not found for ID:', serviceId);
        return;
    }

    // Hide services list and show detail section
    document.getElementById('services-list').style.display = 'none';
    document.getElementById('service-detail-section').style.display = 'block';

    // Scroll to top of detail section
    document.getElementById('service-detail-section').scrollIntoView({ behavior: 'smooth' });

    // Generate detail content with modern layout structure
    const detailContent = document.getElementById('service-detail-content');
    detailContent.innerHTML = `
        <!-- Navigation Bar -->
        <div class="service-nav-bar mb-5">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col text-center">
                        <h4 class="mb-0 fw-bold">${service.title}</h4>
                    </div>
                    <div class="col-auto">
                        <!-- Book Now button removed from nav bar -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Hero Section -->
        <div class="service-hero mb-5" style="background: linear-gradient(135deg, ${getServiceColor(service.category)}15, ${getServiceColor(service.category, true)}15);">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="hero-content">
                            <div class="service-badge mb-3">
                                <span class="badge fs-6 px-3 py-2" style="background-color: ${getServiceColor(service.category)}; color: white;">
                                    ${service.category.charAt(0).toUpperCase() + service.category.slice(1)} Service
                                </span>
                            </div>
                            <h1 class="display-5 fw-bold mb-3">${service.title}</h1>
                            <p class="lead mb-4">${service.description}</p>
                            <div class="service-stats">
                                <div class="row g-3">
                                    <div class="col-auto">
                                        <div class="stat-item">
                                            <i class="fas fa-clock text-muted me-2"></i>
                                            <span>${service.duration}</span>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="stat-item">
                                            <i class="fas fa-users text-muted me-2"></i>
                                            <span>${service.ageRange}</span>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="stat-item">
                                            <i class="fas fa-map-marker-alt text-muted me-2"></i>
                                            <span>Kampala, Wakiso, Entebbe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hero-visual text-center">
                            <div class="service-icon-hero">
                                <i class="fas ${getServiceIcon(service.category)} fa-6x" style="color: ${getServiceColor(service.category)};"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="container">
            <!-- Description Section -->
            <div class="row mb-5">
                <div class="col-12">
                    <div class="content-section">
                        <h2 class="section-title">About This Service</h2>
                        <p class="service-description">${service.fullDescription}</p>
                    </div>
                </div>
            </div>

            <!-- Features Section -->
            <div class="row mb-5">
                <div class="col-12">
                    <div class="content-section">
                        <h2 class="section-title">What We Offer</h2>
                        <div class="features-grid">
                            ${service.features.map((feature, index) => `
                                <div class="feature-card">
                                    <div class="feature-icon">
                                        <i class="fas ${getFeatureIcon(index)}" style="color: ${getServiceColor(service.category)};"></i>
                                    </div>
                                    <h6 class="feature-title">${feature}</h6>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            ${service.themes ? `
            <!-- Themes Section -->
            <div class="row mb-5">
                <div class="col-12">
                    <div class="content-section">
                        <h2 class="section-title">Popular Themes</h2>
                        <div class="themes-grid">
                            ${service.themes.map(theme => `
                                <div class="theme-card">
                                    <div class="theme-icon">
                                        <i class="fas fa-star" style="color: ${getServiceColor(service.category)};"></i>
                                    </div>
                                    <h6 class="theme-title">${theme}</h6>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            ` : ''}

            <!-- CTA Section -->
            <div class="row">
                <div class="col-12">
                    <div class="cta-section">
                        <h2 class="cta-title">Ready to Create Magic?</h2>
                        <p class="cta-description">Contact us today to discuss your specific needs and get a customized quote for this service.</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary btn-lg me-3" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="selectService(${service.id}, '${service.title}')">
                                <i class="fas fa-calendar me-2"></i>Book This Service
                            </button>
                            <a href="contact.html" class="btn btn-outline-primary btn-lg">
                                <i class="fas fa-envelope me-2"></i>Contact Us
                            </a>
                            <button class="btn btn-outline-secondary btn-lg ms-3" onclick="hideServiceDetail()">
                                <i class="fas fa-arrow-left me-2"></i>Back to Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Hide service detail and show services list
function hideServiceDetail() {
    document.getElementById('service-detail-section').style.display = 'none';
    document.getElementById('services-list').style.display = '';

    // Scroll back to services list
    document.getElementById('services-list').scrollIntoView({ behavior: 'smooth' });
}

// Get color for service category
function getServiceColor(category, secondary = false) {
    const colors = {
        birthday: secondary ? '#ffe66d' : '#ff6b9d',
        stem: secondary ? '#8BC34A' : '#4CAF50',
        cultural: secondary ? '#f8bbd9' : '#e91e63',
        school: secondary ? '#CDDC39' : '#FF9800',
        corporate: secondary ? '#ffe66d' : '#9C27B0',
        inclusive: secondary ? '#CDDC39' : '#00BCD4'
    };
    return colors[category] || '#ff6b9d';
}

// Get icon for service category
function getServiceIcon(category) {
    const icons = {
        birthday: 'fa-birthday-cake',
        stem: 'fa-flask',
        cultural: 'fa-drum',
        school: 'fa-school',
        corporate: 'fa-building',
        inclusive: 'fa-users'
    };
    return icons[category] || 'fa-sparkles';
}

// Get icon for feature
function getFeatureIcon(index) {
    const icons = [
        'fa-check-circle',
        'fa-star',
        'fa-heart',
        'fa-lightbulb',
        'fa-users',
        'fa-clock',
        'fa-shield-alt',
        'fa-smile',
        'fa-magic',
        'fa-award',
        'fa-gift',
        'fa-handshake'
    ];
    return icons[index % icons.length];
}