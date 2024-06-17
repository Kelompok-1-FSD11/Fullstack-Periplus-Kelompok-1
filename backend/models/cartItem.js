import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
    const CartItem = sequelize.define('CartItem', {
        cart_item_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        cart_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Carts',
                key: 'cart_id',
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
    timestamps: true,
    });

    CartItem.associate = (models) => {
        CartItem.belongsTo(models.Cart, { foreignKey: 'cart_id' });
        CartItem.belongsTo(models.Product, { foreignKey: 'product_id' });
    };

    return CartItem;
};