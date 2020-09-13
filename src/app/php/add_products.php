
<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    if($_POST){

    // include database connection
    include 'config/db_config.php';

    try{

    // insert query
    $query = "INSERT INTO products SET p_category=:category, p_name=:name,p_price=:price,p_discount_price=:discount_price, p_description=:description,p_image=:image ";
    // prepare query for execution
    $stmt = $con->prepare($query);
    // posted values
    $category = $_POST['category'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $discount_price = $_POST['discount_price'];
    $description = $_POST['description'];
    $image = $_POST['image'];

    // bind the parameters
    $stmt->bindParam(':category', $category);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':discount_price', $discount_price);
    $stmt->bindParam(':image', $image);

    // Execute the query
    if($stmt->execute()){
        echo json_encode(array('result'=>'success'));
    }else{
        echo json_encode(array('result'=>'fail'));
    }
    }
    // show error
    catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
    }
    }
?>
