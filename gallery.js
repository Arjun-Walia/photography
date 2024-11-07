const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.getElementById("close");

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block"; 
    modalImage.src = image.src; 
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; 
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; 
  }
});
