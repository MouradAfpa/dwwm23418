// il existe 2 type de composant :
// - les composant class et les composant fonction .
// La différence fondamentale entre les 2 est bien la syntaxe. Au tout début, nous ne pouvions écrire des composants React qu'avec le mot-clé class mais depuis React 16 est apparu le composant "fonction". Cette façon de procéder amène plusieurs avantages :

// le composant est plus facile à lire et à tester car ce sont uniquement des fonctions JavaScript ;
// nous avons nécessairement moins de code ;
// il vous aide à utiliser les meilleures pratiques car il sera plus facile et visible de séparer un "conteneur" des composants de présentation. Vous devez réfléchir davantage à l'état de votre composant et à ce qu'il doit faire en tant que tel ;
// les performances seront sensiblement améliorés.

import React from "react";

function Header() {
  return (
    <header>
      <h1>Bienvenue sur notre application</h1>
    </header>
  );
}

// IMPORTANT : Pensez a exporter le composant!
export default Header;



// On constate également que le Class Component contient une méthode render qui correspond au cycle du vie du composant qui effectue le rendu du composant. Nous en parlerons dans un prochain chapitre. Du côté du Function Component, cette méthode n'existe plus. C'est le retour de la fonction qui équivaut à cette méthodologie.

// les composant doivent toujours etre exporté .

// la convention d'écriture d'un composant est le PascalCase
