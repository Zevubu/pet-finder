DROP DATABASE IF EXISTS petFinder_db;
CREATE DATABASE petFinder_db;
USE petFinder_db;


CREATE TABLE lost
(
	id int NOT NULL AUTO_INCREMENT,
	pet_name varchar(50) NOT NULL,
    pet_type varchar(50) NOT NULL,
	pet_color varchar (50) NOT NULL,
    pet_description varchar (250),
	pet_photo varchar(250) NOT NULL,
	user_email varchar (250), NOT NULL,
	user_phone varchar (250), NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE found
(
	id int NOT NULL AUTO_INCREMENT,
	pet_name varchar(50) NOT NULL,
    pet_type varchar(50) NOT NULL,
	pet_color varchar (50) NOT NULL,
	pet_description varchar (250),
	pet_photo varchar(250) NOT NULL,
	user_email varchar (250), NOT NULL,
	user_phone varchar (250), NOT NULL,
    longitude varchar (100) NOT NULL,
    lattitude varchar (100) NOT NULL,
	PRIMARY KEY (id)
);


Select * from found;
Select * from lost;