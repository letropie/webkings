/* WEBKINGS Logic */

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('h1, h2, p, .service-card, .form-group, .cta-button');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });

    // Simple Custom Scroll Effect (Parallax for Shapes)
    const shapes = document.querySelectorAll('.organic-shape');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1; 
            // Invert the movement slightly for a floating feel
            shape.style.transform = `translateY(${scrolled * speed}px)`; 
        });
    });

    // Cursor Follower (Optional - Keeping it simple for now or can expand)
    // const cursor = document.getElementById('cursor-follower');
    // document.addEventListener('mousemove', (e) => {
    //    cursor.style.left = e.clientX + 'px';
    //    cursor.style.top = e.clientY + 'px';
    // });
});
