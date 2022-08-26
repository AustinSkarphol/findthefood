import axios from "axios";


export default axios.create({
  baseURL: "https://bendfoodtrucks.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});
