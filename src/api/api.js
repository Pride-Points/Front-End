import axios from "axios";

 const api = axios.create({
     baseURL: "http://44.223.140.189:8080"
 });

export default api;