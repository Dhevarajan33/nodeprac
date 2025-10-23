$(document).ready(function () {
  let currentIndex = 0;
  const images = $(".slider img");
  const totalImages = images.length;
  let autoSlide;
  let isPlaying = true;

  // Generate dots dynamically
  for (let i = 0; i < totalImages; i++) {
    $(".dots").append("<span></span>");
  }
  const dots = $(".dots span");
  dots.eq(0).addClass("active");

  // Function to show image
  function showImage(index) {
    images.removeClass("active").eq(index).addClass("active");
    dots.removeClass("active").eq(index).addClass("active");
  }

  // Next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  // Prev image
  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  // Auto slide
  function startAutoSlide() {
    autoSlide = setInterval(nextImage, 3000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Buttons
  $("#next").click(nextImage);
  $("#prev").click(prevImage);

  // Play/Pause toggle
  $("#playPause").click(function () {
    if (isPlaying) {
      stopAutoSlide();
      $(this).text("▶ Play");
    } else {
      startAutoSlide();
      $(this).text("⏸ Pause");
    }
    isPlaying = !isPlaying;
  });

  // Dots click
  dots.click(function () {
    currentIndex = $(this).index();
    showImage(currentIndex);
  });

  // Start auto slide
  startAutoSlide();
});
