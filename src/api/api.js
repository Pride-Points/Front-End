import axios from "axios";

 const api = axios.create({
     baseURL: "http://54.196.3.63:8080"
 });

export default api;