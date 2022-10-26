const router = require('express').Router()
const db = require('../models')

const { Meal, Ingredient, User } = db

router.get('/', async (req, res) => {
    const meals = await Meal.findAll()
    res.json(meals)
})

router.get('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const meal = await Meal.findOne({
            where: { id: id },
            // include: {
            //     association: 'user',
            //     include: 'user'
            // }
        })
        if (!meal) {
            res.status(404).json({ message: `Could not find meal with id "${id}"` })
        } else {
            res.json(meal)
        }
    }
})

module.exports = router