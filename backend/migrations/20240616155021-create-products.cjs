'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Products', {
			product_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			product_name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			product_description: {
				type: Sequelize.TEXT,
			},
			price: {
				allowNull: false,
				type: Sequelize.DECIMAL(10, 2),
			},
			qty_stock: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
			category_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: 'Categories',
					key: 'category_id',
				},
			},
			qty_sold: {
				allowNull: false,
				defaultValue: 0,
				type: Sequelize.INTEGER,
			},
			image_path: {
				allowNull: false,
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('Products');
	},
};
