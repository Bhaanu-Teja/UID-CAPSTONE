// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderLeftColor = '#ff00ff';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderLeftColor = '#6a00f4';
        });
    });
});