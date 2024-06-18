import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
	const Product = sequelize.define(
		'Product',
		{
			product_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
			},
			product_name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			product_description: {
				type: DataTypes.TEXT,
			},
			price: {
				allowNull: false,
				type: DataTypes.DECIMAL(10, 2),
			},
			qty_stock: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			category_id: {
				allowNull: false,
				type: DataTypes.UUID,
				references: {
					model: 'Categories',
					key: 'category_id',
				},
			},
			qty_sold: {
				allowNull: false,
				defaultValue: 0,
				type: DataTypes.INTEGER,
			},
			image_path: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: true,
		}
	);

	Product.associate = (models) => {
		Product.belongsTo(models.Category, { foreignKey: 'category_id' });
		Product.hasMany(models.OrderItem);
		Product.hasMany(models.Cart);
		Product.hasMany(models.Wishlist);
		Product.hasMany(models.ProductReview);
	};

	return Product;
};
