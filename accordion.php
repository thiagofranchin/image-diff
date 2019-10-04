<div class="accordion px-3 pb-5" id="accordionImagesDiff">
  <?php
  require 'compare.php';
  $recursive = compare();
  foreach($recursive as $key => $obj) {
  ?>
  <div class="row-group">
    <div class="row">
      <button class="col-12 py-2 btn-outline-light btn text-left bar-title-image" type="button" data-toggle="collapse" data-target="#collapse<?php echo $key; ?>" aria-expanded="true" aria-controls="collapse<?php echo $key; ?>">
        <p class="text-primary name-image d-flex justify-content-between"><?php echo $obj; ?> <i class="fas fa-angle-down mt-1"></i></p>
      </button>
    </div>

    <div id="collapse<?php echo $key; ?>" class="collapse show row crosshair" aria-labelledby="headingOne" data-parent="#accordionImagesDiff">
      <!-- Before -->
      <div class="col-md-4 mb-1 p-1 box box-before">
        <h6 class="text-primary">Before </h6>
        <?php
        if (file_exists('images/before/'.$obj)) {
          echo '<img src="images/before/' .$obj.'" class="img-fluid img-original img-before">';
        }
        else {
          echo '<div class="no-image">
                  <span>No image...</span>
                  <i class="far fa-sad-tear"></i>
                </div>';
        }
        ?>
      </div>

      <!-- After -->
      <div class="col-md-4 p-1 box box-after">
        <h6 class="text-primary">After</h6>
        <?php
        if (file_exists('images/after/'.$obj)) {
          echo '<img src="images/after/' .$obj.'" class="img-fluid img-original img-after">';
        }
        else {
          echo '<div class="no-image">
                  <span>No image...</span>
                  <i class="far fa-sad-tear"></i>
                </div>';
        }
        ?>
      </div>

      <!-- Diff -->
      <div class="col-md-4 p-1 box box-diff">
        <h6 class="text-primary">Diff</h6>
        <?php
        if (file_exists('images/diff/'.$obj)) {
          echo '<img src="images/diff/' .$obj.'" class="img-fluid img-original img-diff">';
        }
        else {
          echo '<div class="no-image">
                  <span>No image...</span>
                  <i class="far fa-sad-tear"></i>
                </div>';
        }
        ?>
      </div>
    </div>
  </div>
  <?php
  }
  ?>
</div>
