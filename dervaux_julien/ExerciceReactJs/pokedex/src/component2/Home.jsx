import React, { useEffect, useState } from 'react';
import { api, apiName } from './api';
import CartePkmn from './CartePkmn';
import SearchBar from './SearchBar';

export const Home = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await api();
      setData(responseData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPokemonByName = async () => {
      if (search) {
        const responseData = await apiName(search);
        setData([responseData]); 
      } else {
        const responseData = await api();
        setData(responseData);
      }
    };

    fetchPokemonByName();
  }, [search]);

  


  return (
    <>
    <div>
    <SearchBar search={search} setSearch={setSearch}/>
    </div>
      <div className="d-flex  flex-wrap justify-content-center col-10 col-md-10 col-lg-12 m-1  ">
      {data.map((pokemon)=><CartePkmn key={pokemon.id} pokemon={pokemon}/> )}
      </div>
    </>
  );
};

export default Home;