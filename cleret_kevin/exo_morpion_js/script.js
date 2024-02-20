let turn = 1;

console.log(turn);
// let tab = [[1,2,3],
//            [4,5,6],
//            [7,8,9],
//            [1,4,7],
//            [2,5,8],
//            [3,6,9],
//            [1,5,9],
//            [3,5,7]];

let nTab = [];
let aTab = [];


// DEFINIR CASE
let caseC = "";
let caseJ = document.getElementById("case" + caseC)
let j = "";

// CHOIX JOUEUR
function choixJoueur() {
    if(turn % 2 == 0) {
        j = "0";    
    }
}

function calculScore() {
    switch (true) {
        // VICTOIRE
        case nTab.includes(1) && nTab.includes(2) && nTab.includes(3):
            console.log('VICTOIRE');
            document.getElementById("case1").style.background = "green";
            document.getElementById("case2").style.background = "green";
            document.getElementById("case3").style.background = "green";
            break;

        case nTab.includes(4) && nTab.includes(5) && nTab.includes(6):
            console.log('VICTOIRE');
            document.getElementById("case4").style.background = "green";
            document.getElementById("case5").style.background = "green";
            document.getElementById("case6").style.background = "green";
            break;

        case nTab.includes(7) && nTab.includes(8) && nTab.includes(9):
            console.log('VICTOIRE');
            document.getElementById("case7").style.background = "green";
            document.getElementById("case8").style.background = "green";
            document.getElementById("case9").style.background = "green";
            break;
        
        case nTab.includes(1) && nTab.includes(4) && nTab.includes(7):
            console.log('VICTOIRE');
            document.getElementById("case1").style.background = "green";
            document.getElementById("case4").style.background = "green";
            document.getElementById("case7").style.background = "green";
            break;

        case nTab.includes(2) && nTab.includes(5) && nTab.includes(8):
            console.log('VICTOIRE');
            document.getElementById("case2").style.background = "green";
            document.getElementById("case5").style.background = "green";
            document.getElementById("case8").style.background = "green";
            break;
        
        case nTab.includes(3) && nTab.includes(6) && nTab.includes(9):
            console.log('VICTOIRE');
            document.getElementById("case1").style.background = "green";
            document.getElementById("case2").style.background = "green";
            document.getElementById("case3").style.background = "green";
            break;
        
        case nTab.includes(1) && nTab.includes(5) && nTab.includes(9):
            console.log('VICTOIRE');
            document.getElementById("case1").style.background = "green";
            document.getElementById("case5").style.background = "green";
            document.getElementById("case9").style.background = "green";
            break;
            
        case nTab.includes(3) && nTab.includes(5) && nTab.includes(7):
            console.log('VICTOIRE');
            document.getElementById("case3").style.background = "green";
            document.getElementById("case5").style.background = "green";
            document.getElementById("case7").style.background = "green";
            break;

            
        // DEFAITE
        case aTab.includes(1) && aTab.includes(2) && aTab.includes(3):
            console.log('DEFAITE');
            document.getElementById("case1").style.background = "orange";
            document.getElementById("case2").style.background = "orange";
            document.getElementById("case3").style.background = "orange";
            break;

        case aTab.includes(4) && aTab.includes(5) && aTab.includes(6):
            console.log('DEFAITE');
            document.getElementById("case4").style.background = "orange";
            document.getElementById("case5").style.background = "orange";
            document.getElementById("case6").style.background = "orange";
            break;

        case aTab.includes(7) && aTab.includes(8) && aTab.includes(9):
            console.log('DEFAITE');
            document.getElementById("case7").style.background = "orange";
            document.getElementById("case8").style.background = "orange";
            document.getElementById("case9").style.background = "orange";
            break;
        
        case aTab.includes(1) && aTab.includes(4) && aTab.includes(7):
            console.log('DEFAITE');
            document.getElementById("case1").style.background = "orange";
            document.getElementById("case4").style.background = "orange";
            document.getElementById("case7").style.background = "orange";
            break;

        case aTab.includes(2) && aTab.includes(5) && aTab.includes(8):
            console.log('DEFAITE');
            document.getElementById("case2").style.background = "orange";
            document.getElementById("case5").style.background = "orange";
            document.getElementById("case8").style.background = "orange";
            break;
        
        case aTab.includes(3) && aTab.includes(6) && aTab.includes(9):
            console.log('DEFAITE');
            document.getElementById("case1").style.background = "orange";
            document.getElementById("case2").style.background = "orange";
            document.getElementById("case3").style.background = "orange";
            break;
        
        case aTab.includes(1) && aTab.includes(5) && aTab.includes(9):
            console.log('DEFAITE');
            document.getElementById("case1").style.background = "orange";
            document.getElementById("case5").style.background = "orange";
            document.getElementById("case9").style.background = "orange";
            break;
            
        case aTab.includes(3) && aTab.includes(5) && aTab.includes(7):
            console.log('DEFAITE');
            document.getElementById("case3").style.background = "orange";
            document.getElementById("case5").style.background = "orange";
            document.getElementById("case7").style.background = "orange";
            break;

        
        // MATCH NUL
        case turn > 9:
            console.log('MATCH NUL');
            document.getElementById("case1").style.background = "grey";
            document.getElementById("case2").style.background = "grey";
            document.getElementById("case3").style.background = "grey";
            document.getElementById("case4").style.background = "grey";
            document.getElementById("case5").style.background = "grey";
            document.getElementById("case6").style.background = "grey";
            document.getElementById("case7").style.background = "grey";
            document.getElementById("case8").style.background = "grey";
            document.getElementById("case9").style.background = "grey";
            break;

        default:
        console.log(``);
    }
}

function inserer1(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case1").innerHTML = j;
    
    if(turn % 2 === 0) {
        aTab.push(1); 
    } else {
        nTab.push(1);
    }
    
    console.log(turn, nTab,"nTab", aTab,"aTab");

    turn++
    calculScore()
}

function inserer2(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case2").innerHTML = j;
    
    if(turn % 2 === 0) {
        aTab.push(2); 
    } else {
        nTab.push(2);
    }
    
    console.log(turn, nTab, aTab);

    turn++
    calculScore()
}

function inserer3(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case3").innerHTML = j;
    
    
    if(turn % 2 === 0) {
        aTab.push(3); 
    } else {
        nTab.push(3);
    }
    
    console.log(turn, nTab, aTab);
    
    turn++
    calculScore()
}

function inserer4(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case4").innerHTML = j;
    
    if(turn % 2 === 0) {
        aTab.push(4); 
    } else {
        nTab.push(4);
    }
    
    console.log(turn, nTab, aTab);
    
    turn++
    calculScore()
}

function inserer5(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case5").innerHTML = j;
    
    if(turn % 2 === 0) {
        aTab.push(5); 
    } else {
        nTab.push(5);
    }
    
    console.log(turn, nTab, aTab);

    turn++
    calculScore()
}

function inserer6(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case6").innerHTML = j;
    
    if(turn % 2 === 0) {
        aTab.push(6); 
    } else {
        nTab.push(6);
    }
    
    console.log(turn, nTab, aTab);

    turn++
    calculScore()
}

function inserer7(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case7").innerHTML = j;
    
    if(turn % 2 === 0) {
        aTab.push(7); 
    } else {
        nTab.push(7);
    }
    
    console.log(turn, nTab, aTab);

    turn++
    calculScore()
}

function inserer8(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case8").innerHTML = j;
    
    if(turn % 2 === 0) {
        aTab.push(8); 
    } else {
        nTab.push(8);
    }
    
    console.log(turn, nTab, aTab);

    turn++
    calculScore()
}

function inserer9(){
    j = "X";
    if(turn % 2 == 0) {
        j = "0";    
    }
    // choixJoueur()
    document.getElementById("case9").innerHTML = j;

    if(turn % 2 === 0) {
        aTab.push(9); 
    } else {
        nTab.push(9);
    }
    
    console.log(turn, nTab, aTab);

    turn++
    calculScore()
}





function reset(){
    location.reload();
}