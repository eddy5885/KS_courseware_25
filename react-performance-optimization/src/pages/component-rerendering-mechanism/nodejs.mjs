import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import http from "http";

// 定义 React 组件
function Page1() {
  const element4 = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, React!"),
    React.createElement("p", null, "This is a paragraph."),
  );

  return element4;
}

// function main() {

//     const renderedHtml = renderToString(React.createElement(Page1));

//   console.log('renderedHtml',renderedHtml)
// }

// main();

const server = http.createServer((req, res) => {
  // 只处理根路径
  if (req.url === "/") {
    // 渲染 React 组件为 HTML
    const renderedHtml = renderToString(React.createElement(Page1));

    // 构建完整 HTML 页面
    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Server-Side Rendered React</title>
        </head>
        <body>
          <div id="root">${renderedHtml}</div>
        </body>
      </html>
    `;

    // 设置响应头并发送响应
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fullHtml);
  } else {
    // 处理 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// 启动服务器
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
