import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5100",
	// baseURL: "https://edusign-server.vercel.app",
	withCredentials: true,
});

export default api;
