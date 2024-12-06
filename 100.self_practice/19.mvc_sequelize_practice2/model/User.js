// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1111",
  database: "sesac",
});
// TODO: 모델 코드

// 데이터 추가
exports.addUser = (data, cb) => {
  conn.query(
    `INSERT INTO user (userid,name,pw) VALUE('${data.userid}','${data.name}','${data.pw}')`,
    (err, rows) => {
      if (err) throw err;
      console.log(rows);
      cb(rows);
    }
  );
};

// 로그인 특정 데이터 조회
exports.postSignin = (data, cb) => {
  console.log(data);
  conn.query(
    `SELECT * FROM user WHERE userid = '${data.userid}'`,
    (err, rows) => {
      if (err) throw err;
      cb(rows[0]);
    }
  );
};

// 회원정보 수정
exports.patchProfile = (data, cb) => {
  conn.query(
    `UPDATE user SET name='${data.name}',pw='${data.pw}' WHERE id='${data.id}'`,
    (err, rows) => {
      if (err) throw err;
      console.log("User.js :", rows);
      cb(rows);
    }
  );
};

// 데이터 삭제
exports.deleteProfile = (id, cb) => {
  conn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
};
