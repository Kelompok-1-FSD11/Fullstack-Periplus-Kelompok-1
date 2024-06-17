import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
    const Wishlist = sequelize.define('Wishlist', {
        wishlist_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Users',
                key: 'user_id',
            },
        allowNull: false,
        },
    }, {
        timestamps: true,
    });

    Wishlist.associate = (models) => {
        Wishlist.belongsTo(models.User, { foreignKey: 'user_id' });
        Wishlist.hasMany(models.WishlistItem);
    };

    return Wishlist;
};