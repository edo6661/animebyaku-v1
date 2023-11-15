import axios from 'axios';

const axiosAku = axios.create({
	baseURL: 'https://api.jikan.moe/v4',
});

export default axiosAku;
