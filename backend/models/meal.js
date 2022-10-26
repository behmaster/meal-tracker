'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class MealContent extends Model {

        static associate({ User, MealTime }){
            MealContent.belongsTo(User, { as: 'author', foreignKey: 'user_id' })
            MealContent.belongsTo(MealTime, { as: 'mealContent_id', foreignKey: 'mealContent_id' })
        }
    }
        MealContent.init({
            mealContent_id: {
                type: DataTypes.SMALLINT,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id: DataTypes.SMALLINT,
            ingredients: DataTypes.STRING,
            recipe: DataTypes.TEXT
        },{
            sequelize,
            underscored: true,
            modelName: 'MealContent',
            tableName: 'mealContent',
            timestamps: false,
        })
        return MealContent
    }