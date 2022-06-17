#!/bin/sh
filename="db_structure.sql"
backupfolder="/var/www/"
fpath="$backupfolder/$filename"
usr="DBUSER"
pass="DBPASS"
db="DBNAME"
mysqldump --user=$usr --password=$pass --no-data $db | sed 's/ AUTO_INCREMENT=[0-9]*//g' > "$fpath"