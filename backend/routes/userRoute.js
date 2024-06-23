import express from 'express';
import { authorize } from '../middlewares/auth.js';
import {
	editAccountInformation,
	getAllProducts,
	getAllUserOrder,
	getUserCart,
	getUserWishlist,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/wishlists', authorize('user'), getUserWishlist);
router.get('/orders', authorize('user'), getAllUserOrder);
router.get('/carts', authorize('user'), getUserCart);
router.put('/edit-your-account', authorize('user'), editAccountInformation);

export default router;
