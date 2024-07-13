import axiosInstance from './axiosInstance';

const apiURL = 'http://localhost:5000/api/user';

const getUserCart = async () => {
	try {
		const response = await axiosInstance.get(`${apiURL}/carts`);
		return response.data;
	} catch (error) {
		console.error('Error fetching user cart data.', error);
		throw error;
	}
};

export { getUserCart };
