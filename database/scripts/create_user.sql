DROP DATABASE IF EXISTS UNITY_GDL;
CREATE DATABASE UNITY_GDL;
/**
 * Feel free to change the username as well as the password given to it
 */
CREATE USER 'gdl_api_user'@'%' IDENTIFIED BY '100grilo';

/* In an ideal world, we should strictly provide the grants the API has access
 * to a specific table rather than all the privileges.
 */
GRANT ALL PRIVILEGES ON UNITY_GDL.users TO 'gdl_api_user'@'%';
GRANT ALL PRIVILEGES ON UNITY_GDL.companies TO 'gdl_api_user'@'%';

flush privileges;