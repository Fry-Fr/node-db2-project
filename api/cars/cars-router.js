const router = require('express').Router();
const Cars = require('./cars-model');

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(err => next(err))
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Cars.getById(id)
        .then(car => {
            res.json(car)
        })
        .catch(err => next(err))
});

router.post('/', (req, res, next) => {
    Cars.create(req.body)
        .then(newCar => {
            res.status(201).json(newCar)
        })
        .catch(err => next(err))
});

module.exports = router;
