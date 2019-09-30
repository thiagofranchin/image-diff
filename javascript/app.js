$( document ).ready(function() {
  $('#load-grid').click(function() {
    $('#grid').toggleClass( "container" );
    $('#grid').toggleClass( "container-fluid" );
  });

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
});
