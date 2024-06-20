import importModels from '../models/index.js';

const dbPromise = importModels();

// Mengambil data semua product
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

//Menambahkan product baru
const addProduct = async (req, res) => {
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
			image_path
		});
		res.status(201).json({message: 'Product added successfully', addProducts})
		console.log(req.body)
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

//Menghapus product atau membuat statusnya menjadi inactive


//Menghapus user atau membuat statusnya menjadi inactive



export { getAllProducts, addProduct };
