import importModels from '../models/index.js';

const dbPromise = importModels();

// Mendapatkan data seluruh product setelah melakukan login
const getAllProducts = async (req, res) => {
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
		res.status(500).json({ error: error.message });
	}
};

// Medapatkan data wishlist sesuai user yang melakukan login
const getUserWishlist = async (req, res) => {
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
		res.status(500).json({ error: error.message });
	}
};

// Mendapatkan data order sesuai user yang melakukan login
const getAllUserOrder = async (req, res) => {
	try {
		const db = await dbPromise;
		const User = db.User;
		const Order = db.Order;
		const Product = db.Product;
		const OrderItem = db.OrderItem;

		const orders = await Order.findAll({
			where: { user_id: req.user.user_id },
		});

		const orderItems = await OrderItem.findAll({
			where: { order_id: res.json(orders).order_id}
		});

		// console.log(orders)
		res.json(orders);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

//Edit profil user



export { getAllProducts, getUserWishlist, getAllUserOrder };
