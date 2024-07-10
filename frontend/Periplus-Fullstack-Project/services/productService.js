import axios from 'axios';

const apiURL = 'http://localhost:5000/api/user';

export const fetchProductData = async () => {
	try {
		const response = await axios.get(`${apiURL}/products`);
		console.log(response.data)
		return response.data;
	} catch (error) {
		console.error('Error fetching product data', error);
		throw error;
	}
};
