'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Meal_ingredient extends Model {

        static associate({ Meal, Ingredient }){
            // MealIngredient.belongsToMany(Meal, { foreignKey: 'meal_id', as: 'id' })
            // MealIngredient.belongsTo(Ingredient, { foreignKey: 'ingredient_id', as: 'id' })
        }
    }
        Meal_ingredient.init({
            id: {
                type: DataTypes.SMALLINT,
                primaryKey: true,
                autoIncrement: true
            },
            meal_id: DataTypes.SMALLINT,
            ingredient_id: DataTypes.SMALLINT,
            quantity: DataTypes.SMALLINT,
            unit: DataTypes.STRING
        },{
            sequelize,
            underscored: true,
            modelName: 'Meal_ingredient',
            tableName: 'meal_ingredients',
            timestamps: false,
        })
        return Meal_ingredient
    }