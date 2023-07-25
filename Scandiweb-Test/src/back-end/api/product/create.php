<?php

// Headers

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

include_once '../../config/Database.php';

include_once '../../models/Product.php';

// DB connect and instatiate

$database = new Database();
$db = $database->connect();

// Instatiate Product object

$product = new Product($db);

// Get Raw posted data

$data = json_decode(file_get_contents('php://input'));

$product->sku = $data->sku;
$product->name = $data->name;
$product->price = $data->price;
$product->property = $data->property;

if($post->create()) {
    echo json_encode(
        array('message' => 'Post Created'));
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
    }

