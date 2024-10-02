    document.addEventListener('DOMContentLoaded', function () {
        const toggler = document.getElementById('navbarToggler');
        const navbar = document.getElementById('navbarNav');

        // Toggle the menu visibility and the hamburger animation
        toggler.addEventListener('click', function () {
            toggler.classList.toggle('toggle-active')
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
        })
    })
