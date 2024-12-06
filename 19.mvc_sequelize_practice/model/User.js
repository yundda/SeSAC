// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1111",
  database: "sesac",
});
// TODO: 모델 코드

// 회원가입
exports.signup = (data, cb) => {
  conn.query(
    `INSERT INTO user (userid,pw,name) VALUE ('${data.userid}','${data.pw}','${data.name}')`,
    (err, rows) => {
      if (err) throw err;
      console.log(rows);
      cb(rows);
    }
  );
};

// 로그인
exports.signin = (data, cb) => {
  conn.query(
    `SELECT * from user WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`,
    (err, rows) => {
      if (err) throw err;
      console.log(rows);
      cb(rows);
    }
  );
};

// 프로필 창
exports.postProfile = (data, cb) => {
  conn.query(
    `SELECT * from user WHERE userid='${data.userid}' LIMIT 1`,
    (err, rows) => {
      if (err) throw err;
      console.log(rows);
      cb(rows[0]);
    }
  );
};

// 회원정보 수정
exports.patchProfile = (data, cb) => {
  conn.query(
    `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      cb();
    }
  );
};
// 회원정보 삭제
exports.deleteProfile = (id, cb) => {
  conn.query(`DELETE from user WHERE id='${id}'`, (err, rows) => {
    if (err) throw err;
    cb();
  });
};
