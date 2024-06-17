import { DataTypes, UUIDV4 } from "sequelize";

export default (sequelize) => {
    const Cart = sequelize.define("Cart", {
        cart_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.UUID,
            references: {
                model: "Users",
                key: "user_id"
            },
            allowNull: false,
        },
    }, {
        timestamps: true
    })

    Cart.associate = (models) => {
        Cart.belongsTo(models.User, { foreignKey: 'user_id' });
        Cart.hasMany(models.CartItem);
    };
    
    return Cart;
}