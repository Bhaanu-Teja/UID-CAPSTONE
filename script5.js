document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            
            button.classList.toggle("active");
            
            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+";
                button.style.color = "#2c3e50";
            } else {
                answer.style.display = "block";
                icon.textContent = "-";
                button.style.color = "#3498db";
            }
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    document.querySelectorAll('.footer-section a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#3498db';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#bdc3c7';
        });
    });
});