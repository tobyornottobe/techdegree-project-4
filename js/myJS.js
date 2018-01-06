
// Carousel

$('.slides').slick({
  slidesPerRow: 4,
  rows: 4,
  infinite: false,
  speed: 300,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesPerRow: 1,
        rows: 12,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Lightbox

$('.slides').slickLightbox({
  itemSelector        : 'a',
  navigateByKeyboard  : true,
  caption: 'caption',

});

// Search



  $('.slides a').each(function(){
    var $caption = $(this).attr('data-caption').toLowerCase();
  });

  $( "#search" ).keyup(function() {
    var userInput = $(this).val().toLowerCase();

    $('.slides a').each(function(){

        if ($(this).filter('[data-caption *= ' + userInput + ']').length > 0 || userInput.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
  });
