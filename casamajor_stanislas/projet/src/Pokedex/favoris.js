import React from "react";

function Favoris({
  pokemons,
  favoris,
  setFavoris,
  removeFavoris,
  click,
  setClick,
}) {
  // const [favoris, setFavoris] = useState([]);

  let findFavoris = pokemons.filter((recipe) => favoris.includes(recipe.id));

  return (
    <div className="favorite__list">
      <h2>Liste de favoris</h2>
      {findFavoris.map((recipe) => {
        return (
          <div key={recipe.id} className="recipe__card">
            <img src={recipe.sprite} alt="foods" width={75} height={75} />
            <h2 className="recipe__card__title">{recipe.name}</h2>

            <button
              onClick={() => {
                removeFavoris(recipe.id);
                setClick(!click);
              }}
            >
              retirer favoris
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Favoris;
