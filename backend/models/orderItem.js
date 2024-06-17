import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
    const OrderItem = sequelize.define('OrderItem', {
        order_item_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        order_id: {
            type: DataTypes.UUID,
            references: {
                model: 'Orders',
                key: 'order_id',
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
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    }, {
        timestamps: true,
    });

    OrderItem.associate = (models) => {
        OrderItem.belongsTo(models.Order, { foreignKey: 'order_id' });
        OrderItem.belongsTo(models.Product, { foreignKey: 'product_id' });
    };

    return OrderItem;
};