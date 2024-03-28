document.addEventListener('DOMContentLoaded', function() {
    let btnModifArray = document.getElementsByClassName('btnModif');
    let btnValiderArray = document.getElementsByClassName('btnValider');
    let btnInitArray = document.getElementsByClassName('btnInit');
    let btnAgeArray = document.getElementsByClassName('btnAge');
    let btnSelectArray = document.getElementsByClassName('btnSelect');

    for (let i = 0; i < btnValiderArray.length; i++) {
        btnValiderArray[i].style.display = 'none';
        btnSelectArray[i].style.display = 'none';
    }

    for (let i = 0; i < btnModifArray.length; i++) {
        btnModifArray[i].addEventListener('click', function() {
            btnInitArray[i].disabled = !btnInitArray[i].disabled;
            btnAgeArray[i].disabled = !btnAgeArray[i].disabled;
            btnSelectArray[i].disabled = !btnSelectArray[i].disabled;
            btnValiderArray[i].style.display = 'inline-block'; 
            btnSelectArray[i].style.display = 'inline-block'; 
            btnModifArray[i].style.display = 'none';
        });
    }
});

function showGuitarType() {
    let instrumentSelect = document.getElementById("instru");
    let guitarTypeSelect = document.getElementById("guitarTypeSelect");
    let guitarGenreSelect = document.getElementById("guitarGenreSelect");
    let selectedInstrument = instrumentSelect.value;

    if (selectedInstrument === "Corde") {
        guitarTypeSelect.style.display = "block";
    } else {
        guitarTypeSelect.style.display = "none";
        guitarGenreSelect.style.display = "none";
    }

    let selectedGuitarType = guitarTypeSelect.value;
    if (selectedInstrument === "Corde" && (selectedGuitarType === "Guitare" || selectedGuitarType === "Bass")) {
        guitarGenreSelect.style.display = "block";
    } else {
        guitarGenreSelect.style.display = "none";
    }
}

// function showAddMember(){
//     let btnAddMember = document.getElementById('btnAddMember');
//     let formAddMember = document.getElementById('formAddMember');

//     if(btnAddMember){
//         formAddMember.style.display ="block"
//     }else{
//         formAddMember.style.display ="none"
//     }
// }