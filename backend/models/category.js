import { DataTypes, UUIDV4 } from "sequelize";

export default (sequelize) => {
    const Category = sequelize.define("Category", {
        category_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
        }
    }, {
        timestamps: true,
    })

    Category.associate = (models) => {
        Category.hasMany(models.Product)
    };

    return Category
}