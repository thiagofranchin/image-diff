<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="css/style.min.css">
    <!--[if IE]><link rel="shortcut icon" href="images/favicon.ico"><![endif]-->
    <link rel="icon" href="images/favicon.png">
    <title>Diff Img</title>
  </head>
  <body>
    <?php require 'menu.php'; ?>

    <div class="container-fluid" id="grid">
      <div class="row py-3">
        <div class="col-12">
          <h1 class="text-primary text-center mb-2 mt-2 title-page">DIFF IMAGES</h1>
        </div>
        <div class="col-12">
          <p class="date"></p>
        </div>
      </div>

      <?php require 'accordion.php'; ?>

    </div>

    <div class="btn-to-top text-white">
      <i class="fas fa-angle-up"></i>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js"></script>
    <script src="javascript/jquery.zoom.min.js"></script>
    <script src="javascript/moment.js"></script>
    <script src="javascript/app.js"></script>
  </body>
</html>
