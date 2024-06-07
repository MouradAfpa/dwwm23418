function resultat(){
    var heure = document.getElementById(`heure`).value;
    var minute = document.getElementById('minute').value;
    var seconde = document.getElementById('seconde').value;
    seconde++
    document.getElementById('resultat').innerHTML=(`${heure} : ${minute} : ${seconde}`)
}