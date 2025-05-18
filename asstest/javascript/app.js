function showMessage() {
    document.getElementById('message').textContent = "Thanks for clicking!";
}
  let index = 0;

  function moveSlide(step) {
    const images = document.getElementById('carousel-images');
    const totalSlides = images.children.length;
    index = (index + step + totalSlides) % totalSlides;
    images.style.transform = `translateX(-${index * 100}%)`;
  }
   function openPopup() {
    document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }