import express from 'express';
import { authorize } from '../middlewares/auth.js';
import {
	addReview,
	addToCart,
	addToWishlist,
	createOrder,
	editAccountInformation,
	getAllProducts,
	getAllUserOrder,
	getProductsByCategoryName,
	getProductsByMaxPrice,
	getProductsByMinPrice,
	getProductsByName,
	getUserCart,
	getUserWishlist,
	getUserInformations,
	removeFromCart,
	removeFromWishlist,
	getDetailProduct,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/wishlists', authorize('user'), getUserWishlist);
router.get('/orders', authorize('user'), getAllUserOrder);
router.get('/carts', authorize('user'), getUserCart);
router.put('/edit-your-account', authorize('user'), editAccountInformation);
router.post('/products-wishlists', authorize('user'), addToWishlist);
router.post('/products-carts', authorize('user'), addToCart);
router.delete('/products-wishlists', authorize('user'), removeFromWishlist);
router.put('/products-carts', authorize('user'), removeFromCart);
router.post('/create-orders', authorize('user'), createOrder);
router.put('/products-carts', authorize('user'), removeFromCart);
router.post('/add-review', authorize('user'), addReview);
router.get('/users', authorize('user'), getUserInformations);

router.get('/products/:product_id', getDetailProduct);
router.get('/products/name/:productName', getProductsByName);
router.get('/products/category/:categoryName', getProductsByCategoryName);
router.get('/products/minPrice/:minPrice', getProductsByMinPrice);
router.get('/products/maxPrice/:maxPrice', getProductsByMaxPrice);

export default router;
