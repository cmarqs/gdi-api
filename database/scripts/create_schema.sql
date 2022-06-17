CREATE DATABASE UNITY_GDL;
USE UNITY_GDL;

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` varchar(45) not null,
    `email` varchar(100) not null unique,
    `secret` varchar(500) not null,
    `observations` varchar(500),
    `profile_id` int not null default 0,
    `user_customer_id` int not null default 0, 
    `isActive` bit not null default 0,
    PRIMARY KEY (`id`)
);