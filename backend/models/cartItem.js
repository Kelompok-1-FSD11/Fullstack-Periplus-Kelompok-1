import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
	const CartItem = sequelize.define(
		'CartItem',
		{
			cart_item_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
			},
			cart_id: {
				allowNull: false,
				type: DataTypes.UUID,
				references: {
					model: 'Carts',
					key: 'cart_id',
				},
			},
			product_id: {
                allowNull: false,
				type: DataTypes.UUID,
				references: {
					model: 'Products',
					key: 'product_id',
				},
			},
			quantity: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{
			timestamps: true,
		}
	);

	CartItem.associate = (models) => {
		CartItem.belongsTo(models.Cart, { foreignKey: 'cart_id' });
		CartItem.belongsTo(models.Product, { foreignKey: 'product_id' });
	};

	return CartItem;
};
