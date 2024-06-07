function createNode(){
    var body = document.documentElement.lastChild;
    var link = createLink("http://www.google.fr"
    ,"google");
    body.appendChild(link);
    }

    function createLink(href, texte){
    var element = document.createElement("a");
    var texteNode = document.createTextNode(texte);
    element.appendChild(texteNode)
    element.setAttribute("href", href);
    return element;
    }

    // function createImag(){
    //     var imageElement = document.createElement('img');
    //     imageElement.src = "/avion.jpg";
    //     document.body.appendChild(imageElement);
    // }

    // function createIm(){
    //     var body = document.documentElement.lastChild;
    //     var link = createLink("/avion.jpg");
    //     body.appendChild(link);
    //     }
    
    function createImg(){
        var imageElement = document.createElement("img");
        imageElement.setAttribute("src", '/avion.jpg');
        return imageElement;
    }
        
    
    // function effacerId(){
    //     var eraseId = document.getElementById('dv');
    //     eraseId.parentNode.removeChild(eraseId);
    //     return eraseId;
    
    function effacerId(){
        var eraseId = document.getElementById('dv');
        i=0;
        if (eraseId != null) {
            eraseId.parentNode.removeChild(eraseId);
            i++
        } else {
        return eraseId;
        }
    }

    //---- Correction ------
function effacerDOM1(){
   
    var elt = document.getElementById("dv"); //ex1
 
    if(elt != null){
        while(elt.hasChildNodes()){
            var nf = elt.firstChild;
            elt.removeChild(nf);
           
        }
        elt.parentNode.removeChild(elt);
    }
 
   
}
    function remplaceText() {
       var textNew = document.getElementsByTagName('h1')[1];
       textNew.textContent = "Nouveau Texte";
       return textNew;
    }  

    function alertText(){
        var textAlert = document.getElementById('dv').textContent;
        alert("Texte de DV:" + textAlert);
    }


    //autre façon---
    function getTexte1(elt){
        var elt = document.getElementById("dv");
     
        var texte = "";
        if(elt != null){
        if(elt.hasChildNodes()){
        for(var i = 0; i < elt.childNodes.length; i++){
        var nf = elt.childNodes[i];
        if(nf.nodeValue != null){
        texte += nf.nodeValue;
         }else{
        texte += getTexte(nf);
         }
        }
        }
        }
        // return texte;
        alert(texte);
    }

//----------

    function effacerTitre(){
        var titreId = document.getElementById('title');
        titreId.parentNode.removeChild(titreId);
    }

 ////---- autre façon -----
/// [13:41] Atef HASNI
function effacerTitre() {
                hh = document.getElementsByTagName("h1");
                indice = document.getElementById("title").value;
                indice = indice - 1;
                hh.item(indice).removeChild(hh.item(indice).firstChild);
            }
            

// Bonus perso --------

var i = 0;
function parcourir(){
        var element = document.getElementsByTagName('h1');
        if (i < element.length) {
            alert(element[i].firstChild.textContent);
            i++;
        } else {
           alert("Terminé");
        }
    }
    