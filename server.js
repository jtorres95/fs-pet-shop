const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 8000;
const pets = require('./pets.json');
const allPets = JSON.stringify(pets);
const firstPet = JSON.stringify(pets[0]);
const secondPet = JSON.stringify(pets[1]);
const errMsg = 'Status Code : 404'


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url === '/pets'){
    console.log('Accessing all pets')
    res.write(`Accessing all pets : ${allPets}`)
  } else if (req.url === '/pets/0'){
    //write head is redeclared each time because the request is different each time
    res.write(`Accessing first pet : ${firstPet}`)
  } else if (req.url === '/pets/1') {
    res.write(`Accessing second pet : ${secondPet}`)
  } else {
    res.statusCode = 404
    res.write(`Error: ${res.statusCode} file not found`)
  }

  res.end()
});




server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


/* function that reads user input('userinput'(req,res))
server.statusCode
res(pets.whatever)

/*
const whatever = function(request, response) {
let url = request.url
let splitUrl = url.split('/')
let parsedUrl = splitUrl[2].parseInt()
if (parsedUrl > 2 || parsedUrl <= 0) {
  console.log(error)
  statuscode = 404
}
}
*/