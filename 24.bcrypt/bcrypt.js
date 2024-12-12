const bycrpt = require("bcrypt");

const saltRoutds = 10;

// 암호화
function hashPw(pw) {
  return bycrpt.hashSync(pw, saltRoutds);
}

// 비밀번호 일치 여부 확인
function comparePw(inputPw, hashedPw) {
  return bycrpt.compareSync(inputPw, hashedPw); // true/false 반환
}

const originalPw = "1234";
const hashedPw = hashPw(originalPw);
console.log("암호화된 Pw : ", hashedPw);

// 비밀번호 확인
const isMatch = comparePw("1234", hashedPw);
const isMatch2 = comparePw("12345", hashedPw);

console.log("비밀번호 일치? :", isMatch);
console.log("비밀번호 일치? :", isMatch2);
