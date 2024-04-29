function grand(){
    const un = parseInt(prompt("entrez un chiffre"));
    const deux = parseInt(prompt("entrez second chiffre"));
    const trois = parseInt(prompt("entrez troisième chiffre"));

    if(un > deux && un> trois){
        document.write(un)
    }else if (deux > un && deux > trois){
        document.write(deux)
    }else{
        document.write(trois)
    }
}