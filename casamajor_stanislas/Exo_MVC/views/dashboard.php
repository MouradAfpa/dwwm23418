<!-- que du html -->
<!-- <!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-center">Dashboard Page</h1>
    <div class="text-center">
        <a href="/home" class="btn btn-primary">Home</a>
        <a href="/login" class="btn btn-primary">Login</a>
        <a href="/register" class="btn btn-primary">Register</a>
        <a href="/dashboard" class="btn btn-secondary disabled">Dashboard</a>
    </div>
</body>
</html> -->


<!-- html et php -->
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-center">Dashboard Page</h1>
    <div class="text-center">
        <?php $currentPage = 'dashboard'; ?>
        <a href="/home" class="btn <?php echo $currentPage == 'home' ? 'btn-secondary disabled' : 'btn-primary'; ?>">Home</a>
        <a href="/login" class="btn <?php echo $currentPage == 'login' ? 'btn-secondary disabled' : 'btn-primary'; ?>">Login</a>
        <a href="/register" class="btn <?php echo $currentPage == 'register' ? 'btn-secondary disabled' : 'btn-primary'; ?>">Register</a>
        <a href="/dashboard" class="btn <?php echo $currentPage == 'dashboard' ? 'btn-secondary disabled' : 'btn-primary'; ?>">Dashboard</a>
    </div>
</body>
</html>
