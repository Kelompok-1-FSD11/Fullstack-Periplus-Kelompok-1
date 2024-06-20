import express from 'express';
import { authorize } from '../middlewares/auth.js';
import {
	getAllProducts,
	getAllUserOrder,
	getUserWishlist,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/wishlists', authorize('user'), getUserWishlist);
router.get('/orders', authorize('user'), getAllUserOrder);

export default router;
