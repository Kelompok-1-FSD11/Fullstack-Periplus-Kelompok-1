'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Categories', [
			{
				category_id: uuidv4(),
				category_name: 'Books',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Books on Indonesia',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Academic Books',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Magazines',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Stationery',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Travel Accessories',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Toys',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Handphone Accessories',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Greeting Card',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				category_id: uuidv4(),
				category_name: 'Gift Voucher',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Categories', null, {})
	},
};
