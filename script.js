// Enregistrement du plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

// --- 1. Gestion du Curseur ---
const cursor = document.getElementById('cursor');
const outline = document.getElementById('cursor-outline');
const clickables = document.querySelectorAll('.clickable');

window.addEventListener('mousemove', (e) => {
    // Le point central suit immédiatement
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
    // Le cercle suit avec un léger retard (smooth)
    gsap.to(outline, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.15 });
});

// Effet du curseur sur les éléments interactifs
clickables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(outline, { scale: 1.5, borderColor: '#d5001c', backgroundColor: 'rgba(213, 0, 28, 0.1)', duration: 0.3 });
        gsap.to(cursor, { scale: 0.5, duration: 0.3 });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(outline, { scale: 1, borderColor: 'rgba(255, 255, 255, 0.5)', backgroundColor: 'transparent', duration: 0.3 });
        gsap.to(cursor, { scale: 1, duration: 0.3 });
    });
});

// --- 2. Loader et Animation d'Entrée ---
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to(".bar", { width: "100%", duration: 1.2, ease: "power2.inOut" })
      .to("#loader", { yPercent: -100, duration: 0.8, ease: "power4.inOut" })
      .from("#hero-title", { opacity: 0, y: 100, duration: 1, ease: "expo.out" }, "-=0.2")
      .from(".hero p", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");
});

// --- 3. Animations au Défilement (Reveal) ---
gsap.utils.toArray(".reveal").forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 92%", // Déclenche l'animation quand l'élément est à 92% du haut
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});