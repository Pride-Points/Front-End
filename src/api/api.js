import axios from "axios";

 const api = axios.create({
     baseURL: "http://10.0.131.239:8080"
 });

export default api;