$( document ).ready(function() {
  ///////////////////////////
  // Grid
  $('#load-grid').click(function() {
    $('#grid').toggleClass( "container" )
    $('#grid').toggleClass( "container-fluid" )
  })

  ///////////////////////////
  // Zoom
  $('img.img-original')
    .wrap('<span style="display:inline-block" class="zoom"></span>')
    .css('display', 'block')
    .parent()
    .zoom()

  $('.zoom').zoom()
  .on('mouseenter', triggerSiblingsZoom)
  .on('mouseleave', triggerSiblingsZoom)
  .on('mousemove', triggerSiblingsZoom)

  function triggerSiblingsZoom(e) {
    let $target = $(e.currentTarget)
    $target.parent().parent().find('.zoom').not(e.currentTarget).each(function () {
      let event = $.Event(e.type + '.zoom')
      let xOffset = $target.offset().left - $(this).offset().left
      let yOffset = $target.offset().top - $(this).offset().top
      event.pageX = e.pageX - xOffset
      event.pageY = e.pageY - yOffset
      $(this).trigger(event)
    })
  }

  ///////////////////////////
  // Btn return to top
  $('.btn-to-top').hide()
  $(window).scroll(function() {
    if($(this).scrollTop()>0) {
      $('.btn-to-top').fadeIn()
    }
    else {
      $('.btn-to-top').fadeOut()
    }
  })

  $('.btn-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    })
  })

  ///////////////////////////
  // Filters
  $('#filter-all').click(function() {
    $('.accordion .row-group').each(function(index, element) {
        $(element).show()
    })
  })

  $('#filter-before').click(function() {
    $('.accordion .row-group').each(function(index, element) {
      $(element).show()
      let before = $(element).find('img.img-before').length
      let after = $(element).find('img.img-after').length
      let diff = $(element).find('img.img-diff').length

      if(
          (before == 1 && after == 1 && diff == 1) ||
          (before == 0 && after == 1 && diff == 0)) {
            $(element).hide()
      }
    })
  })

  $('#filter-after').click(function() {
    $('.accordion .row-group').each(function(index, element) {
      $(element).show()
      let before = $(element).find('img.img-before').length
      let after = $(element).find('img.img-after').length
      let diff = $(element).find('img.img-diff').length

      if (
          (before == 1 && after == 1 && diff == 1) ||
          (before == 1 && after == 0 && diff == 0)) {
            $(element).hide()
      }
    })
  })

  $('#filter-diff').click(function() {
    $('.accordion .row-group').each(function(index, element) {
      $(element).show()
      let before = $(element).find('img.img-before').length
      let after = $(element).find('img.img-after').length
      let diff = $(element).find('img.img-diff').length

      if (
          (before == 1 && after == 0 && diff == 0) ||
          (before == 0 && after == 1 && diff == 0)) {
            $(element).hide()
      }
    })
  })

  ///////////////////////////
  // Accordion
  $('#accordion-collapse-show').click(function() {
    $('.row-group button').removeClass('collapsed')
    $('.collapse').addClass('show')
  })
  $('#accordion-collapse-hide').click(function() {
    $('.row-group button').addClass('collapsed')
    $('.collapse').removeClass('show')
  })

  ///////////////////////////
  // Date
  let nowDate = moment().format('dddd[, ] DD MMMM YYYY')
  $('.date').append(nowDate)

  ///////////////////////////
  // Approved
  $('button.btn-approved').click(function() {
    let approvedCurrent = $(this).attr('approved')

    $(this).toggleClass('btn-success')
    $(this).toggleClass('btn-outline-success')
    $('button#approved-' + approvedCurrent).toggleClass('approved')
  })

  ///////////////////////////
  // Print
  $('#print').click(function() {
    $('html').animate({
      scrollTop: 0
    }, function() {
      window.print();
    })
  })

  ///////////////////////////
  // Search
  $('#search').click(function() {
    let test;
    $('.search').toggleClass('showSearch')
    $( ".showSearch" ).focus();
  })

  $('#inputSearch').keyup(function(){
    let input, filter, imagesResult, accordion, p, i, txtValue;
    filter = $('#inputSearch').val().toUpperCase();
    accordion = $("#images-result .accordion");

    for (i = 0; i < accordion.length; i++) {
      // p = $(accordion[i] + ' p:eq(0)').prop("tagName")

      p = accordion[i].getElementsByTagName("p")[0]
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        accordion[i].style.display = "";
      } else {
        accordion[i].style.display = "none";
      }
    }
  })
})

///////////////////////////
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
let dots = [],
mouse = {
  x: 0,
  y: 0
};

// The Dot object used to scaffold the dots
let Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    let n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

// The Dot.prototype.draw() method sets the position of
// the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (let i = 0; i < 20; i++) {
  let d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
  // draw() is called.
  let x = mouse.x,
  y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    let nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .05;
    y += (nextDot.y - dot.y) * .05;
  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
