# redis-practice

## Install and run redis container
- docker run -p 6379:6379 -it redis/redis-stack-server:latest

## Install node dependencies
- npm install

## Run server
- nodemon server.js

## API endpoints
- GET --> /:key
- POST --> /

## Shape of POST data
{
  "key": "anyKey",
  "value": "anyValue"
}
