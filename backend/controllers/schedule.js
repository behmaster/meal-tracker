const router = require('express').Router()
const db = require('../models')

const { Schedule, Meal, User } = db

router.get('/', async (req, res) => {
    const schedule = await Schedule.findAll()
    res.json(schedule)
})

router.get('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const schedule = await Schedule.findOne({
            where: { id: id },
            include: {
                association: 'meals',
                include: {
                    association: 'meal_ingredients'
                }
            }
        })
        if (!schedule) {
            res.status(404).json({ message: `Could not find schedule with id "${id}"` })
        } else {
            res.json(schedule)
        }
    }
})

router.post('/', async (req, res) => {
    // if(req.currentUser?.role !== 'admin'){
    //     return res.status(403).json({ message: 'You are not allowed to add a place'})
    // }
    const schedule = await Schedule.create(req.body)
    res.json(schedule)
})

router.put('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const schedule = await Schedule.findOne({
            where: { id: id },
        })
        if (!schedule) {
            res.status(404).json({ message: `Could not find schedule with id "${id}"` })
        } else {
            Object.assign(schedule, req.body)
            await schedule.save()
            res.json(schedule)
        }
    }
})

router.delete('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const schedule = await Schedule.findOne({
            where: {
                id: id
            }
        })
        if (!schedule) {
            res.status(404).json({ message: `Could not find schedule with id "${id}"` })
        } else {
            await schedule.destroy()
            res.json(schedule)
        }
    }
})

module.exports = router