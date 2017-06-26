const app = express();

const express = require('express');
const loremIpsum = require('lorem-ipsum')


 app.get('/', function(req, res) {
    res.send(loremIpsum({
    count: 3                     
  , units: 'paragraphs'                          
  , format: 'html'     
    }))                 
});

app.get('/randomtext', function(req, res){
   res.send('<a href="/lorem">Lorem Generator</a>');
})



app.listen(3000);
