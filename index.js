
// let fs = require('fs') //fs is file system
// let path = require('path')
// const fileName = path.join(__dirname, './data.txt') //path.join joins them together

// //const fileName = './data.txt'

// // When you want to write to a file
// function writeToAFile(content) {
//     try{
//         fs.writeFile(fileName, content, err=> {
//             if (!err) console.log('Saved')
//         })
//     }catch(e) {
//         console.log('Issue when writing to a file.')
//     }
// }

// //When you only want to read from a file
// function readFromAFile() {
//     fs.readFile(fileName, 'utf8', (err, data)=> {
//         if(!err) console.log(data);
//     })
// } //checking for any errors with the if statement

// function appendToAFIle(content) {
//     try {
//         fs.appendFile(fileName, content, err=> {
//             if(!err) console.log('Your data has been modified')
//         })
//     }catch(e) {
//         console.log('Issue when appending data to a file')
//     }
// } //this is to update to a file

//We create a function to avoid repetition

//Calling a function


//HTTP Module
// const http = require('http')

// //Port number
// const port = +process.env.PORT || 4000 //+ converts a string to a number

//Create a web server 
// http.createServer((req, res)=> { //request(client) , respond(server)
//     res.writeHead(200, {
//         'Context-type' : 'text/plain' 
//     })
//     res.end('Hello there')
// }).listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// })

// Revision
/* Making use of the http module: 
1. First import the http(ES MODULE-more efficient*/
import { log } from 'console'
import http from 'http'
//or

//2. Making a port
const port = +process.env.PORT || 4000

// 3. Creating the web server
http.createServer((req, res) => /*call back function*/ {
    res.writeHead(200, { /* specificing a object */
    /*What kind of data is gonna be displayed*/
    'Content-type': 'application.json'
})
switch(req.url) {//switch will specify a variable
    case '/':
    res.end(JSON.stringify("You're home"))
    
    break
    case '/about':
    res.end(JSON.stringify("About Page"))
    break
    default: 
    res.end(JSON.stringify("404"))
}
}) .listen(port, () => {
    console.log(`server is running on : http//localhost:${port}`);
})/*Port is specified by listen. Its similar to an array method */
// console.log(`
// URL: ${req.url}
// HTTP METHOD: ${req.method}`);
//without a web server it would not be possible to display anything on the browser. 

//get is the method that allows us to retrieve data
// each application will use a specific port number
