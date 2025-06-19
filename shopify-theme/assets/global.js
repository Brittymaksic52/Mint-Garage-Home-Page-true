// Global JavaScript for Mint Garage Theme

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initCartFunctionality();
});

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const panel = document.getElementById('mobile-menu-panel');
  const close = document.getElementById('mobile-menu-close');
  const overlay = document.getElementById('mobile-menu-overlay');

  function open() {
    if (menu && panel) {
      menu.classList.remove('hidden');
      setTimeout(() => panel.classList.remove('translate-x-full'), 10);
    }
  }

  function closeMenu() {
    if (menu && panel) {
      panel.classList.add('translate-x-full');
      setTimeout(() => menu.classList.add('hidden'), 300);
    }
  }

  btn?.addEventListener('click', open);
  close?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
}



function initCartFunctionality() {
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        document.querySelectorAll('#cart-count').forEach(el => {
          el.textContent = cart.item_count;
        });
      });
  }

  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.add-to-cart-btn');
    if (btn) {
      e.preventDefault();
      const form = btn.closest('form');
      if (form) {
        btn.disabled = true;
        btn.textContent = 'Adding...';
        
        fetch('/cart/add.js', {
          method: 'POST',
          body: new FormData(form)
        })
        .then(() => {
          updateCartCount();
          btn.textContent = 'Added!';
          setTimeout(() => {
            btn.disabled = false;
            btn.textContent = 'Add to Cart';
          }, 1000);
        });
      }
    }
  });

  updateCartCount();
}