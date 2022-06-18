CREATE DATABASE UNITY_GDL;
USE UNITY_GDL;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `secret` varchar(500) NOT NULL,
  `observations` varchar(500) DEFAULT NULL,
  `role` varchar(20) NOT NULL,
  `profile_id` int(11) NOT NULL DEFAULT '0',
  `user_customer_id` int(11) NOT NULL DEFAULT '0',
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email` (`email`)
)