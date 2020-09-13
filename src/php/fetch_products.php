<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    // include database connection
    include 'config/db_config.php';
    
    // delete message prompt will be here
    
    // select all data
    $query = "SELECT p_id,p_category, p_name,p_price,p_discount_price,p_description, p_description, p_image FROM products ORDER BY p_id DESC";
    $stmt = $con->prepare($query);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($results);
    echo $json;
?>


