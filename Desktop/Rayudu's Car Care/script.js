// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Shopping Cart
let cart = [];
const cartCount = document.createElement('span');
cartCount.className = 'cart-count';
document.querySelector('.logo').appendChild(cartCount);

function updateCartCount() {
    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length ? 'block' : 'none';
}

// Sample Product Data
const products = [
    {
        id: 1,
        name: 'Premium Car Detailing Kit',
        price: '₹1,499',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Complete car detailing kit with premium quality products'
    },
    {
        id: 2,
        name: 'Car Seat Covers',
        price: '₹3,999',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Premium quality custom-fit seat covers'
    },
    {
        id: 3,
        name: 'Car Polish Kit',
        price: '₹999',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Professional car polish kit for showroom finish'
    },
    {
        id: 4,
        name: 'Car Air Freshener',
        price: '₹299',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Long-lasting premium car air fresheners'
    }
];

// Sample Offers Data
const offers = [
    {
        title: 'Summer Special',
        description: 'Get 20% off on all car detailing services',
        validUntil: 'August 31, 2024'
    },
    {
        title: 'Combo Package',
        description: 'Free accessories installation with any detailing service',
        validUntil: 'December 31, 2024'
    }
];

// Sample Testimonials Data
const testimonials = [
    {
        name: 'Rahul Sharma',
        text: 'Best car care service in town! The detailing work is exceptional.',
        rating: 5
    },
    {
        name: 'Priya Patel',
        text: 'Professional service and great attention to detail. Highly recommended!',
        rating: 5
    },
    {
        name: 'Amit Kumar',
        text: 'Affordable prices and excellent customer service. Will definitely come back.',
        rating: 4
    }
];

// Load Products
function loadProducts() {
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card animate';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button class="buy-button" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners to buy buttons
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCartCount();
            showNotification(`${product.name} added to cart!`);
        });
    });
}

// Load Offers
function loadOffers() {
    const offersContainer = document.querySelector('.offers-container');
    offers.forEach(offer => {
        const offerCard = document.createElement('div');
        offerCard.className = 'offer-card animate';
        offerCard.innerHTML = `
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
            <p class="valid-until">Valid until: ${offer.validUntil}</p>
        `;
        offersContainer.appendChild(offerCard);
    });
}

// Load Testimonials
function loadTestimonials() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card animate';
        testimonialCard.innerHTML = `
            <div class="rating">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
        `;
        testimonialSlider.appendChild(testimonialCard);
    });
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
    });
});

// Form Submission
const contactForm = document.getElementById('whatsappForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Message:* ${data.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL with the phone number and message
    const whatsappUrl = `https://wa.me/917989339928?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success notification
    showNotification('Redirecting to WhatsApp...');
    
    // Reset the form
    this.reset();
});

// Scroll to Services Function
function scrollToServices() {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
    });
}

// Sample Services Data
const services = [
    {
        id: 1,
        title: 'Ceramic Coating',
        images: [
            './images/CeramicCoating.jpeg', 
        ],
        description: 'Premium ceramic coating for long-lasting protection and shine',
        features: [
            'Superior protection against UV rays',
            'Enhanced paint gloss and depth',
            'Long-lasting hydrophobic properties',
            'Protection against chemical stains'
        ]
    },
    {
        id: 2,
        title: 'Interior Detailing',
        images: [
            './images/InteriorDetailing.jpeg', 
        ],
        description: 'Professional interior cleaning and restoration service',
        features: [
            'Deep cleaning of all interior surfaces',
            'Leather and fabric treatment',
            'Dashboard and console cleaning',
            'Odor removal and air freshening'
        ]
    },
    {
        id: 3,
        title: 'Steam Wash',
        images: [
            './images/SteamWash1.jpeg',
            './images/SteamWash2.jpeg',
        ],
        description: 'Eco-friendly steam cleaning for your vehicle',
        features: [
            'Chemical-free cleaning process',
            'Deep sanitization of all surfaces',
            'Effective stain removal',
            'Environmentally friendly solution'
        ]
    },
    {
        id: 4,
        title: 'Teflon Coating',
        images: [
            './images/TeflonCoating.jpeg',
        ],
        description: 'Advanced Teflon coating for superior paint protection',
        features: [
            'High-gloss finish',
            'Protection against minor scratches',
            'Water repellent surface',
            'Long-lasting durability'
        ]
    },
    {
        id: 5,
        title: 'Underbody Anti Rust Coating',
        images: [
            './images/UnderbodyAntiRustCoating.jpeg',
        ],
        description: 'Professional underbody protection against rust and corrosion',
        features: [
            'Complete underbody cleaning',
            'Anti-rust treatment',
            'Protection against road salt and moisture',
            'Extended vehicle lifespan'
        ]
    },
    {
        id: 6,
        title: 'Wax Coating',
        images: [
            './images/WaxCoating.jpeg',
        ],
        description: 'Premium wax coating for enhanced paint protection',
        features: [
            'Deep shine and gloss',
            'Protection against environmental elements',
            'Easy maintenance',
            'Regular waxing recommended'
        ]
    }
];

// Load Services
function loadServices() {
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.innerHTML = ''; // Clear existing content
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card animate';
        
        // Create image slider HTML if there are multiple images
        const sliderHTML = service.images.length > 1 ? `
            <div class="service-image-slider">
                <div class="slider-container">
                    ${service.images.map((image, index) => `
                        <img src="${image}" alt="${service.title}" class="slider-image ${index === 0 ? 'active' : ''}">
                    `).join('')}
                    <div class="slider-dots"></div>
                </div>
            </div>
        ` : `
            <img src="${service.images[0]}" alt="${service.title}" class="service-image">
        `;

        serviceCard.innerHTML = `
            ${sliderHTML}
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <ul>
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);

        // Initialize slider if there are multiple images
        if (service.images.length > 1) {
            initializeSlider(serviceCard);
        }
    });
}

// Initialize slider for a service card
function initializeSlider(card) {
    const sliderContainer = card.querySelector('.slider-container');
    const images = sliderContainer.querySelectorAll('.slider-image');
    const dotsContainer = sliderContainer.querySelector('.slider-dots');
    
    // Create dots
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.dot');
    let currentIndex = 0;
    
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        images[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });
    
    // Auto-advance slides every 3 seconds
    setInterval(nextImage, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadOffers();
    loadTestimonials();
    loadServices();
    updateCartCount();
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Maps Redirection
function openMaps() {
    const mapsUrl = 'https://maps.app.goo.gl/ZnQRumich7vm1nQ98';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // For mobile devices, try to open in native maps app
        window.location.href = mapsUrl;
    } else {
        // For desktop, open in new tab
        window.open(mapsUrl, '_blank');
    }
}

// Add click handler to maps link
document.querySelector('.fa-map-marker-alt').parentElement.addEventListener('click', function(e) {
    e.preventDefault();
    openMaps();
});

// Service Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const sliderContainer = card.querySelector('.slider-container');
        if (!sliderContainer) return;
        
        const images = sliderContainer.querySelectorAll('.slider-image');
        if (images.length <= 1) return;
        
        const dotsContainer = sliderContainer.querySelector('.slider-dots');
        dotsContainer.innerHTML = ''; // Clear any existing dots
        
        // Create dots based on number of images
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });
        
        const dots = dotsContainer.querySelectorAll('.dot');
        let currentIndex = 0;
        
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            images[index].classList.add('active');
            dots[index].classList.add('active');
        }
        
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
        
        // Add click event to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });
        
        // Auto-advance slides every 3 seconds
        setInterval(nextImage, 3000);
    });
}); 