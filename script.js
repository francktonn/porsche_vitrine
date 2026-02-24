gsap.registerPlugin(ScrollTrigger);

// 1. Détection Mobile / Desktop
const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

// 2. Curseur (Desktop uniquement)
if (!isTouch) {
    const cursor = document.querySelector('#cursor');
    const outline = document.querySelector('#cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(outline, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.15 });
    });
}

// 3. Menu Burger
const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    // Animation simple des barres du burger
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = menu.classList.contains('active') ? 'rotate(45deg) translateY(10px)' : 'none';
    spans[1].style.transform = menu.classList.contains('active') ? 'rotate(-45deg) translateY(-10px)' : 'none';
});

// 4. Loader & Intro
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".bar", { width: "100%", duration: 1 })
      .to("#loader", { yPercent: -100, duration: 0.8, ease: "power4.inOut" })
      .from("#hero-title", { opacity: 0, y: 80, duration: 1.2, ease: "expo.out" }, "-=0.2");
});

// 5. Scroll Reveals
gsap.utils.toArray(".reveal").forEach(el => {
    gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 90%" },
        opacity: 1, y: 0, duration: 1, ease: "power2.out"
    });
});