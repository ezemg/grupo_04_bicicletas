drop DATABASE DH_BIKES;

CREATE DATABASE DH_BIKES;
USE DH_BIKES;

CREATE TABLE category (
category_id int NOT NULL auto_increment,
name varchar(255),
primary key(category_id)
);
CREATE TABLE products(
id_products int NOT NULL auto_increment,
name varchar(255),
description varchar(255),
image varchar(255),
price float,
category_id int NOT NULL,
foreign key (category_id) REFERENCES category(category_id),
primary key (id_products)

);
CREATE TABLE user_category(
id_user_category int NOT NULL auto_increment,
name varchar(255),
primary key (id_user_category) 
);

CREATE TABLE user(
id int NOT NULL auto_increment,
id_user_category int NOT NULL,
name varchar(255),
last_name varchar(255),
email varchar(255),
password varchar(255),
avatar varchar(255),
primary key (id) ,
foreign key (id_user_category) REFERENCES user_category(id_user_category)

);

CREATE TABLE shopping(
id_shopping int NOT NULL auto_increment,
name varchar(255),
price float,
amount int,
id_user int NOT NULL,
primary key (id_shopping) ,
foreign key (id_user) REFERENCES user(id)
);

CREATE TABLE products_shopping(
id_products_shopping int NOT NULL auto_increment,
id_products int NOT NULL ,
id_shopping int NOT NULL ,
name varchar(255),
primary key (id_products_shopping),
foreign key (id_products) REFERENCES products(id_products),
foreign key (id_shopping) REFERENCES shopping(id_shopping)

);








