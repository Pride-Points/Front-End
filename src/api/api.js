import axios from "axios";

 const api = axios.create({
     baseURL: "http://18.232.132.229:8080"
 });

export default api;