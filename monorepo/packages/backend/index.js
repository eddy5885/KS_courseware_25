const config = require('config');
const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('后端服务启动，配置如下:');
console.log(config);
const server = http.createServer((req, res) => {
    if (req.url === '/api/getValue') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(config));
    } else if (req.url === '/api/ten/getorderlist' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            let pageIndex = 1;
            let pageSize = 10;
            let orderStatus = '';
            try {
                const parsed = JSON.parse(body);
                pageIndex = parseInt(parsed.pageIndex) || 1;
                pageSize = parseInt(parsed.pageSize) || 10;
                orderStatus = parsed.order_status || '';
            } catch (e) {}
            const filePath = path.join(__dirname, 'mock_order_data.json');
            const rawData = fs.readFileSync(filePath, 'utf-8');
            let allData = JSON.parse(rawData);
            if (orderStatus !== '') {
                allData = allData.filter(item => item.order_status === orderStatus);
            }
            const total = allData.length;
            const start = (pageIndex - 1) * pageSize;
            const end = start + pageSize;
            const data = allData.slice(start, end);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ data, total }));
        });
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

server.listen(50001, () => {
    console.log('Server running at http://localhost:50001/');
});
// 这里可以添加更多后端逻辑 