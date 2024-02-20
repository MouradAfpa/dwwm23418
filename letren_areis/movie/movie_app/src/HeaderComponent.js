import React from "react";

function HeaderComponent({ searchKey, handleSearchInputChange, handleSortChange, handleGenreChange }) {
    return (
        <header className="center-max-size header">
            <span className={"brand"}>MoviFlix</span>
            <form className="form" onSubmit={(event) => { event.preventDefault(); }}>
                <input
                    className="search"
                    type="text"
                    id="search"
                    value={searchKey}
                    onChange={handleSearchInputChange}
                />
                <button className="submit-search" type="submit"><i className="fa fa-search"></i></button>
            </form>
            <div className="select-container sort-label">
                <select onChange={handleSortChange}>
                    <option value="">Trier</option>
                    <option value="popularity.desc">Popularité décroissante</option>
                    <option value="popularity.asc">Popularité croissante</option>
                    <option value="release_date.desc">Date de sortie décroissante</option>
                    <option value="release_date.asc">Date de sortie croissante</option>
                    <option value="vote_average.desc">Note décroissante</option>
                    <option value="vote_average.asc">Note croissante</option>
                </select>
            </div>
            <div className="select-container">
                <select onChange={handleGenreChange}>
                    <option value="">Filtrer</option>
                    <option value="28">Action</option>
                    <option value="12">Aventure</option>
                    <option value="16">Animation</option>
                </select>
            </div>
        </header>
    );
}

export default HeaderComponent;
