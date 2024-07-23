// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const typewriterElement2 = document.getElementById('typewriter2');
const typewriterText = "Sr. Software Engineer (Full- Stack PHP Developer)";
let typewriterIndex = 0;

function typewriter() {
    if (typewriterIndex < typewriterText.length) {
        typewriterElement.textContent += typewriterText.charAt(typewriterIndex);
        typewriterIndex++;
        setTimeout(typewriter, 100);    
    }
}



document.addEventListener('DOMContentLoaded', typewriter);



// Smooth scrolling for navigation links
document.querySelectorAll('.sidebar-nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        const targetPosition = targetElement.offsetTop - 50; // Adjust the offset
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Remove active class from all links
        document.querySelectorAll('.sidebar-nav ul li a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Add sticky class to sidebar nav on scroll
window.addEventListener('scroll', function() {
    const sidebarNav = document.querySelector('.sidebar-nav');
    const headerHeight = document.querySelector('.main-header').offsetHeight;

    if (window.scrollY >= headerHeight) {
        sidebarNav.classList.add('sticky');
    } else {
        sidebarNav.classList.remove('sticky');
    }

    // Update active link based on scroll position
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.sidebar-nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
