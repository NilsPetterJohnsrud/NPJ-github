
<?php
$folder = 'bildegalleri/';
$images = array();

$files = glob($folder . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);

foreach($files as $file) {
    $images[] = $file;  // Legger til bildets sti i arrayet
}

header('Content-Type: application/json');
echo json_encode($images);  // Returnerer JSON
?>
