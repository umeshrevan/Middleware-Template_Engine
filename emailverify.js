const http = require('http');
const port = 4050
const server = http.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log('req' , 'res')
    if (req.url == '/') {
        res.statusCode = 200;
        res.end("<h1>This is first page.</h1>");
    }
    else if(req.url == '/verify-email') {
        res.statusCode = 200;
        res.end(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Verify Email</title>
        </head>
        <body>
        <h1>Verify Email</h1>
        <p>please check your email and click on the link to verify.</p>
        <form method="post" action="/verify-email">
        <button><a href="/verified">Verify Email</a></button>
        </form>
        </body>
        </html>
        `);
    }
    else if(req.url == '/verified') {
        res.statusCode = 200;
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
            <title>Email verified</title>
        </head>
        <body>
            <h3>Your email has been verified.</h3>
        </body>
        </html>
        `);
    }
    else{
        res.statusCode = 400;
        res.end("<h1> Page Not Found</h1>");
    }
    
});


server.listen (port , () => {
    console.log(`Server is listening on port ${port}`);
});