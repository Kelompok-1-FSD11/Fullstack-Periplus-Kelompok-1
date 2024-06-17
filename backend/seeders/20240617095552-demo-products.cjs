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
				qty_stock: 20,
				category_id: 'a1492c0f-3dc2-4055-92db-411975e12b7e',
				qty_sold: 1,
				image_path:
					'https://static.periplus.com/u1I24YeCrPKqOnWy3zdfs2R56oTxzkuc0JFQnBfXIMsY9gHCa3kvOhGePCg52vvkA--',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_id: uuidv4(),
				product_name: 'Why a Son Needs a Dad',
				product_description: null,
				price: 201000,
				qty_stock: 10,
				category_id: 'a1492c0f-3dc2-4055-92db-411975e12b7e',
				qty_sold: 0,
				image_path:
					'https://static.periplus.com/gMMZAF5AMdXqmkFLHj3z5SkhOFsb6oUrBr8CIAYrgleO1Wqzn5NpWZ2yoyxLDdqMw--',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_id: uuidv4(),
				product_name: "You're the Coolest Dad in the Box",
				product_description: null,
				price: 178000,
				qty_stock: 6,
				category_id: 'a1492c0f-3dc2-4055-92db-411975e12b7e',
				qty_sold: 2,
				image_path:
					'https://static.periplus.com/ioEiqXwe3HqDZrnfIFvRMPlvGf_FeYC4LDunhB9bq3iIJyuyQ8FvVtZJnncRyllNQ--',
				createdAt: new Date(),
				updatedAt: new Date(),
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
