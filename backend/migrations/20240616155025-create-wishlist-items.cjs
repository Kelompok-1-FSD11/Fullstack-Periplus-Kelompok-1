'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('WishlistItems', {
			wishlist_item_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			wishlist_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Wishlists',
					key: 'wishlist_id',
				},
			},
			product_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Products',
					key: 'product_id',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('WishlistItems');
	},
};
