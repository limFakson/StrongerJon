document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".slide-container");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentSlide = 0;
    let startX;
  
    function showSlide(index) {
      const slideWidth = slides[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-index * slideWidth}px)`;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % 3;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
  
    function startTouch(e) {
      startX = e.touches[0].clientX;
    }
  
    function moveTouch(e) {
      if (startX === undefined) return;
      const currentX = e.touches[0].clientX;
      const diffX = startX - currentX;
  
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        startX = undefined;
      }
    }
  
    // document.querySelector(".next").addEventListener("click", nextSlide);
    // document.querySelector(".prev").addEventListener("click", prevSlide);
  
    // slideContainer.addEventListener("touchstart", startTouch);
    // slideContainer.addEventListener("touchmove", moveTouch);
  
    // Automatic swipe every 3 seconds
    setInterval(function () {
      nextSlide();
    }, 3000);
  });
  