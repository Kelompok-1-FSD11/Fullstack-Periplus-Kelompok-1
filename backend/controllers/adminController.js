import importModels from '../models/index.js';

const dbPromise = importModels();

// Mengambil data semua product
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

//Menambahkan product baru
const addProduct = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Product = db.Product;
		const {
			product_name,
			product_description,
			price,
			qty_stock,
			category_id,
			qty_sold,
			image_path,
		} = req.body;

		const addProducts = await Product.create({
			product_name,
			product_description,
			price,
			qty_stock,
			category_id,
			qty_sold,
			image_path,
		});
		res.status(201).json({
			message: 'Product added successfully',
			addProducts,
		});
	} catch (error) {
		next(error);
	}
};

//Menambahkan category baru
const addCategory = async (req, res, next) => {
	try {
		const db = await dbPromise;
		const Category = db.Category;
		const { category_name, description } = req.body;

		const addCategories = await Category.create({
			category_name,
			description,
		});
		res.status(201).json({
			message: 'Category added succesfully',
			addCategories,
		});
	} catch (error) {
		next(error);
	}
};

//Menghapus product atau membuat statusnya menjadi inactive

//Menghapus user atau membuat statusnya menjadi inactive

export { getAllProducts, addProduct, addCategory };
