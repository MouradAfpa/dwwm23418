<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/tarifs.css">
    <title>Tarifs</title>
</head>

<body>

    <?php include_once 'navbar.php' ?>

    <main>
        <h1>Page Tarifs</h1>

        <h3>La compagnie propose quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux : tarifs bleu, vert, orange et rouge.</h3>

        <ul>
            <li>Si un conducteur a moins de 25 ans et est titulaire du permis depuis moins de deux ans,
                il se voit attribuer le tarif rouge s'il n'a jamais été responsable d'accident.
                Sinon, la compagnie refuse de l'assurer.
            </li>

            <li>Si un conducteur a moins de 25 ans et est titulaire du permis depuis plus de deux ans,
                ou s'il a plus de 25 ans mais est titulaire du permis depuis moins de deux ans,
                il a droit au tarif orange s'il n'a jamais provoqué d'accident.
                En cas d'accident, il est classé au tarif rouge et refusé s'il y en a eu plus d'un.
            </li>

            <li>Si un conducteur a plus de 25 ans et est titulaire du permis depuis plus de deux ans,
                il bénéficie du tarif vert s'il n'est à l'origine d'aucun accident.
                Il est classé au tarif orange pour un accident,
                au tarif rouge pour deux accidents, et refusé au-delà.
            </li>

            <li>Pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'ils sont clients depuis plus de cinq ans.
                Ainsi, un client normalement "vert" devient "bleu", un client normalement "orange" devient "vert", et le "rouge" devient orange.
            </li>
        </ul>

        <a href="tarifsForm.php">Voir le formulaire</a>
    </main>

</body>

</html>