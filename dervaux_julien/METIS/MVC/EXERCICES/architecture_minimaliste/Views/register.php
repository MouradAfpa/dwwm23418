<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <?php if(isset($_GET["dir"])){
        var_dump($_GET["dir"]);
    };
// var_dump($_SERVER['REQUEST_URI']);
?>
<form class="d-flex justify-content-center" action="" method="$_GET" >
<input class="btn btn-primary me-1 " type="submit" name="dir" value="home">
<input class="btn btn-primary me-1 " type="submit" name="dir" value="dashboard">
<input class="btn btn-primary me-1 " type="submit" name="dir" value="login">
<input class="btn btn-primary me-1 " type="submit" name="dir" value="register" disabled>
</form>
<div class="d-flex justify-content-center">
<h1>Register</h1>
</div>
</body>
</html>