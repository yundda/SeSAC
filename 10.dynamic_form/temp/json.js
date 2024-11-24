// JSON
// Javascript Object Notation
// object처럼 보이지만 문자열
// 항상 ""큰따옴표 사용!
/*
{
"name" : "allie",
"married" : "false",
"family" : {"fathier" : "ddd", "mother" : "mmm"}
}
 */

const car = `{
    "model":"아이오닉6",
    "company":"현대",
    "price":50000000,
    "year":2023,
    "isElectric":true,
    "option":["side mirror", "smart sensor"]
}`;
console.log(typeof car); //json ; string
// JSON.parse() > JSON -> object
const obj = JSON.parse(car);
console.log(obj);
console.log(obj.model);
console.log(obj.option);
console.log(typeof obj);

// JSON.stringify() > object -> JSON
const carJson = JSON.stringify(obj);
console.log(carJson);
console.log(typeof carJson);

// stringify()의 세번째 인자 : 들여쓰기 할 공백의 크기
const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson2);
console.log(carJson2.model); // undefined
