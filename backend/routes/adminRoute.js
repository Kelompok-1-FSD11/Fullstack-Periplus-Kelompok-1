import { addProduct, getAllProducts } from '../controllers/adminController.js';
import express from 'express';
import { authorize } from '../middlewares/auth.js';

const router = express.Router();

router.get('/products', authorize('admin'), getAllProducts);
router.post('/add-product', authorize('admin'), addProduct);

export default router;
