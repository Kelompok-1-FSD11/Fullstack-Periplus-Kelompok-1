import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
	const WishlistItem = sequelize.define(
		'WishlistItem',
		{
			wishlist_item_id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				primaryKey: true,
			},
			wishlist_id: {
				type: DataTypes.UUID,
				references: {
					model: 'Wishlists',
					key: 'wishlist_id',
				},
				allowNull: false,
			},
			product_id: {
				type: DataTypes.UUID,
				references: {
					model: 'Products',
					key: 'product_id',
				},
				allowNull: false,
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
