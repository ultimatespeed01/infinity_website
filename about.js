document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.getElementById('navbarToggler');
    const navbar = document.getElementById('navbarNav');

    // Toggle the menu visibility and the hamburger animation
    toggler.addEventListener('click', function () {
        toggler.classList.toggle('toggle-active');
        navbar.classList.toggle('-translate-y-full');
        navbar.classList.toggle('opacity-0');
        navbar.classList.toggle('pointer-events-none');

        // Toggle bar animations
        const bars = toggler.querySelectorAll('.bar');
        bars[0].classList.toggle('rotate-45');
        bars[0].classList.toggle('translate-y-1.5');

        bars[1].classList.toggle('opacity-0');

        bars[2].classList.toggle('-rotate-45');
        bars[2].classList.toggle('-translate-y-1.5');
    });
});
const cards = document.querySelectorAll('.card');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add fade-in effect
            observer.unobserve(entry.target);
        }
    });
}, options);

cards.forEach(card => {
    observer.observe(card);
});



   // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the visible class when the element comes into view
    function animateOnScroll() {
        const fadeElements = document.querySelectorAll('.card, .title-card'); // Select all cards and title cards
        fadeElements.forEach((el) => {
            if (isElementInViewport(el)) {
                el.classList.add('fade-in', 'visible'); // Add both classes when in viewport
            }
        });
    }

    // Event listeners for scroll and DOMContentLoaded
    window.addEventListener('scroll', animateOnScroll);
    document.addEventListener('DOMContentLoaded', animateOnScroll);

    //Cursor code
    // Get cursor and glitter elements
const cursor = document.querySelector('.cursor');
const glitter = document.querySelector('.glitter');

// Update cursor position on mouse move
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Show glitter effect at the cursor position
    glitter.style.left = `${e.clientX}px`;
    glitter.style.top = `${e.clientY}px`;
    glitter.style.opacity = '1';

    // Hide glitter effect after animation
    setTimeout(() => {
        glitter.style.opacity = '0';
    }, 200); // Adjust timing to match glitter animation duration
});