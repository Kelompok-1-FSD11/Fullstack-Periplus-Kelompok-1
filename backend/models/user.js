import { DataTypes, UUIDV4 } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define("User", {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        user_fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_lname : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps: true,
    })

    User.associate = (models) => {
        User.hasMany(models.Order);
        User.hasOne(models.Cart);
        User.hasOne(models.Wishlist)
    };

    return User
}