/**
 * Global JavaScript for Mint Garage Shopify Theme
 */

class MintGarage {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeIntersectionObserver();
    this.initializeCart();
    this.initializeMobileMenu();
    this.initializeSearch();
    this.initializeAnimations();
  }

  setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.handleFormSubmissions();
      this.handleProductActions();
      this.handleFilterToggle();
    });

    window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
    window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
  }

  // Intersection Observer for animations
  initializeIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .scale-in, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => this.observer.observe(el));
  }

  // Cart functionality
  initializeCart() {
    this.cart = {
      items: [],
      count: 0,
      total: 0
    };

    this.updateCartUI();
  }

  async addToCart(variantId, quantity = 1) {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            id: variantId,
            quantity: quantity
          }]
        })
      });

      if (response.ok) {
        const cartData = await response.json();
        this.updateCartCount();
        this.showNotification('Product added to cart!', 'success');
        return cartData;
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      this.showNotification('Error adding product to cart', 'error');
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      
      const cartCountElements = document.querySelectorAll('.cart-count');
      cartCountElements.forEach(element => {
        element.textContent = cart.item_count;
        element.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  updateCartUI() {
    // Update cart count display
    this.updateCartCount();
  }

  // Mobile menu functionality
  initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', () => {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
          mobileMenu.classList.remove('active');
          mobileToggle.classList.remove('active');
          body.classList.remove('menu-open');
        } else {
          mobileMenu.classList.add('active');
          mobileToggle.classList.add('active');
          body.classList.add('menu-open');
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
          mobileMenu.classList.remove('active');
          mobileToggle.classList.remove('active');
          body.classList.remove('menu-open');
        }
      });
    }
  }

  // Search functionality
  initializeSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchForm = document.querySelector('.search-form');
    
    if (searchToggle) {
      searchToggle.addEventListener('click', () => {
        if (searchForm) {
          searchForm.classList.toggle('active');
          const searchInput = searchForm.querySelector('input[type="search"]');
          if (searchInput && searchForm.classList.contains('active')) {
            searchInput.focus();
          }
        }
      });
    }
  }

  // Animation helpers
  initializeAnimations() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Parallax effect for hero sections
    this.initializeParallax();
  }

  initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length > 0) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
          const rate = scrolled * -0.5;
          element.style.transform = `translateY(${rate}px)`;
        });
      });
    }
  }

  // Form handling
  handleFormSubmissions() {
    // Newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
      form.addEventListener('submit', this.handleNewsletterSubmit.bind(this));
    });

    // Contact forms
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
      form.addEventListener('submit', this.handleContactSubmit.bind(this));
    });
  }

  handleNewsletterSubmit(e) {
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    
    if (!this.isValidEmail(email)) {
      e.preventDefault();
      this.showNotification('Please enter a valid email address', 'error');
      return;
    }

    // Add loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner spinner-sm"></div>';
    submitBtn.disabled = true;

    // Reset after form submission
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 3000);
  }

  handleContactSubmit(e) {
    const form = e.target;
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });

    if (!isValid) {
      e.preventDefault();
      this.showNotification('Please fill in all required fields', 'error');
    }
  }

  // Product actions
  handleProductActions() {
    // Quick add buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.quick-add-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.quick-add-btn');
        const variantId = btn.dataset.variantId;
        if (variantId) {
          this.addToCart(variantId);
        }
      }

      // Wishlist buttons
      if (e.target.closest('.wishlist-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.wishlist-btn');
        const productId = btn.dataset.productId;
        this.toggleWishlist(productId, btn);
      }
    });
  }

  toggleWishlist(productId, button) {
    const isActive = button.classList.contains('active');
    
    if (isActive) {
      button.classList.remove('active');
      this.showNotification('Removed from wishlist', 'info');
    } else {
      button.classList.add('active');
      this.showNotification('Added to wishlist', 'success');
    }

    // Store in localStorage
    let wishlist = JSON.parse(localStorage.getItem('mintgarage_wishlist') || '[]');
    
    if (isActive) {
      wishlist = wishlist.filter(id => id !== productId);
    } else {
      wishlist.push(productId);
    }
    
    localStorage.setItem('mintgarage_wishlist', JSON.stringify(wishlist));
  }

  // Filter toggle
  handleFilterToggle() {
    const filterToggles = document.querySelectorAll('.filter-toggle');
    
    filterToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const targetId = toggle.dataset.target;
        const target = document.querySelector(targetId);
        
        if (target) {
          target.classList.toggle('active');
          toggle.classList.toggle('active');
        }
      });
    });
  }

  // Scroll handling
  handleScroll() {
    const scrollY = window.scrollY;
    
    // Sticky header
    const header = document.querySelector('.main-header');
    if (header) {
      if (scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    if (scrollTopBtn) {
      if (scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  // Resize handling
  handleResize() {
    // Close mobile menu on resize
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && window.innerWidth > 768) {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }

  // Notification system
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.classList.add('visible');
    }, 100);

    // Auto hide after 5 seconds
    setTimeout(() => {
      this.hideNotification(notification);
    }, 5000);

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
      this.hideNotification(notification);
    });
  }

  hideNotification(notification) {
    notification.classList.remove('visible');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  // Utility functions
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Format currency
  formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    
    const value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || '${{amount}}';
    
    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      const parts = number.split('.');
      const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      const centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_space_separator':
        value = formatWithDelimiters(cents, 2, ' ', '.');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ', '.');
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'", '.');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }
}

// Initialize the application
const mintGarage = new MintGarage();

// Global function for cart operations
window.addToCart = function(variantId, quantity = 1) {
  return mintGarage.addToCart(variantId, quantity);
};

// Global function for showing notifications
window.showNotification = function(message, type = 'info') {
  mintGarage.showNotification(message, type);
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MintGarage;
}