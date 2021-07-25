exports.seed = function(knex) {
    return knex('cars').truncate()
      .then(function () {
        return knex('cars').insert([
            {
                vin: "11111111111111111",
                make: "Honda",
                model: "Accord",
                mileage: 120000,
                title: null,
                transmission: "automatic"
            },
            {
                vin: "55555555555555555",
                make: "Honda",
                model: "Civic",
                mileage: 177000,
                title: null,
                transmission: "manual"
            },
        ]);
      });
  };  
