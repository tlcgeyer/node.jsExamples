
let fs = require('fs') //fs is file system
let path = require('path')
const fileName = path.join(__dirname, './data.txt') //path.join joins them together

//const fileName = './data.txt'

// When you want to write to a file
function writeToAFile(content) {
    try{
        fs.writeFile(fileName, content, err=> {
            if (!err) console.log('Saved')
        })
    }catch(e) {
        console.log('Issue when writing to a file.')
    }
}

//When you only want to read from a file
function readFromAFile() {
    fs.readFile(fileName, 'utf8', (err, data)=> {
        if(!err) console.log(data);
    })
} //checking for any errors with the if statement

function appendToAFIle(content) {
    try {
        fs.appendFile(fileName, content, err=> {
            if(!err) console.log('Your data has been modified')
        })
    }catch(e) {
        console.log('Issue when appending data to a file')
    }
} //this is to update to a file

//We create a function to avoid repetition

//Calling a function


//HTTP Module
const http = require('http')

//Port number
const port = +process.env.PORT || 4000 //+ converts a string to a number

//Create a web server 
http.createServer((req, res)=> { //request(client) , respond(server)
    res.writeHead(200, {
        'Context-type' : 'text/plain' 
    })
    res.end('Hello there')
}).listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})