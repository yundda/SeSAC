const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  // console.log(request)
  console.log("url :", request.url);

  // response
  // response.write('<p>응답1</p>')
  // response.write('<p>응답2</p>')
  // response.write('<p>응답3</p>')
  // response.end('<h3>응답 종료</h3>')

  try {
    //실행 코드
    const data = fs.readFileSync("./inde.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(data);
  } catch (err) {
    // 매개변수 err는 옵션사항 ; try문에서 어떤 에러가 발생되었는지 error 객체를 넘겨줌
    // try문에서 err 났을 때 실행될 코드

    console.log(err);
    const data = fs.readFileSync("./404.html");
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });

    // 404.html을 만들고
    // 파일 이름 읽을 때 오타가 났을 때 404 페이지 보여주기
    response.end(data);
  }
});

const PORT = 8080;
// 서버 이벤트 - connection(클라이언트가 서버에게 요청을 보낼 때), request(클라이언트가 서버에게 요청을 보낼 때 마다)
server.on("connection", function (request, response) {
  console.log("connection 이벤트 발생");
});
server.on("request", function (request, response) {
  console.log("request 이벤트 발생");
});
server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});
