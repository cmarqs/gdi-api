SETUP DATABASE
================

- It uses the docker-compose file version 3.8, one of the latest ones.
- Consequently, we definedb as a service, each service will be equivalent to a new docker run command
- Subsequently, we point docker-compose to use the official MySQL 8.0 image for this DB service.
- The cap_add set to SYS_NICE suppresses some not useful error messages.
- Next up we ask docker-compose to always restart this container if it fails.
- After that we add 2 environment variables for the MySQL database and the root user’s password. As per need, we can add another user to - give it less privilege with other env vars.
- Then, we map the host port 3306 to the container port 3306 as the MySQL server is running on container port 3306. Depending on the - preference the host port may be changed.
- Then we add 2 volumes, first one is the DB volume mapped to the below volumes db. Which basically tells docker and docker-compose to - manage the volume for us. Next, we add an init.sql script which will initialize our quotes database with the given SQL file.

Run MySQL on Docker
-------------------
Start the container using the docker composer:

`docker-compose -f mysql-docker-compose.yml up`


Restore MySQL data on Docker Database
-------------------

1 - To enter on the container:

`docker exec -it [docker-id] bash`

2 - To login into the database:

`mysql -u root -p`

3 - To check if the database was created:

`mysql> show databases;`

4 - To restore a database:

`docker exec -i [docker-id] sh -c 'exec mysql -u[user] -p[password] [database-name]' < [/some/path/on/host/file.sql]`

5 - To check if the tables was created by restoring, repeat steps 1 and 2 then:

- Change to your database:

    `mysql> use [database-name];`

- Show tables of the database:

    `mysql> show tables;`
    

 
 Run the files on ./scripts/ folder
 -------------------------------------

1. @create_schema.sql
2. @create_user.sql
3. @seed_data.sql
