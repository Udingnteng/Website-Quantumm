// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const targetPosition = target.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Durasi animasi dalam milidetik
  
      let start = null;
      requestAnimationFrame(step);
  
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) requestAnimationFrame(step);
      }
    });
  });
  
  // Easing function
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }  