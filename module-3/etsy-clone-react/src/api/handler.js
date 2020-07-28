import axios from "axios";

export class APIHandler {
  constructor(APIPrefix) {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix || "",
    });
  }

  getAll() {
    return this.instance.get("/"); // retourne une Promesse
  }

  getById(id) {
    return this.instance.get("/" + id)
  }
}
