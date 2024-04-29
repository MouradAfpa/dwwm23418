import "./SearchBox.css";
import logo from "./2.png";

const SearchBox = ({ recherche, setRecherche, search, setSearch }) => {
    let toto = "";

  return (
    <div id="search">
      <h2>The Pokemon Database</h2>
      <input
        type="text"
        onChange={(event) => toto = event.target.value}
        onKeyDown={(e) => e.key === 'Enter' ? setRecherche(toto) : console.log(toto)}
        // value={toto}
        placeholder="Rechercher un pokemon..."
        id="searchbar"
      />
      <img src={logo} alt="truc" id="logoprout"/>
    </div>
  );
};

export default SearchBox;
