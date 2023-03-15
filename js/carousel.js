$(document).ready(function () {
  // Set up variables
  var carousel = $('.carousel');
  var carouselItems = carousel.find('.carousel-item');
  var prevButton = carousel.find('.carousel-control.prev');
  var nextButton = carousel.find('.carousel-control.next');
  var currentIndex = 0;

  // Show the first image
  carouselItems.eq(currentIndex).addClass('active');

  // Handle click event for the previous button
  prevButton.on('click', function () {
    // Hide the current image
    carouselItems.eq(currentIndex).removeClass('active');

    // Move to the previous image
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;

    // Show the previous image
    carouselItems.eq(currentIndex).addClass('active');
  });

  // Handle click event for the next button
  nextButton.on('click', function () {
    // Hide the current image
    carouselItems.eq(currentIndex).removeClass('active');

    // Move to the next image
    currentIndex = (currentIndex + 1) % carouselItems.length;

    // Show the next image
    carouselItems.eq(currentIndex).addClass('active');
  });
});
