let joueur = 'X'; 
        let grille = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];

        function jouerCoup(ligne, colonne) {
            let caseId = "case" + ligne + colonne;
            let bouton = document.getElementById(caseId);

         
            if (grille[ligne][colonne] === '-') {
                grille[ligne][colonne] = joueur;
                bouton.innerText = joueur;

                if (estJeuTermine()) {
                    joueur = (joueur === 'X') ? 'O' : 'X';
                    alert("Le joueur " + joueur + " a gagné !");
                    reinitialiserGrille();
                } else {
                    joueur = (joueur === 'X') ? 'O' : 'X';
                }
            } else {
                alert("Cette case est déjà occupée !");
            }
        }

        function estJeuTermine() {
    
            for (let i = 0; i < 3; i++) {
                if (grille[i][0] !== '-' && grille[i][0] === grille[i][1] && grille[i][1] === grille[i][2]) {
                    return true;
                }
                if (grille[0][i] !== '-' && grille[0][i] === grille[1][i] && grille[1][i] === grille[2][i]) {
                    return true;
                }
            }
            if (grille[0][0] !== '-' && grille[0][0] === grille[1][1] && grille[1][1] === grille[2][2]) {
                return true;
            }
            if (grille[0][2] !== '-' && grille[0][2] === grille[1][1] && grille[1][1] === grille[2][0]) {
                return true;
            }
            
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (grille[i][j] === '-') {
                        return false;
                    }
                }
            }
            
            alert("Match nul !");
            reinitialiserGrille();
            return true;
        }

        function reinitialiserGrille() {
            grille = [
                ['-', '-', '-'],
                ['-', '-', '-'],
                ['-', '-', '-']
            ];
            joueur = 'X'; 
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let caseId = "case" + i + j;
                    let bouton = document.getElementById(caseId);
                    bouton.innerText = '';
                }
            }
        }

