

const API_BASE = "https://pokebuildapi.fr/api/v1";

export const api = () => {
    return fetch(`${API_BASE}/pokemon/limit/100`)
        .then(response => response.json())
        .then(data => data)
        };

export const apiName = name => fetch(`${API_BASE}/pokemon/${name}`)
    .then(response => response.json())
    .then(data => data);
    