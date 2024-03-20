import axios from "axios";

 const api = axios.create({
     baseURL: "http://75.101.208.160:8080"
 });

export default api;