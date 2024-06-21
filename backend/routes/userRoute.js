import express from 'express';
import { authorize } from '../middlewares/auth.js';
import {
	getAllProducts,
	getAllUserOrder,
	getUserCart,
	getUserWishlist,
	addReview,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/wishlists', authorize('user'), getUserWishlist);
router.get('/orders', authorize('user'), getAllUserOrder);
router.get('/carts', authorize('user'), getUserCart);
router.post('/add-review', authorize('user'), addReview);

export default router;
