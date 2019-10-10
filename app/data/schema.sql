DROP DATABASE IF EXISTS petFinder_db;
CREATE DATABASE petFinder_db;
USE petFinder_db;


CREATE TABLE lost
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(50) NOT NULL,
    user_email varchar(50) NOT NULL,
	user_phone varchar (50) NOT NULL,
    user_address varchar (250) NOT NULL,
	user_city varchar(250) NOT NULL,
    user_state varchar(250) NOT NULL,
	user_zip varchar (250) NOT NULL,
	pet_photo varchar (250) NOT NULL,
	pet_name varchar (250) NOT NULL,
	pet_color varchar (250) NOT NULL,
	pet_description varchar (250) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE found
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(50) NOT NULL,
    user_email varchar(50) NOT NULL,
	user_phone varchar (50) NOT NULL,
    user_address varchar (250), NOT NULL,
	user_city varchar(250) NOT NULL,
    user_state varchar(250) NOT NULL,
	user_zip varchar (250) NOT NULL,
	pet_photo varchar (250) NOT NULL,
	pet_name varchar (250) NOT NULL,
	pet_color varchar (250) NOT NULL,
	pet_description varchar (250) NOT NULL,
	PRIMARY KEY (id)
);


Select * from found;
Select * from lost;