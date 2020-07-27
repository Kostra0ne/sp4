import axios from "axios";

export function APIhandler(APIPrefix) {
  return (() => {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix || "",
    });

    const getAll = (path) => instance.get("/");

    const getById = (id) => instance.get("/" + id);

    const getOne = (path, query) => instance.get("/" + path, { query });

    return {
      instance,
      getAll,
      getById,
      getOne,
    };
  })();
}
