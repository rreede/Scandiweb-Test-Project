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

// Product query

$result = $product->read();

// Get Row Count

$num = $result->rowCount();

// Check if any posts

if($num>0) {

    // Post array

    $posts_arr = array();
    $posts_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $post_item = array(
            'id' => $id,
            'sku' => $sku,
            'name' => $name,
            'price' => $price,
            'property' => $property
        );
// Push to 'data'

array_push($posts_arr['data'], $post_item);


    }

    // Turn to JSON & output

    echo json_encode($posts_arr);

} else {
    // No posts

    echo json_encode(
        array('message'=> 'No posts found!')
    );
}


?>