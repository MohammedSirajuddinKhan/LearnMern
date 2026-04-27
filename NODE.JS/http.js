const http = require('http');

const port = process.env.PORT||3000;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(
      "<h1>Hello World</h1><p>This is my first Node.js server using http</p><a href='https://github.com/mohammedsirajuddinkhan'>GitHub: Mohammed Sirajuddin Khan</a>",
    );
})
server.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})