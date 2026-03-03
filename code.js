function toggleProcess(header) {
    const item = header.parentElement;
    const allItems = document.querySelectorAll('.process-item');
    const toggle = header.querySelector('.process-toggle');
    const isActive = item.classList.contains('active');
    allItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.process-toggle').textContent = '+';
    });
    if (!isActive) {
      item.classList.add('active');
      toggle.textContent = '−';
    }
  }

  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));

  let currentDot = 0;
  const dots = document.querySelectorAll('.dot');
  function setDot(n) {
    dots.forEach(d => d.classList.remove('active'));
    currentDot = (n + dots.length) % dots.length;
    dots[currentDot].classList.add('active');
  }
  function nextTestimonial() { setDot(currentDot + 1); }
  function prevTestimonial() { setDot(currentDot - 1); }
  dots.forEach((d, i) => d.addEventListener('click', () => setDot(i)));