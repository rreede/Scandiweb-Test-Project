<?php

class Product {

    // DB
    private $conn;
    private $table = 'products';

    // Product properties
    public $id;
    public $sku;
    public $name;
    public $price;
    public $property;

    // Constructor
    public function __construct($db)
    {
        $this->conn = $db;
    }


    // Get Products Function
    public function read() {

        // Query
        $query = 'SELECT * FROM products';

        // Prepared Statements
        $stmt = $this->conn->prepare($query);

        // Execute Query
        $stmt->execute();
        return $stmt;

    }

// Create Product Function

public function create() {
    // Query
    $query = 'INSERT INTO products 
        SET
            sku = :sku,
            name = :name,
            price = :price,
            property = :property ';

            // Prepare statement

            $stmt = $this->conn->prepare($query);

            // Clean Data

           // Bind Data
           $stmt->bindParam(':sku', $this->sku);
           $stmt->bindParam(':name', $this->name);
           $stmt->bindParam(':price', $this->price);
           $stmt->bindParam(':property', $this->property);

            // Execute query

            if($stmt->execute()) {
                return true;
            }

            // Print Error if something is wrong
            printf('Error %s.\n', $stmt->error);

            return false;
}


}



?>