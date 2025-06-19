// Global JavaScript for Mint Garage Theme

// Initialize theme functionality
document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initMobileMenu();
  initFormHandling();
  initLazyLoading();
  initSmoothScrolling();
  initCartFunctionality();
});

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  function openMobileMenu() {
    if (mobileMenu && mobileMenuPanel) {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        mobileMenuPanel.classList.remove('translate-x-full');
      }, 10);
    }
  }

  function closeMobileMenu() {
    if (mobileMenu && mobileMenuPanel) {
      mobileMenuPanel.classList.add('translate-x-full');
      document.body.style.overflow = '';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', openMobileMenu);
  }
  
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
}

// Form handling
function initFormHandling() {
  // Newsletter forms
  const newsletterForms = document.querySelectorAll('form[action*="contact"]');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      
      if (submitBtn) {
        submitBtn.innerHTML = 'SUBSCRIBING...';
        submitBtn.disabled = true;
        
        // Re-enable after delay
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  });

  // Contact forms
  const contactForms = document.querySelectorAll('.contact-form');
  
  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const submitBtn = form.querySelector('button[type="submit"]');
      
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
      }
    });
  });
}

// Lazy loading for images
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('loading-skeleton');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Cart functionality
function initCartFunctionality() {
  // Update cart count
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCountElements = document.querySelectorAll('#cart-count');
        cartCountElements.forEach(element => {
          element.textContent = cart.item_count;
        });
      })
      .catch(error => console.error('Error updating cart count:', error));
  }

  // Add to cart functionality
  document.addEventListener('click', function(e) {
    if (e.target.matches('.add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
      e.preventDefault();
      
      const button = e.target.matches('.add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
      const form = button.closest('form');
      
      if (form) {
        const formData = new FormData(form);
        
        button.disabled = true;
        button.textContent = 'Adding...';
        
        fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          updateCartCount();
          showCartNotification('Item added to cart!');
          button.disabled = false;
          button.textContent = 'Add to Cart';
        })
        .catch(error => {
          console.error('Error adding to cart:', error);
          button.disabled = false;
          button.textContent = 'Add to Cart';
          showCartNotification('Error adding item to cart', 'error');
        });
      }
    }
  });

  // Initial cart count update
  updateCartCount();
}

// Show cart notification
function showCartNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-montserrat transition-all duration-300 transform translate-x-full ${
    type === 'error' ? 'bg-red-500' : 'bg-green-500'
  }`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 10);
  
  // Animate out and remove
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Dealer search functionality
function initDealerSearch() {
  const searchInput = document.getElementById('dealer-search');
  const searchButton = document.getElementById('search-dealers');
  const dealersGrid = document.getElementById('dealers-grid');
  
  if (searchInput && searchButton && dealersGrid) {
    function performSearch() {
      const query = searchInput.value.toLowerCase().trim();
      const dealers = dealersGrid.querySelectorAll('.dealer-card');
      
      dealers.forEach(dealer => {
        const location = dealer.querySelector('.dealer-location')?.textContent.toLowerCase() || '';
        const name = dealer.querySelector('.dealer-name')?.textContent.toLowerCase() || '';
        
        if (query === '' || location.includes(query) || name.includes(query)) {
          dealer.style.display = 'block';
          dealer.classList.add('animate-fade-in-up');
        } else {
          dealer.style.display = 'none';
        }
      });
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });
  }
}

// Initialize dealer search
document.addEventListener('DOMContentLoaded', initDealerSearch);

// YouTube video handling
function initYouTubeVideos() {
  document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function(e) {
      e.preventDefault();
      
      const videoUrl = this.getAttribute('href');
      if (videoUrl && videoUrl.includes('youtube.com')) {
        // Extract video ID and create embed
        const videoId = videoUrl.split('v=')[1]?.split('&')[0];
        if (videoId) {
          const iframe = document.createElement('iframe');
          iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
          iframe.width = '100%';
          iframe.height = '100%';
          iframe.setAttribute('allowfullscreen', '');
          iframe.style.position = 'absolute';
          iframe.style.top = '0';
          iframe.style.left = '0';
          
          this.style.position = 'relative';
          this.innerHTML = '';
          this.appendChild(iframe);
        }
      }
    });
  });
}

// Initialize YouTube videos
document.addEventListener('DOMContentLoaded', initYouTubeVideos);

// Performance optimizations
function initPerformanceOptimizations() {
  // Debounce scroll events
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      // Scroll-based animations or effects here
    }, 16); // ~60fps
  }, { passive: true });
  
  // Preload critical resources
  const criticalImages = document.querySelectorAll('img[data-priority="high"]');
  criticalImages.forEach(img => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', initPerformanceOptimizations);

// Error handling
window.addEventListener('error', function(e) {
  console.error('Theme error:', e.error);
  // Could send to analytics or error reporting service
});

// Accessibility improvements
function initAccessibility() {
  // Skip to content functionality
  const skipLink = document.querySelector('.skip-to-content-link');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.focus();
        target.scrollIntoView();
      }
    });
  }
  
  // Keyboard navigation for dropdowns
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close any open dropdowns or modals
      const openDropdowns = document.querySelectorAll('.dropdown.open');
      openDropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibility);