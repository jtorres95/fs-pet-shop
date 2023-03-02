// Import the Express module
const express = require('express');
// file system read import
let fs = require('fs');

const bodyParser = require('body-parser')

// Create a new instance of the Express server
const app = express();

app.use(bodyParser.json())

// Gets all pets with no ID specified
app.get('/pets', (req, res, next) => {
  fs.readFile('./pets.json', 'utf8', (err, data) => {
    const allPets = JSON.parse(data);
    if (err) {
      return next(err);
    } else {
      res.send(allPets)
    }
  })
});

// Gets pet by ID in URL
// Example : localhost:3000/pets/1
app.get('/pets/:id', (req, res, next) => {
  fs.readFile('./pets.json', 'utf8', (err, data) => {
    const id = parseInt(req.params.id);
    console.log('ID from URL : ', id);
    const pets = JSON.parse(data);

    if (err) {
      return next(err)
    }

    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    res.send(pets[id])
  })
});

// creates an object under the path as a string parameter on line 46
app.post('/pets', (req, res, next) => {
  // Add a new pet object to pets.json
  // Get data from request

  fs.readFile('./pets.json', 'utf8', (err, data) => {
    if (err) {
      return next(err)
    }

    const pets = JSON.parse(data)
    const age = Number.parseInt(req.body.age)
    // values on line 59 are assigned by being extracted from the body request, since the key names
    // already exist within the object
    const { kind, name } = req.body

    if (!kind || Number.isNaN(age) || !name) {
      return res.sendStatus(400)
    }

    // Create a variable for new pet
    const newPet = { age, kind, name }

    // Push newPet to pets (data from pets.JSON)
    pets.push(newPet)
    console.log('pets after post : ', pets)

    // stringified version from JSON of what is already parsed as an object
    const petsString = JSON.stringify(pets)
    // Write the new pet to pets.JSON
    // whatever is written will be apended onto the pets.json file
    fs.writeFile('./pets.json', petsString, (err) => {
      if (err) {
        return next(err)
      }
      // Return newPet to user if writing was successful
      res.send(newPet)
    })
  })
})




app.patch('/pets/:id', (req, res, next) => {
  // Add a new pet object to pets.json
  // Get data from request

  fs.readFile('./pets.json', 'utf8', (err, data) => {
    if (err) {
      return next(err)
    }

    const pets = JSON.parse(data)
    const age = Number.parseInt(req.body.age)
    const { kind, name } = req.body
    const id = parseInt(req.params.id);
    const pet = pets[id]

    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    if (!kind || Number.isNaN(age) || !name) {
        return res.sendStatus(400)
    }

    if (!Number.isNaN(age)) {
        pet.age = age
    }

    if (kind) {
        pet.kind = kind
    }

    if (name) {
        pet.name = name
    }

    console.log(pet, age, kind, name, id)

    const updatedPets = JSON.stringify(pets);

    fs.writeFile('./pets.json', updatedPets, (err) => {
      if (err) {
        return next(err)
      }
      res.send(pet)
    })
  })
})


app.delete('/pets/:id', (req, res, next) => {
  // Add a new pet object to pets.json
  // Get data from request

  fs.readFile('./pets.json', 'utf8', (err, data) => {
    if (err) {
      return next(err)
    }

    const pets = JSON.parse(data)
    const id = parseInt(req.params.id);

    if (id < 0 || id >= pets.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    if (id !== -1){
      const pet = pets.splice(id, 1)[0];
      res.status(204).send()
      console.log('this shit worked cuz', pets)
    }

    const deletedAPet = JSON.stringify(pets)
    fs.writeFile('./pets.json', deletedAPet, (err) => {
      if (err) {
        return next(err)
      }
      res.send(pet)
    })

    
    })
  })






// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;