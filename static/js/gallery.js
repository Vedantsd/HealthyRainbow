// Colorful Mouse Trail
const colors = [
    '#FF6B6B', // Red
    '#FFD93D', // Yellow
    '#6BCF7F', // Green
    '#4ECDC4', // Blue
    '#FF9A56', // Orange
    '#A78BFA', // Purple
    '#FF8FAB'  // Pink
];

let colorIndex = 0;

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.background = colors[colorIndex];
    
    document.body.appendChild(trail);
    
    // Cycle through colors
    colorIndex = (colorIndex + 1) % colors.length;
    
    // Remove trail after animation
    setTimeout(() => {
        trail.remove();
    }, 800);
});

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target.querySelector('img');
            if (img && img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            imageObserver.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '50px'
});

document.querySelectorAll('.gallery-item').forEach(item => {
    imageObserver.observe(item);
});

// Click to view fullscreen (optional enhancement)
document.querySelectorAll('.image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            // Create fullscreen overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            `;
            
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            `;
            
            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);
            
            // Close on click
            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        }
    });
});