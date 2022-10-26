'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Meal extends Model {

        static associate({ User, Schedule, Meal_ingredient, Ingredient }){
            Meal.belongsTo(User, { as: 'user', foreignKey: 'user_id' })
            Meal.hasMany(Schedule, { foreignKey: 'meal_id', as: 'schedule' })
            Meal.belongsToMany(Ingredient, { as: 'meal_ingredients', foreignKey: 'meal_id', through: Meal_ingredient })
        }
    }
        Meal.init({
            id: {
                type: DataTypes.SMALLINT,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id: DataTypes.SMALLINT,
            recipe: DataTypes.TEXT
        },{
            sequelize,
            underscored: true,
            modelName: 'Meal',
            tableName: 'meals',
            timestamps: false,
        })
        return Meal
    }