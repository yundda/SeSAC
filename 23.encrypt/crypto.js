const crypto = require("crypto");
/*
1. crypto를 통해 단방향 암호화 구현 > 복호화 불가능
- createHase(알고리즘)
- pdkdf2sync(비밀번호, 솔트, 해시반복횟수, 키(해시값)의 길이,알고리즘)
*/

// 1-1) createHash(알고리즘).update(평문).digest(인코딩방식)
// 인코딩 방식 : base64, hex(16진수), ascii, binary(2진수)
// digest : 암호화된 문장을 우리가 읽을 수 있는 문자열로 인코딩하는 것
const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};
console.log(createHashPW("1234"));
console.log(createHashPW("1234")); // 입력 : 같은 값 -> 출력 : 같은 해시 값
console.log(createHashPW("1234.")); // 조금만 변해도 아예 다른 해시값

// 1-2) pbkdf2sync(비밀번호, 솔트, 해시반복횟수, 키(해시값)의 길이,알고리즘).toString(인코딩방식)
function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) // Buffer 객체(2진 데이터)를 리턴하는 중
    .toString("base64"); // 우리가 볼 수 있는 문자열로 인코딩
  // return {salt:salt, hash: hash}
  return { salt, hash };
} // DB에 salt와 hash 모두 저장해야 함

console.log("pbkdf2Sync >>", saltAndHashPw("1234"));
console.log("pbkdf2Sync >>", saltAndHashPw("1234"));
console.log("pbkdf2Sync >>", saltAndHashPw("1234")); // 매번 다른 값이 나옴

/* --- 암호 비교 함수 ; db에 저장된 암호화된 값과 유저가 입력한 값이 같은가 ---- */

function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100; // 반복 횟수 saltAndHashPw와 같아야 함
  const keylen = 64; // saltAndHashPw와 같아야 함
  const algorithm = "sha512"; // saltAndHashPw와 같아야 함

  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm)
    .toString("base64");

  // if(hash === savedHash){
  //   return true
  // } else {
  //   return false
  // }
  return hash === savedHash; // true/false
}

const realPw = "qwer1234";
console.log("========================");
const data = saltAndHashPw(realPw);
console.log(data);
// {
//   salt: 'vNYjy3odjm8s0Ohq0u5HFQ==',
//   hash: 'y+Dmv4L61BwsRWuJroS4KuxEQPdOYD3XLkFmQggznvx5a5Y//JJ/MNWqj0cZRmyYInB0uqYrHrn1a84uIfCKoQ=='
// }
const { salt: DBsalt, hash: DBhash } = data;
console.log("=====비밀번호 일치 여부 확인======");
const isMatch1 = checkPw("qwer1234!", DBsalt, DBhash);
const isMatch2 = checkPw("qwer1234", DBsalt, DBhash);
console.log(isMatch1);
console.log(isMatch2);

// ====================  여기까지 단방향  ==================

/*
2. 양방향 알고리즘
- createCipheriv(알고리즘,키,iv) : 암호화
- createDecipheriv : 복호화
*/

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // (비밀수)
const algorithm = "aes-256-cbc";
const originalMessage = "hello, world"; // 원본 메시지, 평문

// 암호화
function encrypt(text) {
  // 1. 암호화 객체 생성
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // 2. 실제 데이터 암호화
  // cipher.update(평문, 입력 인코딩 방식, 출력 인코딩 방식)
  let encrypted = cipher.update(text, "utf8", "base64");

  // 3. 최종 결과 생성
  encrypted += cipher.final("base64");

  return encrypted; // 암호화된 데이터
}
console.log(encrypt(originalMessage));
console.log(encrypt(originalMessage)); // 같은 결과 출력

// 복호화
function decrypt() {
  // 1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  // 2. 실제 데이터 복호화
  // base 64 방식으로 인코딩된 문자열이 utf8로 복호화됨
  let decrypted = decipher.update(encryptedMessage, "base64", "utf8");
  // 3. 최종 결과 생성
  decrypted += decipher.final("utf8");

  return decrypted;
}

const encryptedMessage = encrypt(originalMessage);
console.log("암호화된 문장 : ", encryptedMessage);
const decryptedMessage = decrypt(encryptedMessage);
console.log("복호화된 문장 :", decryptedMessage);
