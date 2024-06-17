'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Products', [
			{
				product_id: uuidv4(),
				product_name: 'The Book Of Terribly Awesome Dad Jokes',
        product_description: null,
        price: 200000,
        stock: 20,
        category_id: ''
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
