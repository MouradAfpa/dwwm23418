<h1>Liste des articles</h1>
<?php foreach($articles as $article): ?>
<h2><?= $article['titre'] ?></h2>
<p><?= $article['contenu'] ?></p>
<?php endforeach; ?>