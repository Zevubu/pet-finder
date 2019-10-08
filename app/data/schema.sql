DROP DATABASE IF EXISTS petFinder_db;
CREATE DATABASE petFinder_db;
USE petFinder_db;


CREATE TABLE lost
(
	id int NOT NULL AUTO_INCREMENT,
	animal_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE found
(
	id int NOT NULL AUTO_INCREMENT,
	animal_name varchar(255),
	PRIMARY KEY (id)
);

Select * from found;