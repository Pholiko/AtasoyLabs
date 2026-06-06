// AtasoyLabs script
document.addEventListener('DOMContentLoaded', () => {
    console.log('AtasoyLabs initialized');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Scroll Animations using IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu Logic
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    if (navContainer && navLinks) {
        const toggleBtn = document.createElement('div');
        toggleBtn.classList.add('mobile-toggle');
        toggleBtn.innerHTML = '☰';
        navContainer.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            toggleBtn.innerHTML = navLinks.classList.contains('show') ? '✕' : '☰';
        });
    }
});
