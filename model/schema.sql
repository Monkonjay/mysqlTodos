DROP DATABASE IF EXISTS todos_db;

CREATE DATABASE todos_db;

USE todos_db;

CREATE TABLE todos (
id INT auto_increment,
todo VARCHAR(255) NOT NULL,
isCompleted BOOLEAN DEFAULT 0,
PRIMARY KEY (id)
);