import { DataTypes, UUIDV4 } from "sequelize";

export default (sequelize) => {
    const Product = sequelize.define("product", {
        product_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        product_description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DECIMAL(10, 2),
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        category_id: {
            type: DataTypes.UUID,
            references: {
                model: "Categories",
                key: "category_id"
            }
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true
    })

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {foreignKey: "category_id"});
        Product.hasOne(models.ProductDetail);
        Product.hasMany(models.OrderItem);
        Product.hasMany(models.CartItem);
        Product.hasMany(models.WishlistItem);
    };

    return Product
}