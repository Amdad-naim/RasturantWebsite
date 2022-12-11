const express = require('express');
const app = express();
const path = require('path');
const port = 80 ;

// EXPRESS SPECIFIC STUFF
app.use('/static' , express.static('static'));// for serving static files
app.use(express.urlencoded());

// app.set(path.join(__dirname , 'views'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"))
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views/contact.html"))
});

   // START THE SERVER
app.listen(port, ()=>{
    console.log(`This application started succesfully on ${port}`);
})