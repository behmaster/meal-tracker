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
            include: {
                association: 'meal_ingredients',
            }
        })
        if (!meal) {
            res.status(404).json({ message: `Could not find meal with id "${id}"` })
        } else {
            res.json(meal)
        }
    }
})

router.post('/', async (req, res) => {
    // if(req.currentUser?.role !== 'admin'){
    //     return res.status(403).json({ message: 'You are not allowed to add a place'})
    // }
    const meal = await Meal.create(req.body)
    res.json(meal)
})

router.put('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const meal = await Meal.findOne({
            where: { id: id },
        })
        if (!meal) {
            res.status(404).json({ message: `Could not find meal with id "${id}"` })
        } else {
            Object.assign(meal, req.body)
            await meal.save()
            res.json(meal)
        }
    }
})

router.delete('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const meal = await Meal.findOne({
            where: {
                id: id
            }
        })
        if (!meal) {
            res.status(404).json({ message: `Could not find meal with id "${id}"` })
        } else {
            await meal.destroy()
            res.json(meal)
        }
    }
})

router.post('/:id/ingredients', async (req, res) => {
    const id = Number(req.params.id)

    req.body.rant = req.body.rant ? true : false

    const meal = await Meal.findOne({
        where: { id: id }
    })

    if (!meal) {
        res.status(404).json({ message: `Could not find meal with id "${id}"` })
    }

    // const author = await User.findOne({
    //     where: { userId: req.body.authorId }
    // })

    // if (!author) {
    //     res.status(404).json({ message: `Could not find author with id "${req.body.authorId}"` })
    // }

    const ingredient = await Ingredient.create({
        ...req.body,
        id: id
    })

    res.send({
        ...ingredient.toJSON(),
        name
    })
})

router.delete('/:id/ingredients/:ingredient_id', async (req, res) => {
    let placeId = Number(req.params.placeId)
    let commentId = Number(req.params.commentId)

    if (isNaN(placeId)) {
        res.status(404).json({ message: `Invalid id "${placeId}"` })
    } else if (isNaN(commentId)) {
        res.status(404).json({ message: `Invalid id "${commentId}"` })
    } else {
        const comment = await Comment.findOne({
            where: { commentId: commentId, placeId: placeId }
        })
        if (!comment) {
            res.status(404).json({ message: `Could not find comment with id "${commentId}" for place with id "${placeId}"` })
        } else {
            await comment.destroy()
            res.json(comment)
        }
    }
})

module.exports = router