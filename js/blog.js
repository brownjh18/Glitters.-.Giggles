// Blog page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
});

// Load blog posts
function loadBlogPosts() {
    const blogPosts = [
        {
            id: 1,
            title: "The Importance of Play in Child Development",
            excerpt: "Discover how structured play activities contribute to cognitive, emotional, and social development in children. Learn about the science behind play-based learning and how it shapes young minds for future success.",
            fullContent: `
                <p class="lead">
                    Discover how structured play activities contribute to cognitive, emotional, and social development in children.
                    Learn about the science behind play-based learning and how it shapes young minds for future success.
                </p>

                <h2>The Science Behind Play</h2>
                <p>
                    Research in child development has consistently shown that play is not just a way for children to have fun,
                    but a crucial component of their overall development. When children engage in play, their brains are actively
                    building neural connections that form the foundation for learning, problem-solving, and social interaction.
                </p>

                <p>
                    According to child development experts, play helps children develop:
                </p>
                <ul>
                    <li><strong>Cognitive skills</strong> - Through problem-solving and creative thinking</li>
                    <li><strong>Social skills</strong> - By learning to share, cooperate, and communicate</li>
                    <li><strong>Emotional regulation</strong> - Managing feelings and understanding others' emotions</li>
                    <li><strong>Physical development</strong> - Building motor skills and coordination</li>
                    <li><strong>Language skills</strong> - Expanding vocabulary and communication abilities</li>
                </ul>

                <h2>Types of Play and Their Benefits</h2>

                <h3>Solo Play</h3>
                <p>
                    When children play alone, they develop independence and self-reliance. This type of play allows them to
                    explore their interests without external pressure and build confidence in their abilities.
                </p>

                <h3>Parallel Play</h3>
                <p>
                    Children playing alongside each other without direct interaction learn to observe and model behaviors.
                    This is an important step in social development as children begin to understand social norms.
                </p>

                <h3>Cooperative Play</h3>
                <p>
                    Working together towards a common goal teaches children about teamwork, compromise, and leadership.
                    These skills are essential for success in school and future careers.
                </p>

                <h2>Structured vs. Unstructured Play</h2>
                <p>
                    Both structured and unstructured play have their place in child development. Structured play, such as
                    organized games and activities, helps children learn specific skills and follow rules. Unstructured play,
                    on the other hand, allows for creativity and imagination to flourish.
                </p>

                <p>
                    At Glitters & Giggles, we combine both approaches in our programs to ensure children receive the
                    benefits of both types of play experiences.
                </p>

                <h2>The Role of Adults in Play</h2>
                <p>
                    While children should be allowed to lead their own play experiences, adults play a crucial role in
                    facilitating meaningful play opportunities. Parents and educators can:
                </p>
                <ul>
                    <li>Provide a safe environment for exploration</li>
                    <li>Offer age-appropriate toys and materials</li>
                    <li>Join in play activities without taking over</li>
                    <li>Ask open-ended questions to extend learning</li>
                    <li>Model positive social behaviors</li>
                </ul>

                <h2>Play in the Digital Age</h2>
                <p>
                    In today's digital world, it's more important than ever to ensure children have ample opportunities
                    for physical, hands-on play. While technology has its place in education, research shows that
                    screen time should be balanced with real-world play experiences.
                </p>

                <p>
                    Our programs at Glitters & Giggles are designed to provide children with meaningful play experiences
                    that prepare them for success in an increasingly complex world.
                </p>
            `,
            author: "Doreen Martha",
            date: "2025-01-15",
            tags: ["parenting", "development", "education"],
            image: "blog-1.jpg"
        },
        {
            id: 2,
            title: "Planning the Perfect Birthday Party",
            excerpt: "Tips and tricks for organizing memorable birthday celebrations that both parents and children will love. From theme selection to activity planning, we cover everything you need to know.",
            fullContent: `
                <p class="lead">
                    Tips and tricks for organizing memorable birthday celebrations that both parents and children will love.
                    From theme selection to activity planning, we cover everything you need to know.
                </p>

                <h2>Choosing the Right Theme</h2>
                <p>
                    The theme sets the tone for your entire birthday celebration. Consider your child's interests, age,
                    and personality when selecting a theme. Popular choices include superheroes, princesses, space exploration,
                    dinosaurs, and favorite characters from books or movies.
                </p>

                <h2>Essential Planning Steps</h2>
                <ul>
                    <li><strong>Set a budget</strong> - Determine how much you're willing to spend</li>
                    <li><strong>Choose a date and time</strong> - Consider school schedules and nap times</li>
                    <li><strong>Select a venue</strong> - Home, park, or dedicated party venue</li>
                    <li><strong>Create a guest list</strong> - Balance family and friends</li>
                    <li><strong>Plan activities</strong> - Games, crafts, and entertainment</li>
                </ul>

                <h2>Activity Ideas by Age Group</h2>

                <h3>Toddlers (2-4 years)</h3>
                <p>Simple, sensory activities like finger painting, musical games, and soft play areas.</p>

                <h3>Preschoolers (4-6 years)</h3>
                <p>Structured games, treasure hunts, and simple crafts that build fine motor skills.</p>

                <h3>School Age (6-12 years)</h3>
                <p>Team games, scavenger hunts, and creative projects that encourage cooperation.</p>

                <h2>Food and Cake Considerations</h2>
                <p>
                    Choose age-appropriate foods and consider any allergies. The birthday cake is often the highlight
                    of the celebration, so make it special but keep portions manageable for young children.
                </p>

                <h2>Safety First</h2>
                <p>
                    Always prioritize safety with appropriate supervision ratios, child-proofed environments,
                    and emergency preparedness. Remember that the goal is fun, not perfection!
                </p>
            `,
            author: "Doreen Martha",
            date: "2025-01-10",
            tags: ["parenting", "events", "birthday"],
            image: "blog-2.jpg"
        },
        {
            id: 3,
            title: "STEM Education Through Fun Activities",
            excerpt: "How to introduce science, technology, engineering, and math concepts through engaging, hands-on activities. Practical tips for making STEM learning enjoyable for children of all ages.",
            fullContent: `
                <p class="lead">
                    How to introduce science, technology, engineering, and math concepts through engaging, hands-on activities.
                    Practical tips for making STEM learning enjoyable for children of all ages.
                </p>

                <h2>Why STEM Matters</h2>
                <p>
                    STEM (Science, Technology, Engineering, and Mathematics) skills are essential for success in the 21st century.
                    By introducing these concepts through play and hands-on activities, children develop critical thinking,
                    problem-solving, and creativity from an early age.
                </p>

                <h2>Science Activities</h2>
                <ul>
                    <li><strong>Simple experiments</strong> - Baking soda volcanoes, slime making, color mixing</li>
                    <li><strong>Nature exploration</strong> - Bug hunts, leaf rubbings, weather tracking</li>
                    <li><strong>Sensory play</strong> - Exploring textures, temperatures, and states of matter</li>
                </ul>

                <h2>Technology Activities</h2>
                <ul>
                    <li><strong>Coding games</strong> - Age-appropriate programming apps and games</li>
                    <li><strong>Digital storytelling</strong> - Creating stories with photos and simple animations</li>
                    <li><strong>Robotics basics</strong> - Building simple machines and understanding mechanisms</li>
                </ul>

                <h2>Engineering Challenges</h2>
                <ul>
                    <li><strong>Building projects</strong> - Using blocks, recycled materials, or construction sets</li>
                    <li><strong>Bridge building</strong> - Testing weight-bearing structures with marshmallows and spaghetti</li>
                    <li><strong>Ramp racing</strong> - Exploring speed, friction, and gravity</li>
                </ul>

                <h2>Math Activities</h2>
                <ul>
                    <li><strong>Pattern recognition</strong> - Sorting objects, creating sequences</li>
                    <li><strong>Measurement</strong> - Comparing sizes, weighing ingredients</li>
                    <li><strong>Shape exploration</strong> - 2D and 3D shapes in everyday objects</li>
                </ul>

                <h2>Making STEM Fun</h2>
                <p>
                    The key to successful STEM education is making it enjoyable. Use games, stories, and real-world
                    applications to engage children. Celebrate effort over perfection and encourage curiosity.
                </p>

                <p>
                    Remember that every child learns differently. Some may excel at building, while others prefer
                    experimenting. Provide a variety of activities to discover each child's unique strengths.
                </p>
            `,
            author: "Doreen Martha",
            date: "2025-01-05",
            tags: ["education", "stem", "activities"],
            image: "blog-3.jpg"
        }
    ];

    const container = document.getElementById('blog-posts');
    if (!container) return;

    container.innerHTML = blogPosts.map(post => `
        <div class="col-lg-4 col-md-6 animate-on-scroll">
            <div class="card h-100 shadow-sm">
                <img src="img/${post.image}" class="card-img-top" alt="${post.title}" style="height: 200px; object-fit: cover;" onerror="this.src='img/logo.png'">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.excerpt.substring(0, 150)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">
                            By ${post.author} • ${new Date(post.date).toLocaleDateString()}
                        </small>
                        <button class="btn btn-primary btn-sm" onclick="showBlogDetail(${post.id})">Read More</button>
                    </div>
                    ${post.tags ? `
                        <div class="mt-2">
                            ${post.tags.map(tag => `<span class="badge bg-light text-dark me-1">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Store blog posts data globally for detail view
    window.blogPostsData = blogPosts;
}

// Show blog detail
function showBlogDetail(postId) {
    const post = window.blogPostsData.find(p => p.id === postId);
    if (!post) {
        console.log('Blog post not found for ID:', postId);
        return;
    }

    // Hide blog posts and show detail section
    document.getElementById('blog-posts').style.display = 'none';
    document.getElementById('blog-detail-section').style.display = 'block';

    // Scroll to top of detail section
    document.getElementById('blog-detail-section').scrollIntoView({ behavior: 'smooth' });

    // Generate detail content
    const detailContent = document.getElementById('blog-detail-content');
    detailContent.innerHTML = `
        <!-- Blog Hero -->
        <section class="py-5 bg-light mb-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <h1 class="display-4 fw-bold mb-3">${post.title}</h1>
                        <div class="d-flex align-items-center mb-3">
                            <img src="img/Avatar2.jpg" alt="${post.author}" class="rounded-circle me-3" style="width: 50px; height: 50px; object-fit: cover;">
                            <div>
                                <strong>${post.author}</strong>
                                <br>
                                <small class="text-muted">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • 5 min read</small>
                            </div>
                        </div>
                        <div class="mb-3">
                            ${post.tags.map(tag => `<span class="badge bg-primary me-2">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src="img/${post.image}" alt="${post.title}" class="img-fluid rounded shadow">
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog Content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <article class="blog-content">
                        ${post.fullContent}
                    </article>

                    <!-- Social Share -->
                    <div class="mt-5 pt-4 border-top">
                        <h5>Share this article:</h5>
                        <div class="d-flex gap-2 flex-wrap">
                            <button class="btn btn-outline-primary btn-sm" onclick="shareOnFacebook('${post.title}', window.location.href)">
                                <i class="fab fa-facebook-f me-2"></i>Facebook
                            </button>
                            <button class="btn btn-outline-info btn-sm" onclick="shareOnTwitter('${post.title}', window.location.href)">
                                <i class="fab fa-twitter me-2"></i>X (Twitter)
                            </button>
                            <button class="btn btn-outline-success btn-sm" onclick="shareOnWhatsApp('${post.title}', window.location.href)">
                                <i class="fab fa-whatsapp me-2"></i>WhatsApp
                            </button>
                            <button class="btn btn-outline-danger btn-sm" onclick="shareOnInstagram('${post.title}', window.location.href)">
                                <i class="fab fa-instagram me-2"></i>Instagram
                            </button>
                            <button class="btn btn-outline-dark btn-sm" onclick="shareOnTikTok('${post.title}', window.location.href)">
                                <i class="fab fa-tiktok me-2"></i>TikTok
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <!-- Author Bio -->
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src="img/Avatar2.jpg" alt="${post.author}" class="rounded-circle mb-3" style="width: 80px; height: 80px; object-fit: cover;">
                            <h5>${post.author}</h5>
                            <p class="text-muted small">Founder of Glitters & Giggles</p>
                            <p class="small">With years of experience in children entertainment and education, Doreen is passionate about creating meaningful play experiences that support child development.</p>
                        </div>
                    </div>

                    <!-- Related Posts -->
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Related Articles</h5>
                        </div>
                        <div class="card-body">
                            ${window.blogPostsData.filter(p => p.id !== postId).slice(0, 3).map(relatedPost => `
                                <div class="mb-3">
                                    <button class="btn btn-link p-0 text-decoration-none w-100 text-start" onclick="showBlogDetail(${relatedPost.id})">
                                        <h6 class="mb-1">${relatedPost.title}</h6>
                                        <small class="text-muted">${relatedPost.excerpt.substring(0, 80)}...</small>
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Hide blog detail and show blog posts
function hideBlogDetail() {
    document.getElementById('blog-detail-section').style.display = 'none';
    document.getElementById('blog-posts').style.display = '';

    // Scroll back to blog posts
    document.getElementById('blog-posts').scrollIntoView({ behavior: 'smooth' });
}

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            // Show success message (since we can't actually send emails from static site)
            showAlert('Thank you for subscribing! We\'ll keep you updated with our latest articles.', 'success');
            this.reset();
        });
    }
});

// Social sharing functions
function shareOnFacebook(title, url) {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

function shareOnTwitter(title, url) {
    const text = encodeURIComponent(`${title} - ${url}`);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

function shareOnWhatsApp(title, url) {
    const text = encodeURIComponent(`${title} - ${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareOnInstagram(title, url) {
    // Instagram doesn't support direct sharing via URL, so we'll copy to clipboard
    const text = `${title} - ${url}`;
    navigator.clipboard.writeText(text).then(() => {
        showAlert('Link copied to clipboard! You can now paste it in Instagram.', 'success');
    }).catch(() => {
        showAlert('Please copy this link manually: ' + text, 'info');
    });
}

function shareOnTikTok(title, url) {
    // TikTok doesn't support direct sharing via URL, so we'll copy to clipboard
    const text = `${title} - ${url}`;
    navigator.clipboard.writeText(text).then(() => {
        showAlert('Link copied to clipboard! You can now paste it in TikTok.', 'success');
    }).catch(() => {
        showAlert('Please copy this link manually: ' + text, 'info');
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