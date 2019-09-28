<?php

function compare(){
  $before = array();
  $after = array();
  $diff = array();

  foreach(glob('images/after/*.*') as $pathA){
    $pathEx = explode('/', $pathA);
    array_push($after,$pathEx[2]);
  }

  foreach(glob('images/before/*.*') as $pathB){
    $pathEx = explode('/', $pathB);
    array_push($before,$pathEx[2]);
  }

  foreach(glob('images/diff/*.*') as $pathD){
    $pathEx = explode('/', $pathD);
    array_push($diff,$pathEx[2]);
  }

  $diffBA = array_diff($before, $after);
  $diffAB = array_diff($after, $before);

  $all_cases = array(
    $diff,
    $diffAB,
    $diffBA
  );

  $all_cases_final = call_user_func_array('array_merge', $all_cases);

  return($all_cases_final);
}

?>
