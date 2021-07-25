const db = require('../../data/db-config');

const getAll = () => {
  return db('cars');
}

const getById = (id) => {
  return db('cars').where({ id }).first();
}

const create = async (car) => {
  const [id] = await db('cars').insert({
    "vin": car.vin,
    "make": car.make,
    "model": car.model,
    "mileage": car.mileage,
    "title": car.title,
    "transmission": car.transmission,
  });

  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create,
};
