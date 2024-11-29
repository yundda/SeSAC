-- Active: 1732688622705@@127.0.0.1@3306@sesac
show DATABASES;

create DATABASE mydatabase DEFAULT CHARACTER SET utf8 collate utf8_general_ci;

create DATABASE sesac CHARACTER SET utf8mb4 collate utf8mb4_unicode_ci;

/*
utf8
*/

-- 데이터 베이스 사용 선언
USE sesac;

-- 데이터 목록 확인
show tables;

-- 데이터 베이스 삭제
drop database mydatabase;

################[테이블 관련 명령어]#############
/*
CREATE TABLE 테이블 이름(
    속성이름1 데이터타입 제약조건,
    속성이름2 데이터타입 제약조건
);
*/

-- 제약조건
--  NOT NULL : null 허용 x
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본키 설정(중복 허용x, null 허용x)
-- DEFAULT : 기본 값 설정
-- UNIQUE : 중복 허용 x, null 허용 x, 한 테이블에 여러 개 설정 가능

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

-- 테이블 구조 확인
DESC products;

DROP Table products;

-- 테이블 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20);

ALTER Table products MODIFY new_column INT;

ALTER table products DROP new_column;

################[DML]################
-- 데이터 조작어
-- 데이터 CRUD 를 위해 사용하는 SQL 문

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- SHOW TABLES;
-- DESC user;

INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이형석', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('김성민', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('박수진', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('권순모', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('진현정', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

-- Read >> SELECT [컬럼 이름] FROM [테이블 이름] (WHERE)
SELECT * FROM user; -- 전체 조회
SELECT name FROM user; -- 특정 컬럼 전체 조회
SELECT name, age From user; -- 특정 컬럼 2개 전체 조회
-- where 절 이용해서 조건 걸기
SELECT * FROM user WHERE age >= 25; -- 대소 비교
SELECT * FROM user WHERE id = 3; -- 일치 비교
SELECT id,age FROM user WHERE name = '권순모'; 
-- LIKE 패턴 조회( %, _ 사용)
SELECT * FROM user WHERE address LIKE '서울%'; -- 서울로 시작하는 주소값
SELECT * FROM user WHERE name LIKE '__희'; -- 이름의 세번째 글자가 '희'인 사람
SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 '희'가 들어가는 사람
SELECT * FROM user WHERE address LIKE '%광역시%';

-- IN(list)
SELECT * FROM user WHERE age IN (20,21,22,23); -- 나이가 20,21,22,23살 중 하나에 해당되는 사람
-- BETWEEN a AND B
SELECT * FROM user WHERE age BETWEEN 25 AND 30; -- 25살 이상 30살 이하

-- IS NULL, IS NOT NULL
INSERT INTO user(name, age) VALUES ('서현승',20);
SELECT * FROM user WHERE address IS NULL;
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리 연산자
-- 주소가 null이 아니면서, age가 25 초과인 전체 속성
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;
-- 최씨이고, 나이가 22인 사람
SELECT * FROM user WHERE name like'최%' AND age=22;
-- 서울에 살거나 김씨인 사람
SELECT * FROM user WHERE name like '김%' OR address like '%서울%';

-- order by, distict, limit
SELECT * FROM user ORDER BY age DESC; -- age 기준으로 내림차순 정렬
SELECT * FROM user WHERE id > 6 ORDER BY age ASC;

-- distict
SELECT DISTINCT age from user ORDER BY age ASC; -- age의 중복값을 제외하고 오름차순으로 가져옴

-- 서울시에 사는 사람의 이름과 주소 출력을 2개만
SELECT name,address
from user
WHERE address LIKE '서울%' 
ORDER BY name asc
LIMIT 3; -- 순서가 중요합니다

SELECT * FROM user ;

-- update 문
-- UPDATE 테이블명 set 컬럼명 = '바꿀 값' WHERE 조건

UPDATE user set address = '서울특별시 도봉구' WHERE id=1;
UPDATE user set address = '제주특별자치도 제주시' , name = '이지현' WHERE id=2;

-- delete 문
-- DELTE FROM 테이블명 WHERE 조건
DELETE FROM user WHERE id=11;
DELETE FROM user WHERE id > 8;

CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL DEFAULT '홍길동',
    hobby VARCHAR(20)
);

desc student;

INSERT INTO student (hobby) VALUES ('등산');
INSERT INTO student (hobby,name) VALUES ('등산','박상우');
INSERT INTO student VALUES ('등산','박상우');

SELECT * FROM student;

-- HAVING과 GROUP BY
DROP Table if EXISTS user;
SHOW tables;
CREATE TABLE user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구','야구','클라이밍','배드민턴') NOT NULL,
    gender ENUM('남','여') NOT NULL,
    carrer_year INT NOT NULL
);
DESC user;

INSERT INTO user VALUES(NULL, '김판곤', '축구', '남', 40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);

SELECT * FROM user;

-- 집계함수 사용해보기
-- count, sum, avg, min, max
SELECT COUNT(specialize) FROM user WHERE specialize = '축구'; -- specialize가 축구인 튜플의 개수
SELECT SUM(carrer_year) FROM user WHERE specialize = '축구'; -- 축구 선수의 경력 합
SELECT AVG(carrer_year) FROM user WHERE specialize = '축구'; -- 축구 선수 경력 평균
SELECT min(carrer_year) FROM user WHERE specialize = '축구'; -- 축구 선수 중 경력이 가장 적은 사람
SELECT max(carrer_year) FROM user WHERE specialize = '축구'; -- 축구 선수 중 경력이 가장 많은 사람

-- group by (같은 그룹끼리 묶어서 조회)
SELECT specialize FROM user GROUP BY specialize;
SELECT specialize, count(specialize) FROM user GROUP BY specialize;
-- having
SELECT specialize, count(specialize)
FROM user
WHERE gender = '여'
GROUP BY specialize
-- 그룹화된 테이블에 조건을 다는 것
HAVING COUNT(specialize) >= 2;