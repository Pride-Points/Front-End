import axios from "axios";

 const api = axios.create({
     baseURL: "http://54.166.62.134:8080"
 });

export default api;