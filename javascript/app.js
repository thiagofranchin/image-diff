$( document ).ready(function() {

  $('#load-images').click(function() {
    let qtdImages = $('#qtd-images').val();
    $('#content-images').html(``);

    if(qtdImages <= 0) {
      $('#content-images').append(`

        <div class="col-12 py-5">
          <h4 class="text-white text-center">Escolha um número maior que 0.</h4>
        </div>
      `)
    }
    else {
      for(let i = 0; i < qtdImages; i++){
        $('#content-images').append(`
          <div class="col-6 col-md-4 mb-1 p-1">
            <h6 class="text-danger">${i + 1} - Before</h6>
            <img src="before/before-${i + 1}.png" class="img-fluid">
          </div>
          <div class="col-6 col-md-4 p-1">
            <h6 class="text-danger">After</h6>
            <img src="after/after-${i + 1}.png" class="img-fluid">
          </div>
          <div class="col-12 col-md-4 p-1 mb-5">
            <h6 class="text-danger">Diff</h6>
            <img src="diff/diff-${i + 1}.png" class="img-fluid">
          </div>

        `);
      }
    }
  })

  $('#load-between-images').click(function() {
    let startImage = $('#start-image').val();
    let endImage = $('#end-image').val();
    $('#content-images').html(``);

    if(startImage <= endImage) {
      if(startImage <= 0) {
        $('#content-images').append(`
          <div class="col-12 py-5">
            <h4 class="text-white text-center">O valor <span class="text-danger">inicial</span> deve ser maior que 0.</h4>
          </div>
        `)
      }
      else if(endImage <= 0) {
        $('#content-images').append(`
          <div class="col-12 py-5">
            <h4 class="text-white text-center">O valor <span class="text-danger">final</span> deve ser igual ou maior que 1.</h4>
          </div>
        `)
      }
      else {
        for(let i = startImage; i <= endImage; i++){
          $('#content-images').append(`
            <div class="col-6 col-md-4 mb-1 p-1">
              <h6 class="text-white">${i} - Before</h6>
              <img src="before/before-${i}.png" class="img-fluid">
            </div>
            <div class="col-6 col-md-4 p-1">
              <h6 class="text-white">After</h6>
              <img src="after/after-${i}.png" class="img-fluid">
            </div>
            <div class="col-12 col-md-4 p-1 mb-5">
              <h6 class="text-white">Diff</h6>
              <img src="diff/diff-${i}.png" class="img-fluid">
            </div>
          `);
        }
      }

    }
    else {
      $('#content-images').append(`
      <div class="col-12 py-5">
        <h4 class="text-white text-center">
          O valor <span class="text-danger">inicial</span> deve ser igual ou menor ao
          valor <span class="text-danger">final</span>.
        </h4>
      </div>
      `)
    }
  })
});
