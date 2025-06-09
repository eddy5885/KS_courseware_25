const config = require('config');
const http = require('http');

console.log('后端服务启动，配置如下:');
console.log(config);
const server = http.createServer((req, res) => {
    if (req.url === '/api/getValue') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(config));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

server.listen(50001, () => {
    console.log('Server running at http://localhost:50001/');
});
// 这里可以添加更多后端逻辑 