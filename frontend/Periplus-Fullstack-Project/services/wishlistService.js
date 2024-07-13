import axiosInstance from './axiosInstance';

const apiURL = 'http://localhost:5000/api/user';

const addToWishlist = async (productId) => {
	try {
		const response = await axiosInstance.post(
			`${apiURL}/products-wishlists`,
			{
				product_id: productId,
			}
		);
		return response.data;
	} catch (error) {
		console.error('Error adding to wishlist', error);
		throw error;
	}
};

export { addToWishlist };
