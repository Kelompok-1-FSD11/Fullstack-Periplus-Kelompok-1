import axiosInstance from './axiosInstance';

const apiURL = 'http://localhost:5000/api/user';

const addToCart = async (productId, buyQuantity) => {
	try {
		const response = await axiosInstance.post(`${apiURL}/products-carts`, {
			product_id: productId,
			quantity: buyQuantity,
		});
		return response.data;
	} catch (error) {
		console.error('Error adding to cart.', error);
		throw error;
	}
};

export { addToCart };
