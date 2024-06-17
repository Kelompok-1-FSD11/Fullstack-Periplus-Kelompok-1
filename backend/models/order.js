import { DataTypes, UUIDV4 } from 'sequelize';

export default (sequelize) => {
    const Order = sequelize.define('Order', {
        order_id: {
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
        total_amount: {
            type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
    });

    Order.associate = (models) => {
        Order.belongsTo(models.User, { foreignKey: 'user_id' });
        Order.hasMany(models.OrderItem);
    };

    return Order;
};