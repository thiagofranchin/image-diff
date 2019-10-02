$( document ).ready(function() {

  // Grid
  $('#load-grid').click(function() {
    $('#grid').toggleClass( "container" );
    $('#grid').toggleClass( "container-fluid" );
  });

  // Zoom
  $('img.img-original')
    .wrap('<span style="display:inline-block" class="zoom"></span>')
    .css('display', 'block')
    .parent()
    .zoom();

  $('.zoom').zoom()
  .on('mouseenter', triggerSiblingsZoom)
  .on('mouseleave', triggerSiblingsZoom)
  .on('mousemove', triggerSiblingsZoom);


  function triggerSiblingsZoom(e) {
    let $target = $(e.currentTarget);
    $target.parent().parent().find('.zoom').not(e.currentTarget).each(function () {
      let event = $.Event(e.type + '.zoom');
      let xOffset = $target.offset().left - $(this).offset().left
      let yOffset = $target.offset().top - $(this).offset().top
      event.pageX = e.pageX - xOffset;
      event.pageY = e.pageY - yOffset;
      $(this).trigger(event);
    })
  }

  // Btn return to top
  $('.btn-to-top').hide();
  $(window).scroll(function() {
    if($(this).scrollTop()>0) {
      $('.btn-to-top').fadeIn();
    }
    else {
      $('.btn-to-top').fadeOut();
    }
  });

  $('.btn-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    });
  });

});
