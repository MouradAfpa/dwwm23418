import axios from "axios";

const API_URL = "https://pokebuildapi.fr/api/v1";

export const getPokemonList = async () => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/limit/60`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon List:", error);
    return [];
  }
};

export const searchPokemon = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon List:", error);
    return null;
  }
};

export const getPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon List:", error);
    return null;
  }
};
