import axios from "axios";

const api = axios.create({
	baseURL: "https://edusign-server.vercel.app",
});

export default api;
