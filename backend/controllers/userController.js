import importModels from '../models/index.js';

const dbPromise = importModels();

// Mendapatkan data seluruh product setelah melakukan login
const getAllProducts = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Product = db.Product;
		const Category = db.Category;

		const products = await Product.findAll({
			include: [
				{
					model: Category,
				},
			],
		});
		res.json(products);
	} catch (error) {
		next(error);
	}
};

// Mendapatkan data wishlist sesuai user yang melakukan login
const getUserWishlist = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Wishlist = db.Wishlist;
		const Product = db.Product;
		const User = db.User;

		const wishlists = await Wishlist.findAll({
			where: { user_id: req.user.user_id },
			include: [
				{
					model: Product,
				},
				{
					model: User,
				},
			],
		});
		res.json(wishlists);
	} catch (error) {
		next(error);
	}
};

// Mendapatkan data order sesuai user yang melakukan login
const getAllUserOrder = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const User = db.User;
		const Order = db.Order;
		const Product = db.Product;
		const OrderItem = db.OrderItem;

		const orders = await Order.findAll({
			where: { user_id: req.user.user_id },
		});

		res.json(orders);
	} catch (error) {
		next(error);
	}
};

//Mendapatkan data cart sesuai user yang login
const getUserCart = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Cart = db.Cart;
		const User = db.User;
		const Product = db.Product;

		const carts = await Cart.findAll({
			where: { user_id: req.user.user_id },
			include: [
				{
					model: Product,
				},
				{
					model: User,
				},
			],
		});
		res.json(carts);
	} catch (error) {
		next(error);
	}
};

//Edit profil user

export { getAllProducts, getUserWishlist, getAllUserOrder, getUserCart };
