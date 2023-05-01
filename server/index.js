const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use('/api', middlewares);
app.use('/api', router);

if (process.env.NODE_ENV === "production") {

  app.use(express.static('client/build'))  // set static folder 
  
  app.get('*', (req, res)=> {     
    res.sendFile(path.resolve(__dirname, 'client', 'build',         
                  'index.html' )); 
  })
  app.get('*', (req, res)=> {     
    res.sendFile(path.resolve(__dirname, 'client', 'build',         
                  'index.html' )); 
  })
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});