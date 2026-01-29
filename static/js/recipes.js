const colors = [
    '#FF6B6B', 
    '#FFD93D', 
    '#6BCF7F', 
    '#4ECDC4', 
    '#FF9A56', 
    '#A78BFA', 
    '#FF8FAB'  
];

let colorIndex = 0;

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.background = colors[colorIndex];
    
    document.body.appendChild(trail);
    
    colorIndex = (colorIndex + 1) % colors.length;
    
    setTimeout(() => {
        trail.remove();
    }, 800);
});