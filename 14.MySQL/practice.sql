CREATE DATABASE practice1 CHARACTER SET utf8mb4 collate utf8mb4_unicode_ci;
USE practice1;
show tables;
DESC member;

CREATE TABLE member(
    id VARCHAR(20) PRIMARY KEY NOT NULL,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2)
);

ALTER Table member ADD interest VARCHAR(100);
ALTER table member drop age;
ALTER Table member MODIFY id VARCHAR(10);


CREATE Table user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

DESC user;


INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('hong1234','8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('power70', 'qxurssda', '변사또', 'M', '1978-05-02', 53);
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('hanjo', '3k48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('dvadva', 'ksf3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('Jungkrat', '41fhaf', '정크랫', 'M', '1999-11-11', 2);

SELECT * FROM user;

-- 1.
SELECT * FROM user ORDER BY birthday ASC;
-- 2.
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;
-- 3.
SELECT id,name FROM user WHERE birthday BETWEEN '1990-01-01' and '1999-12-31';
-- 4.
SELECT * FROM user WHERE birthday like('____-06-__') ORDER BY birthday asc;
-- 5.
SELECT * FROM user WHERE gender = 'M' AND birthday BETWEEN '1970-01-01' and '1979-12-31';
-- 6.
SELECT * FROM user ORDER BY age DESC LIMIT 3;
-- 7.
SELECT * FROM user WHERE age BETWEEN 25 and 50;
-- 8.
UPDATE user set pw = '12345678' WHERE id='hong1234';
-- 9.
DELETE FROM user WHERE id='jungkrat';

CREATE TABLE visitor(
    id AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);

INSERT INTO (name,comment) VALUES ('홍길동','이찬혁');
INSERT INTO (name,comment) VALUES ('이찬혁','으라차차');

########## DCL
CREATE USER 'sesac'@'%' IDENTIFIED BY '1111';
-- 권한 설정
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1111'
FLUSH PRIVILEGES;

SELECT * FROM mysql.user;
SHOW GRANTS for 'sesac'@'%'
