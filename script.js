function showImage(imageName) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");

  modalImg.src = imageName;
  modal.style.display = "flex";

  // Prevent scrolling when modal is open
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  // Re-enable scrolling
  document.body.style.overflow = 'auto';
}
