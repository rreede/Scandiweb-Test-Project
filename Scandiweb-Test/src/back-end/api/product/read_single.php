<?php

// Headers

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';

include_once '../../models/Product.php';

// DB connect and instatiate

$database = new Database();
$db = $database->connect();

// Instatiate Product object

$product = new Product($db);

// Get ID

$product->id = isset($_GET['id']) ? $_GET['id'] : die();

// Get Post

$product->read_single();

// Create array

$product_arr = array(
    'id'=> $product->id,
    'name'=> $product->name,
    'price'=>$product->price,
    'sku'=> $product->sku,
    'property'=>$product->property
);

// Make Json

print_r(json_encode($product_arr));

?>