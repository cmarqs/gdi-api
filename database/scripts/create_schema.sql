-- companies: table
CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(25) NOT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `name` varchar(500) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Company`s (customer) table';

-- user_companies: table
CREATE TABLE `user_companies` (
  `user_id` int(11) NOT NULL COMMENT 'Id user`s table',
  `company_id` varchar(100) NOT NULL COMMENT 'Id company`s table',
  `dtUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`,`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- profiles: table
CREATE TABLE `profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- users: table
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `secret` varchar(500) NOT NULL,
  `observations` varchar(500) DEFAULT NULL,
  `role` varchar(20) NOT NULL,
  `profile_id` int(11) DEFAULT '0',
  `user_company_id` int(11) DEFAULT '0',
  `isActive` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

