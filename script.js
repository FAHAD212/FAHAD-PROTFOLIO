// Typed.js Animation for the homepage
const typed = new Typed(".typed-text", {
    strings: ["Fahad", "a Digital Creator", "a Gamer", "a Dreamer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
  
  // Lightbox for photo gallery
  const galleryImages = document.querySelectorAll(".gallery img");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal img");
  
  // Open modal with clicked image
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  