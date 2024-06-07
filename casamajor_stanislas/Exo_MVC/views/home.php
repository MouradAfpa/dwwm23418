<!-- que du html -->
<!-- <!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-center">Home Page</h1>
    <div class="text-center">
        <a href="/home" class="btn btn-secondary disabled">Home</a>
        <a href="/login" class="btn btn-primary">Login</a>
        <a href="/register" class="btn btn-primary">Register</a>
        <a href="/dashboard" class="btn btn-primary">Dashboard</a>
    </div>
</body>
</html> -->


<!-- html et php -->
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-center">Home Page</h1>
    <!-- // Définit une variable $currentPage et lui attribue la valeur 'home'. 
        // Cette variable est utilisée pour identifier la page actuelle sur laquelle l'utilisateur se trouve. -->
    <div class="text-center">
        <?php $currentPage = 'home'; ?>
        <a href="/home" class="btn <?php echo $currentPage == 'home' ? 'btn-secondary disabled' : 'btn-primary'; ?>">Home</a>
        <a href="/login" class="btn <?php echo $currentPage == 'login' ? 'btn-secondary disabled' : 'btn-primary'; ?>">Login</a>
        <a href="/register" class="btn <?php echo $currentPage == 'register' ? 'btn-secondary disabled' : 'btn-primary'; ?>">Register</a>
        <a href="/dashboard" class="btn <?php echo $currentPage == 'dashboard' ? 'btn-secondary disabled' : 'btn-primary'; ?>">Dashboard</a>
    </div>
</body>
</html>
