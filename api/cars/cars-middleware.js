const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  req.car = await Cars.getById(req.params.id);

  if (!req.car) {
    res.status(404).json({ message: `car with id ${req.params.id} is not found` });
    return;
  }
  next();
}

const checkCarPayload = (req, res, next) => {
  const {vin, make, model, mileage} = req.body;

  if (!vin) {
    res.status(400).json({ message: "vin is missing" })
    return;
  }else if (!make) {
    res.status(400).json({ message: "make is missing" })
    return;
  }else if (!model) {
    res.status(400).json({ message: "model is missing" })
    return;
  }else if (!mileage) {
    res.status(400).json({ message: "mileage is missing" })
    return;
  }
  next();
}

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin)
  if (isValidVin === false) {
    res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
    return;
  }
  next();
}

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body;
  const cars = await Cars.getAll();
  const vinExists = cars.filter(car => car.vin === vin);

  if (vinExists[0] !== undefined) {
    res.status(400).json({ message: `vin ${req.body.vin} already exists` })
    return;
  }
  next();
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};
