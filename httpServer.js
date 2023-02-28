// const http = require('http');
// const hostname = 'localhost';
// const port = 8000;
// const pets = require('./pets.json');

// console.log(pets)

// const server = http.createServer((req, res) => {
  
  
//   if (req.url === '/pets'){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     console.log('Accessing all pets')
//     res.write('Accessing all pets', pets) 
//     res.end()
  
//   } else {
//     console.log('give me something please')
//     res.write('what the fuck')
//   }
// });




// server.listen(port, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });



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