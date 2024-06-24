import express from 'express';
import { authorize } from '../middlewares/auth.js';
import {
	addToCart,
	addToWishlist,
	editAccountInformation,
	getAllProducts,
	getAllUserOrder,
	getUserCart,
	getUserWishlist,
	removeFromCart,
	removeFromWishlist,
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
router.put('/products-carts', authorize('user'), removeFromCart)

export default router;
