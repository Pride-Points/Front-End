import axios from "axios";

 const api = axios.create({
     baseURL: "https://54.146.120.177/api"
 });

export default api