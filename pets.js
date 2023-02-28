let pets = require("./pets.json"); // The array inside of pets.json -- Example : pets[0.age]
var fs = require("fs");
// format 
// only 2 ways to get input is from CLI user input or to receive code from required files
// process.argv[2] because 0 and 1 indeces are taken up by node and the file using the node
let consoleCommand = process.argv[2]
let singlePet = process.argv[3]
// consoleCommand is CLI user input
if (consoleCommand === 'read') {
  // this line makes sure that the file is read properly, if not it will throw an error message represented by err
  fs.readFile("./pets.json", (err, data) => {
    if (err) {
      console.log(err);
    } else if (!err) {
      const petsData = JSON.parse(data);
      console.log(petsData);
    } else if (!petsData) {
      return console.error('Location is invalid')
    }
  });
  
} else if (singlePet === '1') {
  // console.log first index of petsData
} else if (singlePet === '2') {
  // console.log second index of petsData
} else {
  // console.log('Incorrect Command')
}