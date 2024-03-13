// server.js

const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = 3000;
const path = require('path');

// Middleware to log when a client connects
app.use((req, res, next) => {
    console.log(`Client connected: ${req.ip}`);
    next();
});

// Define a route to handle incoming requests
app.get('/api', async(req, res) => {
    const data = await fs.readFile('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\testing\\Article-list.json','utf8');

        // Parse the JSON data
    const jsonData = JSON.parse(data);

        // Console log the JSON data
    console.log(jsonData);
    res.send(jsonData);
});

// Serve static files from the 'public' directory
app.use(express.static('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023'));

// Serve CSS and JS files from the 'public' directory
app.use('/css', express.static( 'C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\css'));
app.use('/images', express.static( 'C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\images'));

app.get('/home', (req, res) => {
    res.sendFile('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\index.html');
  });
  app.get('/News/0-10', async(req,res)=>{
    const data = await fs.readFile('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\testing\\Article-list.json', 'utf8');
  
      // Parse the JSON data
    const jsonData = JSON.parse(data);
    const shortenedJson = Object.fromEntries(Object.entries(jsonData).slice(0, 10));
    res.json(shortenedJson);
  });
  app.get('/News/ID*', async (req, res) => {
   
    res.sendFile('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\index3.html');
  
     

  });

  app.get('/News/Json/ID*', async (req, res) => {
 
    const url=req.originalUrl.split('/');
    const ident=url[url.length-1]
    const data = await fs.readFile('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\testing\\Article-list.json', 'utf8');
  
    // Parse the JSON data
    const jsonData = JSON.parse(data);
    console.log(jsonData[ident]);
    res.send(jsonData[ident]);
  });
  app.get('/Projects',async(req,res)=>{
    res.sendFile('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\index4.html');
  });
  app.get('/Projects/Json/project',async(req,res)=>{
    const data = await fs.readFile('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\testing\\Projects.json', 'utf8');
  
    // Parse the JSON data
  const projsonData = JSON.parse(data);
  res.send(projsonData);
  });

  app.get('/News', async (req, res) => {
    try {
      
  
     
      var mist='C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\index2.html';

      // Send the HTML file
      res.sendFile(mist, (err) => {
        if (err) {
          console.error('Error sending HTML file:', err);
          res.status(500).send('Internal Server Error');
        }
      });
  
      // Send the JSON data
      
    } catch (error) {
      console.error('Error reading JSON file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
    
});

const jsonData={};
fs.readFile('C:\\Users\\ADMIN\\Desktop\\VS_projects\\2023\\testing\\Article-list.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the JSON data
    jsonData = JSON.parse(data);

    // Now you can work with the parsed JSON data
    console.log(jsonData['ID1']['url']);
});
