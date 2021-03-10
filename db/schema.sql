DROP DATABASE IF EXSITS burger_db;
CREATE DATABASE burger_bd;

USE burger_db;

CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (50)
    devoured BOOLEAN,
    PRIMARY KEY(id)

);
