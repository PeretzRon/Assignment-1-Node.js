const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    switch (url) {
        case '/' :
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Assignment 1</title></head>');
            res.write('<body><h1>This is the first assignment in Node.js</h1>' +
                '<form action="/create-user" method="POST"><input type="text" placeholder="Enter User" name="user"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        case '/users' :
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Assignment 1</title></head>');
            res.write(
                '<body><h1>This is the first assignment in Node.js</h1>' +
                '<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>'
            );
            res.write('</html>');
            return res.end();
        case '/create-user':
            if (method === 'POST') {
                const body = [];
                req.on('data', chunk => {
                    body.push(chunk);
                })
                req.on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    const user = parsedBody.split('=')[1];
                    console.log(user);
                });
                res.statusCode = 302;
                res.setHeader('Location', '/users');
                res.end();
            }else {
                wrongPathHandler(res);
            }
            break;
        default:
           wrongPathHandler(res);
    }
}

const wrongPathHandler = (res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><h1>Oops.. Wrong path - 404 </h1>');
    res.write('</html>');
    res.end();
}

exports.handler = requestHandler;