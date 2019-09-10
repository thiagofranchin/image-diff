<?php
$folder = 'diff';
$list = new RecursiveDirectoryIterator($folder);
$recursive = new RecursiveIteratorIterator($list);
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.min.css">

    <title>Diff Img</title>

  </head>
  <body>
    <div class="container-fluid" id="grid">

      <div class="row py-3">
        <div class="col-12">
          <h1 class="text-danger text-center mb-5 mt-2">DIFF IMAGES</h1>
        </div>
        <div class="col-12">
          <button type="button"
            class="btn btn-danger btn-sm"
            id="load-grid">GRID</button>
        </div>
      </div>

      <div class="row px-3" id="content-images">
      <?php
      foreach($recursive as $obj) {
        if($obj->getFilename() != '.' && $obj->getFilename() != '..') {
      ?>

        <div class="col-6 col-md-4 mb-1 p-1">
          <h6 class="text-danger">Before</h6>
          <img src="before/<?php echo $obj->getFilename(); ?>" class="img-fluid">
        </div>

        <div class="col-6 col-md-4 p-1">
          <h6 class="text-danger">After</h6>
          <img src="after/<?php echo $obj->getFilename(); ?>" class="img-fluid">
        </div>
        <div class="col-12 col-md-4 p-1 mb-5">
          <h6 class="text-danger">Diff</h6>
          <img src="diff/<?php echo $obj->getFilename(); ?>" class="img-fluid">
        </div>

      <?php
      }}
      ?>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="javascript/app.js"></script>
  </body>
</html>