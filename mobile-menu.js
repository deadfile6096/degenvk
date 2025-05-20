// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const toggleLeftSidebar = document.getElementById('toggleLeftSidebar');
    const toggleRightSidebar = document.getElementById('toggleRightSidebar');
    const leftSidebar = document.querySelector('.left-sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    const mainContent = document.getElementById('mainContent');
    
    // Create overlay for mobile menu
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    // Toggle left sidebar
    function toggleLeftMenu() {
        leftSidebar.classList.toggle('active');
        rightSidebar.classList.remove('active');
        overlay.classList.toggle('active', leftSidebar.classList.contains('active'));
        document.body.classList.toggle('modal-open', leftSidebar.classList.contains('active'));
    }
    
    // Toggle right sidebar
    function toggleRightMenu() {
        rightSidebar.classList.toggle('active');
        leftSidebar.classList.remove('active');
        overlay.classList.toggle('active', rightSidebar.classList.contains('active'));
        document.body.classList.toggle('modal-open', rightSidebar.classList.contains('active'));
    }
    
    // Close sidebars when clicking outside
    function closeAllMenus() {
        leftSidebar.classList.remove('active');
        rightSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    
    // Event listeners
    if (toggleLeftSidebar) {
        toggleLeftSidebar.addEventListener('click', toggleLeftMenu);
    }
    
    if (toggleRightSidebar) {
        toggleRightSidebar.addEventListener('click', toggleRightMenu);
    }
    
    // Close on overlay click
    overlay.addEventListener('click', closeAllMenus);
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllMenus();
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.left-sidebar a, .right-sidebar a').forEach(link => {
        link.addEventListener('click', closeAllMenus);
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 1024) {
                closeAllMenus();
            }
        }, 250);
    });
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
}

// Prevent body scroll when modal is open
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
            if (document.body.classList.contains('modal-open')) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = '';
            }
        }
    });
});

observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
});
