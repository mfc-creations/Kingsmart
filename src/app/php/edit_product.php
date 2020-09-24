<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 
// check if form was submitted
if($_POST){
    include 'config/db_config.php';

    try{
        // write update query
      
        $query = "UPDATE products 
                    SET p_category=:category, p_name=:name,p_price=:price,p_discount_price=:discount_price, p_description=:description,p_image=:image 
                    WHERE p_id = :id";
 
        // prepare query for excecution
        $stmt = $con->prepare($query);
 
        // posted values
        $id = $_POST['id'];
        $category = $_POST['category'];
        $name = $_POST['name'];
        $price = $_POST['price'];
        $discount_price = $_POST['discount_price'];
        $description = $_POST['description'];
        $image = $_POST['image'];
 
        // bind the parameters
        $stmt->bindParam(':id', $id);
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
     
    // show errors
    catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
}
?>
