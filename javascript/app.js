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

  // Filters
  $('#filter-all').click(function() {
    $('#accordionImagesDiff .row-group').each(function(index, element) {
        $(element).show();
    })
  });

  $('#filter-before').click(function() {
    $('#accordionImagesDiff .row-group').each(function(index, element) {
      $(element).show();
      let before = $(element).find('img.img-before').length;
      let after = $(element).find('img.img-after').length;
      let diff = $(element).find('img.img-diff').length;

      if(
          (before == 1 && after == 1 && diff == 1) ||
          (before == 0 && after == 1 && diff == 0)) {
            $(element).hide();
      }
    })
  });

  $('#filter-after').click(function() {
    $('#accordionImagesDiff .row-group').each(function(index, element) {
      $(element).show();
      let before = $(element).find('img.img-before').length;
      let after = $(element).find('img.img-after').length;
      let diff = $(element).find('img.img-diff').length;

      if (
          (before == 1 && after == 1 && diff == 1) ||
          (before == 1 && after == 0 && diff == 0)) {
            $(element).hide();
      }
    })
  });

  $('#filter-diff').click(function() {
    $('#accordionImagesDiff .row-group').each(function(index, element) {
      $(element).show();
      let before = $(element).find('img.img-before').length;
      let after = $(element).find('img.img-after').length;
      let diff = $(element).find('img.img-diff').length;

      if (
          (before == 1 && after == 0 && diff == 0) ||
          (before == 0 && after == 1 && diff == 0)) {
            $(element).hide();
      }
    })
  });

  // Accordion
  $('#accordion-collapse-show').click(function() {
    $('.row-group button').removeClass('collapsed');
    $('.collapse').addClass('show');
  })
  $('#accordion-collapse-hide').click(function() {
    $('.row-group button').addClass('collapsed');
    $('.collapse').removeClass('show');
  })

  // Date
  let nowDate = moment().format('dddd[, ] DD MMMM YYYY');
  $('.date').append(nowDate)
});
