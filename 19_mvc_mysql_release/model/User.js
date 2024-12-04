// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1111",
  database: "sesac",
});
// TODO: 모델 코드
// 데이터 등록
exports.postSignup = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUE (null,'${data.userid}','${data.name}','${data.pw}')`,
    (err, rows) => {
      if (err) throw err;
      console.log("model getSignup :", rows);
      cb(rows.insertId);
    }
  );
};

// 데이터 조회
exports.postSignin = (data, cb) => {
  conn.query(
    `SELECT * FROM user WHERE userid = '${data.userid}'`,
    (err, rows) => {
      if (err) throw err;

      console.log("model postSignin", rows);
      cb(rows[0]);
    }
  );
};

// 데이터 수정
exports.patchProfile = (data, cb) => {
  conn.query(
    `UPDATE user SET name = '${data.name}', pw = '${data.pw}' WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log("model User.js patch :", rows);
      cb();
    }
  );
};

// 데이터 삭제
exports.deleteProfile = (id, cb) => {
  conn.query(`DELETE from user WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("model User.js delete:", rows);
    cb();
  });
};
