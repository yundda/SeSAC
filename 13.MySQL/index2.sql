show tables;
CREATE TABLE customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
desc customer;

INSERT INTO customer (id,name,birthday) VALUES ('aaa','손흥민','1992-03-17');
-- 컬럼명 작성x -> values에 순서대로 적어주면 됨
INSERT INTO customer VALUES ('bbb','황희찬','1997-11-01');
INSERT INTO customer VALUES ('ccc','이강민','2001-05-31');
INSERT INTO customer VALUES ('ddd','조현우','1992-03-17');

SELECT * FROM customer;

-- 외래키 테이블
-- ON UPDATE CASCADE ; 기본키 테이블이 변경되면 외래키 테이블도 자동으로 변경(동기화)
-- 즉, customer 데이터가 변경되면 orderist 데이터가 변경
-- ON DELETE CASCADE; 기본키 테이블이 삭제되면 외래키 테이블도 자동으로 삭제(동기화)
-- 즉, customer 데이터가 삭제되면 orderist 데이터가 삭제
CREATE TABLE orderlist(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    -- 외래키 설정
    Foreign Key (customer_id) REFERENCES customer (id) ON UPDATE CASCADE ON DELETE CASCADE
);
-- 테이블 삭제시,
-- 외래키 설정 된 테이블(orderlist)부터 삭제 > 참조되는 기본키 테이블(customer) 삭제

DESC orderlist;

INSERT INTO orderlist (customer_id,product_name,quantity) VALUES('aaa','맥북',1);
INSERT INTO orderlist (customer_id,product_name,quantity) VALUES('bbb','빅파이',31);
INSERT INTO orderlist (customer_id,product_name,quantity) VALUES('ccc','키보드',3);
INSERT INTO orderlist (customer_id,product_name,quantity) VALUES('bbb','초코파이',5);
INSERT INTO orderlist (customer_id,product_name,quantity) VALUES('ccc','귀여운 텀블러',2);

-- customer 테이블에 없는 회원은 구매할 수 없음
-- INSERT INTO orderlist VALUES('fff','귀여운 텀블러',2);

SELECT * FROM orderlist;

-- ###################################
-- JOIN : 두 테이블을 묶어서 하나의 테이블로 만듦

-- INNER JOIN
-- 1. INNER JOIN과 ON 사용
SELECT *
FROM customer
INNER JOIN orderlist
ON customer.id=orderlist.customer_id;

-- 2. INNER JOIN과 WHERE 사용
SELECT *
From customer, orderlist
WHERE customer.id = orderlist.customer_id; 

-- 3. INNER JOIN과 ON 사용 & where 조회조건 추가
SELECT *
FROM customer
INNER JOIN orderlist
ON customer.id=orderlist.customer_id
WHERE quantity >=5;

-- 4. INNER JOIN, WHERE 사용 & and 조회조건 추가
SELECT *
From customer, orderlist
WHERE customer.id = orderlist.customer_id AND quantity >=5;

-- 5. 특정 컬럼 조회
SELECT orderlist.id, customer.id, customer.name, orderlist.product_name, orderlist.quantity
FROM orderlist, customer
WHERE customer.id = orderlist.customer_id;

SELECT c.id, o.customer_id, c.name, o.product_name, o.quantity
FROM customer as c, orderlist as o
WHERE c.id = o.customer_id;

-- ******* left outer join, right outer join
SELECT *
FROM orderlist LEFT OUTER JOIN customer
ON orderlist.customer_id = customer.id;
SELECT *
FROM orderlist RIGHT OUTER JOIN customer
ON orderlist.customer_id = customer.id;

-- natural join
-- 같은 컬럼이 없어서 안됨
SELECT *
FROM orderlist NATURAL JOIN customer;

-- DCL ; 권한 관련 명령어 (GRANT, REVOKE)
DESC mysql.user;
SELECT * FROM mysql.user;

CREATE USER 'user2'@'localhost' IDENTIFIED BY '4321';

show GRANTS for 'user2'@'localhost'; -- (권한 확인)권한이 없음..

DROP USER 'user2'@'localhost';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by '1111'; -- mysql root 비밀번호 변경


