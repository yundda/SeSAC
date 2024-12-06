const Visitor = require("../model/Visitor");
// console.log(Visitor.getVisitors());
// 얘가 문제임....

// GET '/'
exports.main = (req, res) => {
  res.render("index");
};

// GET '/visitors'
exports.getVisitors = (req, res) => {
  // [DB 연결 전]
  // res.render("visitors", { data: Visitor.getVisitors() });

  // [DB 연결 후]
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
  /*
  Visitor.js의 cb에 해당 & cb의 인자 rows = 하단의 result
  (result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  }
    */
};

// GET '/visitor/:id'
exports.getVisitor = (req, res) => {
  console.log(req.params); // { id: '1' }
  console.log(req.params.id); // 1
  Visitor.getVisitor(req.params.id, (result) => {
    console.log("특정 데이터 Cvisitor.js", result);
    res.send(result);
  });
};

// POST '/visitor' 등록
exports.postVisitor = (req, res) => {
  console.log(req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js:", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

// DELETE '/visitor'
exports.deleteVisitor = (req, res) => {
  console.log(req.body); // {id : '3'}
  console.log(req.body.id); // '3'
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "번 ID 삭제 완료");
  });
};

// PATCH '/visitor'
exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("response patch");
  });
};
