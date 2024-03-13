const fs = require('fs');

// Read the JSON file asynchronously
const filePath = 'C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\testing\\Article-list.json';
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);
  const shortenedJson = Object.fromEntries(Object.entries(jsonData).slice(0, 2));
  // Now you can work with the parsed JSON data
  console.log(shortenedJson);
});
