//utilized node.js, expresss framework,
//and nodemon for auto starting server when changes are made
const express = require("express")

const app = express()

app.listen(3000, function(){
console.log("Server has started on port 3000.")
})
//Implementing HTTP "GET" requests and sending responses back to users.
//homepage
app.get('/', function(req,res){
  res.send('<h1>My first server using express as an npm framework for node.js.</h1>')
})

//Contacts page
app.get('/contacts', function(req,res){
  res.send('<h1>Contact me at : username@gmail.com</h1>')
})

//About page
app.get('/abouts', function(req,res){
  res.send('<h1>Learning to code before programming in a expressive world.</h1>')
})

//Hobbies page
app.get('/hobbies', function(req,res){
  res.send('<h2><ul><li>Languages</li><li>Markup Languages</li><li>Astrophysics</li><li>Arduino</li></ul></h2>')
})
