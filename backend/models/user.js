import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
	const User = sequelize.define(
		'User',
		{
			user_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
			},
			user_fname: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			user_lname: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING,
				unique: true,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			role: {
				allowNull: false,
				defaultValue: 'user',
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: true,
		}
	);

	User.associate = (models) => {
		User.hasMany(models.Order);
		User.hasMany(models.ProductReview);
		User.hasOne(models.Cart);
		User.hasOne(models.Wishlist);
	};

	return User;
};
