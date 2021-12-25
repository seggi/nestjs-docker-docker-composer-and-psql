#!/bin/sh
set -e 

SERVER="commingle";
PW="Password@123";
DB="commingle";

echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
    (docker rm $SERVER || :) && \
    docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
    -e PGPASSWORD=$PW \
    -p 5432:5432 \
    -d postgres

# Wait for postgress to start
echo "sleep wait for pg-server [$SERVER] to start";
SLEEP 3;

# Create the db 

echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres