import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
	const WishlistItem = sequelize.define(
		'WishlistItem',
		{
			wishlist_item_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
			},
			wishlist_id: {
				allowNull: false,
				type: DataTypes.UUID,
				references: {
					model: 'Wishlists',
					key: 'wishlist_id',
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
		},
		{
			timestamps: true,
		}
	);

	WishlistItem.associate = (models) => {
		WishlistItem.belongsTo(models.Wishlist, { foreignKey: 'wishlist_id' });
		WishlistItem.belongsTo(models.Product, { foreignKey: 'product_id' });
	};

	return WishlistItem;
};
