import axios from "axios";


export default axios.create({
  baseURL: "https://bendfoodtrucks.azurewebsites.net",
  headers: {
    "Content-type": "application/json"
  }
});
