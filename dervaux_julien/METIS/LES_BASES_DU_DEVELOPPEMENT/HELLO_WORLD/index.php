<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello_world</title>
</head>
<body>
    <?php  
    
    $tabs = [
        "h6" => "<h6>Hello World</h6>",
        "h5" => "<h5>Hello World</h5>",
        "h4" => "<h4>Hello World</h4>",
        "h3" => "<h3>Hello World</h3>",
        "h2" => "<h2>Hello World</h2>",
        "h1" => "<h1>Hello World</h1>",
    ];
    foreach ($tabs as $tab => $value) {
        echo $value;
    }
    ?>
</body>
</html>