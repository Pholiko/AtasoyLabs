document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Simple mobile menu toggle (for demonstration)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '20px';
                navLinks.style.background = 'var(--color-surface)';
                navLinks.style.padding = '20px';
                navLinks.style.borderRadius = 'var(--border-radius-sm)';
                navLinks.style.border = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Hide mobile menu if open
                if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Dynamic Hero Card Content Rotation
    const usps = [
        { icon: 'star-outline', title: 'Höchstpreise & Fairness', text: 'Sofortige, ehrliche Bewertung Ihrer Geräte vor Ort.' },
        { icon: 'hardware-chip-outline', title: 'Geprüfte Qualität', text: 'Verkauf von hochwertiger und gecheckter Second-Hand-Ware.' },
        { icon: 'chatbubbles-outline', title: 'Persönliche Beratung', text: 'Fachkundige und ehrliche Beratung für jeden Kunden.' },
        { icon: 'build-outline', title: 'Reparatur & Wartung', text: 'Zuverlässige und schnelle Reparatur für Ihre Elektronik.' }
    ];

    let currentUspIndex = 0;
    const dynamicIcon = document.getElementById('dynamic-icon');
    const dynamicTitle = document.getElementById('dynamic-title');
    const dynamicText = document.getElementById('dynamic-text');

    if (dynamicIcon && dynamicTitle && dynamicText) {
        setInterval(() => {
            // Fade out
            dynamicIcon.style.opacity = '0';
            dynamicTitle.style.opacity = '0';
            dynamicText.style.opacity = '0';
            dynamicTitle.style.transform = 'translateY(5px)';
            dynamicText.style.transform = 'translateY(5px)';

            setTimeout(() => {
                // Change content
                currentUspIndex = (currentUspIndex + 1) % usps.length;
                dynamicIcon.setAttribute('name', usps[currentUspIndex].icon);
                dynamicTitle.textContent = usps[currentUspIndex].title;
                dynamicText.textContent = usps[currentUspIndex].text;

                // Fade in
                dynamicIcon.style.opacity = '1';
                dynamicTitle.style.opacity = '1';
                dynamicText.style.opacity = '1';
                dynamicTitle.style.transform = 'translateY(0)';
                dynamicText.style.transform = 'translateY(0)';
            }, 400); // Wait for fade out duration
        }, 3000); // Change every 3 seconds
    }
});
