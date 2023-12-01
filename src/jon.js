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

  
  document.addEventListener("DOMContentLoaded", function () {
    const clogo = document.querySelector(".client-logo");
    const logos = document.querySelectorAll(".cl-logo");
    let currentIndex = 0;
    let startX;
  
    function showLogo(index) {
      const logoWidth = logos[0].offsetWidth;
      clogo.style.transform = `translateX(${-index * logoWidth}px)`;
    }
  
    function nextLogo() {
      currentIndex = (currentIndex + 1) % logos.length;
      showLogo(currentIndex);
    }
  
    function prevLogo() {
      currentIndex = (currentIndex - 1 + logos.length) % logos.length;
      showLogo(currentIndex);
    }
  
    function startSwipe(e) {
      startX = e.clientX || e.touches[0].clientX;
    }
  
    function endSwipe(e) {
      if (startX === undefined) return;
      const endX = e.clientX || e.changedTouches[0].clientX;
      const diffX = startX - endX;
  
      if (diffX > 50) {
        nextLogo();
      } else if (diffX < -50) {
        prevLogo();
      }
  
      startX = undefined;
    }
  
    clogo.addEventListener("mousedown", startSwipe);
    clogo.addEventListener("touchstart", startSwipe);
  
    clogo.addEventListener("mouseup", endSwipe);
    clogo.addEventListener("touchend", endSwipe);
  });
  
  