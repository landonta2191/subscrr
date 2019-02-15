
const express = require('express');
app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));


//define a GET route at the path/meme 
//user res.send() to send back an image ;ink to a funny meme

app.listen(PORT, () => {
console.log(`server listening on ${8080}`);
})