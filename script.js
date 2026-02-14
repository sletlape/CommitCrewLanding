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
            storeLinkBtn.href = "https://apps.apple.com/app/commitcrew";
            storeLinkBtn.textContent = "Download on App Store";
        }
    } else if (/android/i.test(userAgent)) {
        if (androidBtn) androidBtn.classList.add('highlight-btn');
        if (storeLinkBtn) {
            storeLinkBtn.href = "https://play.google.com/store/apps/details?id=com.commitcrew.app";
            storeLinkBtn.textContent = "Get on Google Play";
        }
    } else {
        // Desktop or other - Default behaviors
        if (storeLinkBtn) storeLinkBtn.href = "#features";
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
});
