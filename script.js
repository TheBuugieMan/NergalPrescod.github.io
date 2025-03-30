const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  });
  
  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
  
  function triggerCloudTransition() {
    const container = document.getElementById('cloud-transition');
    container.style.display = 'block';
  
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
      cloud.style.animation = 'none';
      cloud.offsetHeight; // Force reflow
      cloud.style.animation = ''; // Restart animation
    });
  
    setTimeout(() => {
      container.style.display = 'none';
    }, 3500); // Slightly longer than your animation
  }