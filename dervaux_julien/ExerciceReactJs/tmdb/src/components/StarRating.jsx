import fullStar from "../assets/fullstar.svg";
import halfStar from "../assets/halfstar.svg";

function StarRating( {detailSerie}) {
    
    let starNote = detailSerie.vote_average;
    starNote = starNote.toFixed(1);
    let starTab = ("" +  starNote).split(".");
    let firstNote = Math.floor(parseInt(starTab[0])/ 2);
    let tab = [];

    // Ajoute les étoiles pleines en fonction de la partie entière de la note
    if (firstNote <= 5) {
    for (let i = 0; i < firstNote; i++) {
        tab.push(<img src={fullStar} alt="" key={i} />);
    }
    }

    // Vérifie s'il y a une demi-étoile en fonction de la partie décimale de la note
    if (Math.floor(parseInt(starTab[1])) >= 50) {
        tab.push(<img src={halfStar} alt="" key="demiEtoile" />);
    }

    return (
        <div>
            {tab.length > 0 ? tab : <span>pasDetoile</span>}
        </div>
    );
}

export default StarRating;
