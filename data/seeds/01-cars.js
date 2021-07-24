exports.seed = function(knex) {
    return knex('cars').truncate()
      .then(function () {
        return knex('cars').insert([
            {
                vin: "N234651N2",
                make: "Honda",
                model: "Accord",
                mileage: 120000,
                title: null,
                transmission: "automatic"
            },
            {
                vin: "Y344676N2",
                make: "Honda",
                model: "Civic",
                mileage: 177000,
                title: null,
                transmission: "manual"
            },
        ]);
      });
  };  
