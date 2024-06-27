import { where } from 'sequelize';
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
const editAccountInformation = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const User = db.User;

		const { user_fname, user_lname } = req.body;

		const user = await User.findOne({
			where: { user_id: req.user.user_id },
		});

		user.user_fname = user_fname || user.user_fname;
		user.user_lname = user_lname || user.user_lname;

		await user.save();
		res.json({ message: 'Your account updated successfully', user });
	} catch (error) {
		next(error);
	}
};

//Menambahkan produk ke wishlist user
const addToWishlist = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Wishlist = db.Wishlist;
		const { product_id } = req.body;
		const userId = req.user.user_id;

		//Perlu ditambahkan validasi jika barang sudah masuk di wishlist user, tidak bisa ditambahkan lagi

		const addToWishlists = await Wishlist.create({
			user_id: userId,
			product_id,
		});
		res.json({
			message: 'The product was successfully added to your wishlist',
			addToWishlists,
		});
	} catch (error) {
		next(error);
	}
};

//Menghapus produk dari wishlist user
const removeFromWishlist = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Wishlist = db.Wishlist;
		const { product_id } = req.body;

		const userWishlist = await Wishlist.findOne({
			where: { user_id: req.user.user_id, product_id: product_id },
		});
		if (!userWishlist) {
			return res
				.status(404)
				.json({ error: 'The product is not on your wishlist' });
		}

		await userWishlist.destroy();

		res.json({
			message: 'The product was successfully removed from your wishlist',
		});
	} catch (error) {
		next(error);
	}
};

//Menambahkan produk ke cart user
const addToCart = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Cart = db.Cart;
		const { product_id, quantity } = req.body;
		const userId = req.user.user_id;

		const addToCarts = await Cart.create({
			user_id: userId,
			product_id,
			quantity,
		});

		res.json({
			message: 'The product was successfully addedto your cart',
			addToCarts,
		});
	} catch (error) {
		next(error);
	}
};

//Merubah quantity tiap produk yang ada di User Cart & menghapus produk yang memiliki quantity 0
const removeFromCart = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Cart = db.Cart;
		const { product_id, quantity } = req.body;

		const userCart = await Cart.findOne({
			where: {
				user_id: req.user.user_id,
				product_id: product_id,
			},
		});

		userCart.quantity = quantity;

		await userCart.save();

		if (userCart.quantity === 0) {
			await userCart.destroy();
		}

		res.json({ message: 'Your cart was successfully updated' });
	} catch (error) {
		next(error);
	}
};


const addReview = async (req, res, next) => {
	try {
		const db = await dbPromise;
		
		const ProductReview = db.ProductReview;
		const {
			user_id,
			product_id,
			rating,
		} = req.body;

		const addReviews  = await ProductReview.create({
			user_id,
			product_id,
			rating,
		});
		res.status(201).json({
			message: 'Review  added successfully',
			addReviews,
		});
		console.log(req.body);
	} catch (error) {
		next(error);
	}
};

const getProductsByName = async (req, res, next) => {
	try {
	const db = await dbPromise;
	const Product = db.Product;
	const Category = db.Category;
	const ProductReview = db.ProductReview;
	const { productName } = req.params;


	const products = await Product.findAll({
		where: {
		product_name: productName,
		},
		include: [
		{
			model: Category,
		},
		{
			model: ProductReview,
		},
		],
	});

	  // Jika produk tidak ditemukan, kirimkan respons 404
	if (products.length === 0) {
		return res.status(404).json({
		message: 'Product not found',
		});
	}

	  // Mengirimkan respons dengan produk yang ditemukan
	res.json(products);
	} catch (error) {
	next(error);
	}
};

const getProductsByCategoryName = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Category = db.Category;
		const Product = db.Product;
		const { category_name } = req.params;

	
		const categories = await Category.findAll({
			where: {
				category_name: category_name,
			},
			include: [
				{
					model: Category,
				},
				{
					model: Product,
				},
				],
		});

	
		if (categories.length === 0) {
			return res.status(404).json({
				message: 'Category not found',
			});
		}

		
		res.json(categories);
	} catch (error) {
		next(error);
	}
};

const getProductsByMinPrice = async (req, res, next) => {
    try {
        const db = await dbPromise;
        const Product = db.Product;
        const { minPrice } = req.params;

        const products = await Product.findAll({
            where: {
                price: {
                    [db.Sequelize.Op.gte]: minPrice,
                },
            },
            include: [
                {
                    model: Product,
                },

            ],
        });

        if (products.length === 0) {
            return res.status(404).json({
                message: 'No products found above the specified price',
            });
        }

        res.json(products);
    } catch (error) {
        next(error);
    }
};
////////////////////
const getProductsByMaxPrice = async (req, res, next) => {
    try {
        const db = await dbPromise;
        const Product = db.Product;
        const { maxPrice } = req.params;

        const products = await Product.findAll({
            where: {
                price: {
                    [db.Sequelize.Op.lte]: maxPrice,
                },
            },
            include: [
                {
                    model: Product,
                },

            ],
        });

        if (products.length === 0) {
            return res.status(404).json({
                message: 'No products found above the specified price',
            });
        }

        res.json(products);
    } catch (error) {
        next(error);
    }
};

export {
	getAllProducts,
	getUserWishlist,
	getAllUserOrder,
	getUserCart,
	editAccountInformation,
	addToWishlist,
	addToCart,
	removeFromWishlist,
	removeFromCart,
	addReview,
	getProductsByName,
	getProductsByCategoryName,
	getProductsByMinPrice,
	getProductsByMaxPrice
};
