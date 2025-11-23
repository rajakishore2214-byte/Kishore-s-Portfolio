document.addEventListener('DOMContentLoaded', () => {
    /* Menu Toggle */
    let menuBtn = document.querySelector('.menu-btn');
    let navbar = document.querySelector('.navbar');

    if (menuBtn && navbar) {
        menuBtn.onclick = () => {
            menuBtn.classList.toggle('active');
            navbar.classList.toggle('active');
        };
    }

    /* Active Link on Scroll */
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (activeLink) activeLink.classList.add('active');
                });
            };
        });

        /* Sticky Navbar */
        let header = document.querySelector('header');
        if (header) header.classList.toggle('sticky', window.scrollY > 100);

        /* Remove toggle icon and navbar when click navbar link (scroll) */
        if (menuBtn) menuBtn.classList.remove('active');
        if (navbar) navbar.classList.remove('active');
    };

    /* Scroll Reveal */
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    }

    /* Typed JS */
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('.multiple-text', {
            strings: ['Lead Generation Specialist', 'SEO Executive', 'Web Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    /* Custom Cursor */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }
});
