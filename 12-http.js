// npm -global command, comes with node
//  npm --version

//local dependency- use it only in this paticular project
// npm i <packageName>

// global dependency -use it in any project
// npm install -g <packageName>
// sudo install -g<packageName>(mac)

// package.json- manifest file (stores important info about project/package)
// manual approach (create package.json in the root ,create properties etc)
// npm init (step by step,press enter to skip)
// npm init -y(everything default)
const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home </a>
        `)
})

server.listen(5000)