document.addEventListener('DOMContentLoaded', () => {
    // OS Detection
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const storeLinkBtn = document.querySelector('.store-link');
    const iosBtn = document.getElementById('ios-download');
    const androidBtn = document.getElementById('android-download');

    // Highlight appropriate store button
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        if (iosBtn) iosBtn.classList.add('highlight-btn');
        if (storeLinkBtn) {
            storeLinkBtn.href = "#download";
            storeLinkBtn.textContent = "Get the App";
        }
    } else if (/android/i.test(userAgent)) {
        if (androidBtn) androidBtn.classList.add('highlight-btn');
        if (storeLinkBtn) {
            storeLinkBtn.href = "https://expo.dev/accounts/kmo/projects/commitcrew/builds/a11df60e-45b1-4443-a4bc-66e84a3714c9";
            storeLinkBtn.textContent = "Download for Android";
        }
    } else {
        // Desktop or other - Default behaviors
        if (storeLinkBtn) storeLinkBtn.href = "#features";
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav-overlay');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    fadeElements.forEach(el => observer.observe(el));

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(9, 9, 11, 0.95)';
        } else {
            navbar.style.background = 'rgba(9, 9, 11, 0.8)';
        }
    });
});
