import axios from "axios";

 const api = axios.create({
     baseURL: "https://pride-points.zapto.org/api"
 });

export default api