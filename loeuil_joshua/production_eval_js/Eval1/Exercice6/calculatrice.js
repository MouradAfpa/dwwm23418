function calculatrice(){
    const un = parseInt(prompt("entrez un chiffre"));
    const ope = prompt("entrez un opérateur");
    const trois = parseInt(prompt("entrez troisième chiffre"));

    let resadd = un + trois;
    let ressous = un - trois;
    let resmult = un * trois;
    let resdiv = un / trois;

    if(ope == '+'){
        document.write("[" + un + ","  + `"` + ope + `"` + ", " + trois +"]" + "=" + resadd)
    }else if(ope == '-'){
        document.write("[" + un + ","  + `"` + ope + `"` + ", " + trois +"]" + "=" + ressous)
    }else if(ope == '/'){
        document.write("[" + un + ","  + `"` + ope + `"` + ", " + trois +"]" + "=" + resdiv)
    }else{
        document.write("[" + un + ","  + `"` + ope + `"` + ", " + trois +"]" + "=" + resmult)
    }
}