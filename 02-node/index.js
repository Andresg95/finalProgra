//This is the fix for practice #2. (and also implemnt rest philosophy)

'use-strict'

const http = require('http');
const port = 3001;


const requestHandler = (req, res) => {
    console.log("resquest url JEJEJ: ", req.url);
    res.end("hello node.js server!");
    
}


const server = http.createServer(requestHandler)

server.listen(port, (err) => {

    if (err){
        return console.log('something bad happened', err);
    }
    
    console.log(`server running on port ${port}`);
});

