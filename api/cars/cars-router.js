const router = require('express').Router();
const Cars = require('./cars-model');
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware');

router.get('/', async (req, res, next) => {
    const cars = await Cars.getAll();
    cars ? res.status(200).json(cars) : next();
});

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.car)
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
    Cars.create(req.body)
        .then(newCar => {
            res.status(201).json(newCar)
        })
        .catch(err => next(err))
});

module.exports = router;
