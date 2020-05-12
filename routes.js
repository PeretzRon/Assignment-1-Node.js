
const requestHandler = (req, res)=> {
    const url = req.url;
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    switch (url) {
        case '/' :
            res.write('<body><h1>This is the first assignment in Node.js</h1></body>');
            break;
        case '/users' :
            res.write(
                '<body><h1>This is the first assignment in Node.js</h1>' +
                '<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>'
            );
            break;
        default:
            res.write('<body><h1>Opps... Wrong path - 404</h1></body>');

    }

    res.write('</html>');
    return res.end();
}

exports.handler = requestHandler;