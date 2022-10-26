'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Ingredient extends Model {

        static associate({ Meal, Meal_ingredient }){
            Ingredient.belongsToMany(Meal, { foreignKey: 'ingredient_id', as: 'meal_ingredients', through: Meal_ingredient })
        }
    }
        Ingredient.init({
            id: {
                type: DataTypes.SMALLINT,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING
        },{
            sequelize,
            underscored: true,
            modelName: 'Ingredient',
            tableName: 'ingredients',
            timestamps: false,
        })
        return Ingredient
    }