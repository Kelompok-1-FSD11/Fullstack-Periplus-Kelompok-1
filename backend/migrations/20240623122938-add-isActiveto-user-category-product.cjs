'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Users', 'isActive', {
			allowNull: false,
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		});

		await queryInterface.addColumn('Categories', 'isActive', {
			allowNull: false,
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		});

		await queryInterface.addColumn('Products', 'isActive', {
			allowNull: false,
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Users', 'isActive');
		await queryInterface.removeColumn('Categories', 'isActive');
		await queryInterface.removeColumn('Products', 'isActive');
	},
};
