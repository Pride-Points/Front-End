import axios from "axios";

 const api = axios.create({
     baseURL: "http://18.232.115.67:8080"
 });

export default api;