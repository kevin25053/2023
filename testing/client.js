// client.js

const axios = require('axios');

const serverUrl = 'http://localhost:3000/api';

const numberOfNamesToFetch = 2; // Change this to the desired number

// Make a GET request to the server using axios
axios.get(`${serverUrl}`)
    .then(response => {
        console.log('Server response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
