const express = require('express')
const cors = require('cors')
const app = express()
const figlet = require('figlet')

const PORT = 8001;

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api', (request, response) => {
  const params = request.query; // Parse query parameters from the request URL

  let flipRes = `Use the 'Flip' button`;
  if (params['student'] === 'flip') {
    flipRes = Math.random() < 0.5 ? 'heads' : 'tails';
  }

  const objToJson = {
    flip: flipRes
  };
  response.json(objToJson); // Use response.json() to send a JSON response
});

app.use((request, response) => {
  figlet('404!!', function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      response.status(500).send('Internal Server Error'); // Send an error response
    } else {
      response.status(404).send(data); // Send the 'data' as the 404 response
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});