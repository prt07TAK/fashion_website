// Enhanced Product Database
const productDatabase = [
    {
        id: 1,
        name: "Streetwear Hoodie",
        price: 89.99,
        category: "clothing",
        color: "gray",
        image: "resources/product-1.jpg",
        description: "Premium cotton blend with modern fit",
        featured: true,
        dateAdded: "2024-01-15",
        rating: 4.8,
        sizes: ["S", "M", "L", "XL", "XXL"],
        inStock: true
    },
    {
        id: 2,
        name: "Vintage Denim Jacket",
        price: 129.99,
        category: "clothing",
        color: "blue",
        image: "resources/product-2.jpg",
        description: "Classic denim with distressed details",
        featured: true,
        dateAdded: "2024-02-10",
        rating: 4.7,
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 3,
        name: "Tech Cargo Pants",
        price: 79.99,
        category: "clothing",
        color: "black",
        image: "resources/product-3.jpg",
        description: "Functional pockets with modern silhouette",
        featured: false,
        dateAdded: "2024-01-20",
        rating: 4.6,
        sizes: ["28", "30", "32", "34", "36"],
        inStock: true
    },
    {
        id: 4,
        name: "Minimalist Sneakers",
        price: 159.99,
        category: "footwear",
        color: "white",
        image: "resources/product-4.jpg",
        description: "Clean design with premium materials",
        featured: true,
        dateAdded: "2024-03-01",
        rating: 4.9,
        sizes: ["7", "8", "9", "10", "11", "12"],
        inStock: true
    },
    {
        id: 5,
        name: "Urban Backpack",
        price: 69.99,
        category: "accessories",
        color: "black",
        image: "resources/product-5.jpg",
        description: "Water-resistant with laptop compartment",
        featured: false,
        dateAdded: "2024-02-15",
        rating: 4.5,
        sizes: ["One Size"],
        inStock: true
    },
    {
        id: 6,
        name: "Graphic Tee Collection",
        price: 39.99,
        category: "clothing",
        color: "white",
        image: "resources/product-6.jpg",
        description: "Artistic designs on organic cotton",
        featured: false,
        dateAdded: "2024-03-10",
        rating: 4.4,
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 7,
        name: "Leather Crossbody Bag",
        price: 119.99,
        category: "accessories",
        color: "brown",
        image: "resources/product-7.jpg",
        description: "Genuine leather with adjustable strap",
        featured: true,
        dateAdded: "2024-01-25",
        rating: 4.8,
        sizes: ["One Size"],
        inStock: true
    },
    {
        id: 8,
        name: "Athleisure Joggers",
        price: 59.99,
        category: "clothing",
        color: "gray",
        image: "resources/product-8.jpg",
        description: "Comfortable stretch fabric for active lifestyle",
        featured: false,
        dateAdded: "2024-02-20",
        rating: 4.7,
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 9,
        name: "Platform Boots",
        price: 189.99,
        category: "footwear",
        color: "black",
        image: "resources/product-9.jpg",
        description: "Statement footwear with comfortable sole",
        featured: false,
        dateAdded: "2024-03-05",
        rating: 4.6,
        sizes: ["6", "7", "8", "9", "10", "11"],
        inStock: true
    },
    {
        id: 10,
        name: "Corduroy Shirt",
        price: 74.99,
        category: "clothing",
        color: "brown",
        image: "resources/product-10.jpg",
        description: "Soft corduroy with relaxed fit",
        featured: false,
        dateAdded: "2024-01-30",
        rating: 4.5,
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 11,
        name: "Bucket Hat",
        price: 29.99,
        category: "accessories",
        color: "beige",
        image: "resources/product-11.jpg",
        description: "Trendy accessory with sun protection",
        featured: false,
        dateAdded: "2024-02-25",
        rating: 4.3,
        sizes: ["S/M", "L/XL"],
        inStock: true
    },
    {
        id: 12,
        name: "Oversized Blazer",
        price: 149.99,
        category: "clothing",
        color: "black",
        image: "resources/product-12.jpg",
        description: "Professional yet relaxed silhouette",
        featured: true,
        dateAdded: "2024-03-15",
        rating: 4.9,
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 13,
        name: "Canvas Tote Bag",
        price: 34.99,
        category: "accessories",
        color: "white",
        image: "resources/product-13.jpg",
        description: "Eco-friendly with artistic prints",
        featured: false,
        dateAdded: "2024-01-18",
        rating: 4.4,
        sizes: ["One Size"],
        inStock: true
    },
    {
        id: 14,
        name: "High-Top Sneakers",
        price: 139.99,
        category: "footwear",
        color: "red",
        image: "resources/product-14.jpg",
        description: "Bold color with classic high-top design",
        featured: false,
        dateAdded: "2024-02-12",
        rating: 4.7,
        sizes: ["7", "8", "9", "10", "11", "12"],
        inStock: true
    },
    {
        id: 15,
        name: "Ribbed Tank Top",
        price: 24.99,
        category: "clothing",
        color: "white",
        image: "resources/product-15.jpg",
        description: "Essential layering piece with perfect fit",
        featured: false,
        dateAdded: "2024-03-20",
        rating: 4.6,
        sizes: ["XS", "S", "M", "L"],
        inStock: true
    },
    {
        id: 16,
        name: "Chain Necklace Set",
        price: 49.99,
        category: "accessories",
        color: "gold",
        image: "resources/product-16.jpg",
        description: "Layered chains for statement look",
        featured: false,
        dateAdded: "2024-01-22",
        rating: 4.5,
        sizes: ["One Size"],
        inStock: true
    },
    {
        id: 17,
        name: "Wide-Leg Jeans",
        price: 99.99,
        category: "clothing",
        color: "blue",
        image: "resources/product-17.jpg",
        description: "90s inspired with modern comfort",
        featured: false,
        dateAdded: "2024-02-28",
        rating: 4.8,
        sizes: ["26", "28", "30", "32", "34"],
        inStock: true
    },
    {
        id: 18,
        name: "Beanies Collection",
        price: 19.99,
        category: "accessories",
        color: "gray",
        image: "resources/product-18.jpg",
        description: "Soft knit beanies in multiple colors",
        featured: false,
        dateAdded: "2024-03-08",
        rating: 4.4,
        sizes: ["One Size"],
        inStock: true
    },
    {
        id: 19,
        name: "Chelsea Boots",
        price: 169.99,
        category: "footwear",
        color: "brown",
        image: "resources/product-19.jpg",
        description: "Classic style with contemporary comfort",
        featured: true,
        dateAdded: "2024-01-12",
        rating: 4.9,
        sizes: ["7", "8", "9", "10", "11", "12"],
        inStock: true
    },
    {
        id: 20,
        name: "Oversized Sweater",
        price: 84.99,
        category: "clothing",
        color: "beige",
        image: "resources/product-20.jpg",
        description: "Cozy knit perfect for layering",
        featured: false,
        dateAdded: "2024-03-25",
        rating: 4.7,
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    }
];

// Global variables
let products = [];
let filteredProducts = [];
let cart = JSON.parse(localStorage.getItem('nexusCart')) || [];
let currentFilters = {
    search: '',
    category: 'all',
    priceRange: [0, 200],
    colors: [],
    sizes: [],
    sortBy: 'featured'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize products
    products = [...productDatabase];
    filteredProducts = [...products];
    
    // Update cart count
    updateCartCount();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'products.html':
            initializeProductsPage();
            break;
        case 'cart.html':
            initializeCartPage();
            break;
        case 'about.html':
            initializeAboutPage();
            break;
    }
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize reveal animations
    initializeRevealAnimations();
    
    // Initialize notification system
    initializeNotificationSystem();
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return page;
}

// Home page initialization
function initializeHomePage() {
    initializeHeroAnimations();
    initializeFeaturedProducts();
    initializeProductCarousel();
    initializeNewsletterForm();
}

function initializeHeroAnimations() {
    // Initialize typewriter effect
    if (typeof Typed !== 'undefined' && document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Define Your Style', 'Express Yourself', 'Be Authentic'],
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // Initialize particles background
    initializeParticles();
    
    // Initialize floating shapes animation
    initializeFloatingShapes();
}

function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    resizeCanvas();
    createParticles();
    animateParticles();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
}

function initializeFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        anime({
            targets: shape,
            translateY: [0, -20, 0],
            translateX: [0, 10, 0],
            rotate: [0, 5, 0],
            duration: 3000 + (index * 500),
            easing: 'easeInOutSine',
            loop: true,
            delay: index * 200
        });
    });
}

function initializeFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    const featuredProducts = products.filter(product => product.featured).slice(0, 8);
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    // Add hover animations
    addProductHoverAnimations();
}

function initializeProductCarousel() {
    if (typeof Splide !== 'undefined' && document.querySelector('.splide')) {
        new Splide('.splide', {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 }
            }
        }).mount();
    }
}

function initializeNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Simulate newsletter signup
        showNotification('Successfully subscribed to our newsletter!', 'success');
        form.reset();
    });
}

// Products page initialization
function initializeProductsPage() {
    initializeProductFilters();
    renderProducts();
    initializeFilterEventListeners();
    initializeViewToggle();
}

function initializeProductFilters() {
    // Initialize filter values
    const filterElements = {
        search: document.getElementById('search-input'),
        category: document.getElementById('category-filter'),
        priceRange: document.getElementById('price-range'),
        colors: document.querySelectorAll('input[name="color"]'),
        sizes: document.querySelectorAll('input[name="size"]'),
        sortBy: document.getElementById('sort-filter')
    };
    
    // Set up event listeners for filters
    if (filterElements.search) {
        filterElements.search.addEventListener('input', debounce(handleSearch, 300));
    }
    
    if (filterElements.category) {
        filterElements.category.addEventListener('change', handleCategoryFilter);
    }
    
    if (filterElements.priceRange) {
        filterElements.priceRange.addEventListener('input', handlePriceRange);
    }
    
    filterElements.colors.forEach(color => {
        color.addEventListener('change', handleColorFilter);
    });
    
    filterElements.sizes.forEach(size => {
        size.addEventListener('change', handleSizeFilter);
    });
    
    if (filterElements.sortBy) {
        filterElements.sortBy.addEventListener('change', handleSortBy);
    }
}

function handleSearch(e) {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
}

function handleCategoryFilter(e) {
    currentFilters.category = e.target.value;
    applyFilters();
}

function handlePriceRange(e) {
    const value = parseInt(e.target.value);
    currentFilters.priceRange = [0, value];
    document.getElementById('price-value').textContent = `$0 - $${value}`;
    applyFilters();
}

function handleColorFilter() {
    currentFilters.colors = Array.from(document.querySelectorAll('input[name="color"]:checked'))
        .map(input => input.value);
    applyFilters();
}

function handleSizeFilter() {
    currentFilters.sizes = Array.from(document.querySelectorAll('input[name="size"]:checked'))
        .map(input => input.value);
    applyFilters();
}

function handleSortBy(e) {
    currentFilters.sortBy = e.target.value;
    applyFilters();
}

function applyFilters() {
    filteredProducts = products.filter(product => {
        // Search filter
        if (currentFilters.search && !product.name.toLowerCase().includes(currentFilters.search)) {
            return false;
        }
        
        // Category filter
        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) {
            return false;
        }
        
        // Price range filter
        if (product.price < currentFilters.priceRange[0] || product.price > currentFilters.priceRange[1]) {
            return false;
        }
        
        // Color filter
        if (currentFilters.colors.length > 0 && !currentFilters.colors.includes(product.color)) {
            return false;
        }
        
        // Size filter
        if (currentFilters.sizes.length > 0) {
            const hasSize = currentFilters.sizes.some(size => product.sizes.includes(size));
            if (!hasSize) return false;
        }
        
        return true;
    });
    
    // Apply sorting
    sortProducts();
    renderProducts();
}

function sortProducts() {
    switch (currentFilters.sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'featured':
        default:
            filteredProducts.sort((a, b) => b.featured - a.featured);
            break;
    }
}

function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    const isListView = container.classList.contains('list-view');
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-6xl mb-4">🛍️</div>
                <h3 class="text-2xl font-semibold text-charcoal mb-2">No products found</h3>
                <p class="text-gray-600">Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredProducts.map(product => 
        isListView ? createProductListItem(product) : createProductCard(product)
    ).join('');
    
    // Update results count
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
    }
    
    // Add hover animations
    addProductHoverAnimations();
}

function createProductCard(product) {
    return `
        <div class="product-card bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer reveal" data-product-id="${product.id}">
            <div class="relative overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div class="absolute top-4 right-4">
                    ${product.featured ? '<span class="bg-coral text-white px-2 py-1 rounded-full text-xs font-medium">Featured</span>' : ''}
                </div>
                <div class="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onclick="quickView(${product.id})" class="w-full bg-white text-charcoal py-2 px-4 rounded-full font-medium hover:bg-coral hover:text-white transition-colors duration-300">
                        Quick View
                    </button>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-semibold text-charcoal text-lg line-clamp-2">${product.name}</h3>
                    <div class="flex items-center text-sm text-gray-500 ml-2">
                        <span class="text-yellow-400">★</span>
                        <span class="ml-1">${product.rating}</span>
                    </div>
                </div>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-coral">$${product.price}</span>
                    <button onclick="addToCart(${product.id})" class="bg-charcoal text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-coral transition-colors duration-300 transform hover:scale-105">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createProductListItem(product) {
    return `
        <div class="product-list-item bg-white rounded-2xl shadow-lg p-6 flex gap-6 reveal" data-product-id="${product.id}">
            <div class="relative flex-shrink-0">
                <img src="${product.image}" alt="${product.name}" class="w-32 h-32 object-cover rounded-xl">
                ${product.featured ? '<span class="absolute -top-2 -right-2 bg-coral text-white px-2 py-1 rounded-full text-xs font-medium">Featured</span>' : ''}
            </div>
            <div class="flex-1">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-semibold text-charcoal text-xl">${product.name}</h3>
                    <div class="flex items-center text-sm text-gray-500">
                        <span class="text-yellow-400">★</span>
                        <span class="ml-1">${product.rating}</span>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-3xl font-bold text-coral">$${product.price}</span>
                    <div class="flex gap-2">
                        <button onclick="quickView(${product.id})" class="bg-gray-100 text-charcoal px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
                            Quick View
                        </button>
                        <button onclick="addToCart(${product.id})" class="bg-charcoal text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-coral transition-colors duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initializeFilterEventListeners() {
    // Clear filters button
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // Mobile filter toggle
    const mobileFilterBtn = document.getElementById('mobile-filter-btn');
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', toggleFilterSidebar);
    }
}

function initializeViewToggle() {
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const productsGrid = document.getElementById('products-grid');
    
    if (gridViewBtn && listViewBtn && productsGrid) {
        gridViewBtn.addEventListener('click', () => {
            productsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8';
            gridViewBtn.classList.add('bg-coral', 'text-white');
            gridViewBtn.classList.remove('bg-gray-200', 'text-gray-600');
            listViewBtn.classList.add('bg-gray-200', 'text-gray-600');
            listViewBtn.classList.remove('bg-coral', 'text-white');
            renderProducts();
        });
        
        listViewBtn.addEventListener('click', () => {
            productsGrid.className = 'space-y-6 list-view';
            listViewBtn.classList.add('bg-coral', 'text-white');
            listViewBtn.classList.remove('bg-gray-200', 'text-gray-600');
            gridViewBtn.classList.add('bg-gray-200', 'text-gray-600');
            gridViewBtn.classList.remove('bg-coral', 'text-white');
            renderProducts();
        });
    }
}

function clearAllFilters() {
    // Reset filter values
    currentFilters = {
        search: '',
        category: 'all',
        priceRange: [0, 200],
        colors: [],
        sizes: [],
        sortBy: 'featured'
    };
    
    // Reset form elements
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceRange = document.getElementById('price-range');
    const sortFilter = document.getElementById('sort-filter');
    
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'all';
    if (priceRange) {
        priceRange.value = 200;
        document.getElementById('price-value').textContent = '$0 - $200';
    }
    if (sortFilter) sortFilter.value = 'featured';
    
    // Uncheck all color and size checkboxes
    document.querySelectorAll('input[name="color"], input[name="size"]').forEach(input => {
        input.checked = false;
    });
    
    // Apply filters
    applyFilters();
}

function toggleFilterSidebar() {
    const sidebar = document.querySelector('.filter-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('translate-x-0');
        sidebar.classList.toggle('translate-x-full');
    }
}

// Cart functionality
function addToCart(productId, quantity = 1, size = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // If no size specified and product has multiple sizes, show size selection
    if (!size && product.sizes.length > 1 && product.sizes[0] !== 'One Size') {
        showSizeSelector(productId, quantity);
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`, 'success');
    
    // Add animation to cart icon
    animateCartIcon();
}

function removeFromCart(productId, size = null) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCartCount();
    
    // Update cart display if on cart page
    if (getCurrentPage() === 'cart.html') {
        renderCartItems();
        updateCartSummary();
    }
}

function updateCartQuantity(productId, size, quantity) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartCount();
            
            // Update cart display if on cart page
            if (getCurrentPage() === 'cart.html') {
                updateCartSummary();
            }
        }
    }
}

function saveCart() {
    localStorage.setItem('nexusCart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
        element.style.display = cartCount > 0 ? 'block' : 'none';
    });
}

function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        anime({
            targets: cartIcon,
            scale: [1, 1.2, 1],
            duration: 300,
            easing: 'easeInOutSine'
        });
    }
}

// Cart page initialization
function initializeCartPage() {
    renderCartItems();
    updateCartSummary();
    initializePromoCode();
    initializeCheckoutProcess();
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-6xl mb-4">🛒</div>
                <h3 class="text-2xl font-semibold text-charcoal mb-2">Your cart is empty</h3>
                <p class="text-gray-600 mb-6">Discover our amazing products and add them to your cart!</p>
                <a href="products.html" class="bg-coral text-white px-8 py-3 rounded-full font-medium hover:bg-charcoal transition-colors duration-300">
                    Shop Now
                </a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return `
            <div class="cart-item bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6 reveal">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl">
                <div class="flex-1">
                    <h3 class="font-semibold text-charcoal text-lg mb-1">${item.name}</h3>
                    ${item.size && item.size !== 'One Size' ? `<p class="text-sm text-gray-600 mb-2">Size: ${item.size}</p>` : ''}
                    <p class="text-xl font-bold text-coral">$${item.price}</p>
                </div>
                <div class="flex items-center gap-4">
                    <div class="flex items-center bg-gray-100 rounded-full">
                        <button onclick="updateCartQuantity(${item.id}, '${item.size}', ${item.quantity - 1})" 
                                class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-coral transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                            </svg>
                        </button>
                        <span class="px-4 font-medium">${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, '${item.size}', ${item.quantity + 1})" 
                                class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-coral transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </button>
                    </div>
                    <button onclick="removeFromCart(${item.id}, '${item.size}')" 
                            class="text-gray-400 hover:text-red-500 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const discount = getDiscountAmount();
    const total = subtotal + shipping + tax - discount;
    
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const discountEl = document.getElementById('discount-amount');
    const discountRow = document.getElementById('discount-row');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (discountEl) discountEl.textContent = `-$${discount.toFixed(2)}`;
    if (discountRow) discountRow.classList.toggle('hidden', discount === 0);
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function initializePromoCode() {
    const form = document.getElementById('promo-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const promoCode = form.querySelector('input').value.trim().toUpperCase();
            applyPromoCode(promoCode);
        });
    }
}

function applyPromoCode(code) {
    const validCodes = {
        'WELCOME10': { discount: 0.10, type: 'percentage' },
        'SAVE20': { discount: 0.20, type: 'percentage', minOrder: 100 },
        'FREESHIP': { discount: 9.99, type: 'fixed', appliesTo: 'shipping' }
    };
    
    const promoData = validCodes[code];
    
    if (promoData) {
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        // Check minimum order requirement
        if (promoData.minOrder && subtotal < promoData.minOrder) {
            showNotification(`Minimum order of $${promoData.minOrder} required for this code`, 'error');
            return;
        }
        
        // Store applied promo code
        localStorage.setItem('appliedPromoCode', code);
        
        // Update UI
        const promoInput = document.querySelector('#promo-form input');
        if (promoInput) promoInput.value = '';
        
        updateCartSummary();
        showNotification(`Promo code "${code}" applied successfully!`, 'success');
    } else {
        showNotification('Invalid promo code', 'error');
    }
}

function getDiscountAmount() {
    const appliedCode = localStorage.getItem('appliedPromoCode');
    if (!appliedCode) return 0;
    
    const validCodes = {
        'WELCOME10': { discount: 0.10, type: 'percentage' },
        'SAVE20': { discount: 0.20, type: 'percentage', minOrder: 100 },
        'FREESHIP': { discount: 9.99, type: 'fixed', appliesTo: 'shipping' }
    };
    
    const promoData = validCodes[appliedCode];
    if (!promoData) return 0;
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    if (promoData.type === 'percentage') {
        return subtotal * promoData.discount;
    } else if (promoData.appliesTo === 'shipping') {
        const shipping = subtotal > 100 ? 0 : 9.99;
        return Math.min(promoData.discount, shipping);
    }
    
    return 0;
}

function initializeCheckoutProcess() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Your cart is empty', 'error');
                return;
            }
            
            // Simulate checkout process
            showNotification('Redirecting to checkout...', 'info');
            setTimeout(() => {
                showNotification('Checkout feature coming soon!', 'info');
            }, 1500);
        });
    }
}

// About page initialization
function initializeAboutPage() {
    initializeTimelineAnimations();
    initializeTeamProfiles();
    initializeContactForm();
    initializeStatsCounters();
}

function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        anime({
            targets: item,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: index * 200,
            easing: 'easeOutQuart'
        });
    });
}

function initializeTeamProfiles() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('.team-overlay'),
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('.team-overlay'),
                opacity: [1, 0],
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });
}

function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        form.reset();
    });
}

function initializeStatsCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                
                anime({
                    targets: { value: 0 },
                    value: finalValue,
                    duration: 2000,
                    easing: 'easeOutQuart',
                    update: function(anim) {
                        target.textContent = Math.round(anim.animatables[0].target.value);
                    }
                });
                
                observer.unobserve(target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create quick view modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-8">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="text-3xl font-bold text-charcoal">${product.name}</h2>
                    <button onclick="closeQuickView()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="${product.image}" alt="${product.name}" class="w-full h-96 object-cover rounded-xl">
                    </div>
                    <div>
                        <div class="flex items-center gap-2 mb-4">
                            <span class="text-yellow-400 text-xl">★</span>
                            <span class="font-medium">${product.rating}</span>
                            <span class="text-gray-500">(Based on reviews)</span>
                        </div>
                        <p class="text-gray-600 mb-6">${product.description}</p>
                        <div class="mb-6">
                            <h4 class="font-semibold text-charcoal mb-2">Available Sizes:</h4>
                            <div class="flex gap-2">
                                ${product.sizes.map(size => `
                                    <button class="size-btn border-2 border-gray-200 px-4 py-2 rounded-lg hover:border-coral hover:text-coral transition-colors" 
                                            onclick="selectSize(this, '${size}')">${size}</button>
                                `).join('')}
                            </div>
                        </div>
                        <div class="flex items-center justify-between mb-6">
                            <span class="text-4xl font-bold text-coral">$${product.price}</span>
                            ${product.inStock ? 
                                '<span class="text-green-600 font-medium">✓ In Stock</span>' : 
                                '<span class="text-red-600 font-medium">Out of Stock</span>'
                            }
                        </div>
                        <button onclick="addToCartFromQuickView(${product.id})" 
                                class="w-full bg-charcoal text-white py-4 rounded-full font-medium hover:bg-coral transition-colors duration-300 transform hover:scale-105">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Store selected size
    modal.dataset.selectedSize = product.sizes[0];
    
    // Animate modal appearance
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

function closeQuickView() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        anime({
            targets: modal,
            opacity: [1, 0],
            duration: 300,
            easing: 'easeOutQuart',
            complete: () => modal.remove()
        });
    }
}

function selectSize(button, size) {
    // Remove active class from all size buttons
    button.parentElement.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('border-coral', 'bg-coral', 'text-white');
        btn.classList.add('border-gray-200');
    });
    
    // Add active class to selected button
    button.classList.remove('border-gray-200');
    button.classList.add('border-coral', 'bg-coral', 'text-white');
    
    // Store selected size
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.dataset.selectedSize = size;
    }
}

function addToCartFromQuickView(productId) {
    const modal = document.querySelector('.fixed.inset-0');
    const selectedSize = modal ? modal.dataset.selectedSize : null;
    
    addToCart(productId, 1, selectedSize);
    closeQuickView();
}

function showSizeSelector(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 class="text-2xl font-bold text-charcoal mb-6 text-center">Select Size</h3>
            <div class="grid grid-cols-3 gap-3 mb-8">
                ${product.sizes.map(size => `
                    <button class="size-select-btn border-2 border-gray-200 py-3 rounded-lg hover:border-coral hover:text-coral transition-colors" 
                            onclick="confirmSizeSelection(${productId}, '${size}', ${quantity})">${size}</button>
                `).join('')}
            </div>
            <button onclick="closeSizeSelector()" 
                    class="w-full bg-gray-200 text-charcoal py-3 rounded-full font-medium hover:bg-gray-300 transition-colors">
                Cancel
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal appearance
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

function confirmSizeSelection(productId, size, quantity) {
    addToCart(productId, quantity, size);
    closeSizeSelector();
}

function closeSizeSelector() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal && modal.querySelector('.size-select-btn')) {
        anime({
            targets: modal,
            opacity: [1, 0],
            duration: 300,
            easing: 'easeOutQuart',
            complete: () => modal.remove()
        });
    }
}

// Notification system
function initializeNotificationSystem() {
    const notificationContainer = document.createElement('div');
    notificationContainer.id = 'notification-container';
    notificationContainer.className = 'fixed top-4 right-4 z-50 space-y-2';
    document.body.appendChild(notificationContainer);
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification bg-white border-l-4 rounded-lg shadow-lg p-4 max-w-sm transform translate-x-full transition-transform duration-300`;
    
    const colors = {
        success: 'border-green-500',
        error: 'border-red-500',
        warning: 'border-yellow-500',
        info: 'border-blue-500'
    };
    
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };
    
    notification.classList.add(colors[type]);
    notification.innerHTML = `
        <div class="flex items-start">
            <div class="flex-shrink-0 text-2xl mr-3">${icons[type]}</div>
            <div class="flex-1">
                <p class="text-sm font-medium text-charcoal">${message}</p>
            </div>
            <button onclick="closeNotification(this)" class="ml-4 text-gray-400 hover:text-gray-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        closeNotification(notification.querySelector('button'));
    }, 5000);
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    if (notification) {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }
}

// Scroll animations
function initializeScrollAnimations() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initializeRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutQuart'
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => observer.observe(element));
}

function addProductHoverAnimations() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Initialize everything when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}