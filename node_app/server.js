const http = require('http');
const fs = require('fs');
const {parse}  = require('querystring');
const url = require('url');

let data=`
        <html>
        <head>
            <meta charset="utf-8" />
        </head>
        <body>
        <h2> FORM </h2>
        <form method="POST" action="/message">
        <p>
        <label for="message"> Message </label>
        <input type="text" name="message" >
        </p>
        <button type="submit"> Submit </button>
        </form>
        </body>
        </html>
`;

const app = http.createServer((req,res)=>{

            if(req.url ==='/message'){
                var q = url.parse(req.url);
                let body='';
                req.on('data',chunk=>{
                    body+=chunk.toString();
                    
                });
                req.on('end',()=>{
                    fs.writeFile('message.txt', parse(body).message, (err) => {
                        if (err) console.log(err);
                        console.log('The file has been saved!');
                      });
                });
                  res.writeHead(200,{"Content-Type":"text/html"})
                  res.write('File saved successfully click <a href="/" > Click to go back </a>');
                  res.end();
            }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
            }
}).listen(8080);
