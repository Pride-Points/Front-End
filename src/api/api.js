import axios from "axios";

 const api = axios.create({
     baseURL: "http://3.82.9.113:8080"
 });

export default api;