'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('CartItems', {
			cart_item_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			cart_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Carts',
					key: 'cart_id',
				},
			},
			product_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Products',
					key: 'product_id',
				},
				quantity: {
					allowNull: false,
					type: Sequelize.INTEGER,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('CartItems');
	},
};
