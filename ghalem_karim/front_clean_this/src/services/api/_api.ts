/**
 *
 * Ici c'est le fichier de base qui permet de faire les requetes
 * En gros, lui il dit juste si tu fais un get tu as besoin de ça ect
 *
 */

// const baseUrl = "http://localhost:5173/api/";
const baseUrl = "/api/";

type Method = "POST" | "PATCH" | "GET" | "DELETE" | "PUT";

const headers = (method: Method) => {
  return {
    method,
    headers: {
      // Accept: 'application/json',
      "Content-Type": "application/json",
    },
  };
};

const makeUrl = (url: string, params: Record<string, unknown> | null = null) =>
  `${baseUrl}${url}${
    params
      ? Object.keys(params)
          .map(
            (k: string, i: number, a: string[]) =>
              `${i === 0 ? "?" : ""}${k}=${params[k]}${
                i < a.length - 1 ? "&" : ""
              }`
          )
          .join()
      : ""
  }`;

const normalizeParams = (method: Method, body?: object) => ({
  ...headers(method),
  body: JSON.stringify(body),
});

const get = <T>(url: string): Promise<T> =>
  fetch(makeUrl(url), normalizeParams("GET")).then((res) => {
    return res.json() as T;
  });

const post = <T>(url: string, body: object): Promise<T> => {
  return fetch(makeUrl(url), normalizeParams("POST", body)).then((res) => {
    return res.json() as T;
  });
};

const put = <T>(url: string, params: object): Promise<T> => {
  return fetch(makeUrl(url), normalizeParams("PUT", params)).then((res) => {
    return res.json() as T;
  });
};
// const put = async <T>(url: string, params: object): Promise<T> => {
//   try {
//     const response = await fetch(makeUrl(url), {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(params),
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json() as T;
//     return data;
//   } catch (error) {
//     console.error('Fetch error:', error);
//     throw error;
//   }
// };

const remove = async <T>(url: string, params: object): Promise<T> => {
  return fetch(makeUrl(url), normalizeParams("DELETE", params)).then((res) => {
    return res.json as T;
  });
};

// const del = async <T>(url: string): Promise<T> => {
//   try {
//     const response = await fetch(makeUrl(url), {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json() as T;
//     return data;
//   } catch (error) {
//     console.error('Fetch error:', error);
//     throw error;
//   }
// };

//   if (params) {
//     Object.keys(params).forEach((k: string, i: number, a: string[]) => {
//         // v1
//       if (i === 0) {
//         u += "?";
//       }
//       u += `${k}=${params[k]}`;
//       if (i < a.length) {
//           u += "&";
//         }

//         // V2
//         u += `${i === 0 ? '?' : ''}${k}=${params[k]}${i < a.length ? '&' : ''}`;

//     });
//   }
//     Object.keys(params).forEach(
//       (k: string, i: number, a: string[]) =>
//         (u += `${i === 0 ? "?" : ""}${k}=${params[k]}${
//           i < a.length ? "&" : ""
//         }`)
//     );
//   }
// http://localhost:3000/api/operation?params1=val1&params2=val2

//   return u;
// };

// type Person = {
//   name: string;
//   description: string;
//   age: number;
// };
// type Animal = {
//   dog: string;
//   cat: string;
// };

// const person = {
//   name: "name",
//   description: "description",
//   age: 30,
//   dog: "louis",
// };

// const animal: Animal = {
//   dog: "mango",
//   cat: "misa",
// };

// const getAge = ({ age, description, name }: Person) => {
//   return age;
// };

// const getHome = (person: Person, animal: Animal) => {};

const api = { get, post, put, remove };
export default api;
