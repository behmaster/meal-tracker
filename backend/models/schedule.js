'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class MealTime extends Model {

        static associate({ User, MealContent }){
            MealTime.hasOne(MealContent, { foreignKey: 'mealcontent_id', as: 'mealContent' })
            MealTime.belongsTo(User, { as: 'author', foreignKey: 'user_id' })
        }
    }
        MealTime.init({
            mealTime_id: {
                type: DataTypes.SMALLINT,
                primaryKey: true,
                autoIncrement: true
            },
            mealContent_id: DataTypes.SMALLINT,
            user_id: DataTypes.SMALLINT,
            date: DataTypes.DATE,
            mealCategory: DataTypes.STRING
        },{
            sequelize,
            underscored: true,
            modelName: 'MealTime',
            tableName: 'mealTime',
            timestamps: false,
        })
        return MealTime
    }