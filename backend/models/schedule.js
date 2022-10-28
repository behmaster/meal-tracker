'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Schedule extends Model {

        static associate({ User, Meal }){
            Schedule.belongsTo(Meal, { as: 'meals', foreignKey: 'meal_id' })
            Schedule.belongsTo(User, { as: 'users', foreignKey: 'user_id' })
        }
    }
        Schedule.init({
            id: {
                type: DataTypes.SMALLINT,
                primaryKey: true,
                autoIncrement: true
            },
            meal_id: DataTypes.SMALLINT,
            user_id: DataTypes.SMALLINT,
            date: DataTypes.DATE,
            meal_category: DataTypes.STRING
        },{
            sequelize,
            underscored: true,
            modelName: 'Schedule',
            tableName: 'schedule',
            timestamps: false,
        })
        return Schedule
    }