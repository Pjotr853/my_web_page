DOCKER COMPOSE zapnes vsetko naraz
docker-compose up -d

vypnes pomocou 
docker-compose down

PRE FAJNSMEJKROV 
postup nizsie

MONGODB
z> mongoose.connect("mongodb://localhost/testdb", {
na>  mongoose.connect("mongodb://host.docker.internal:27017/testdb", {

docker run --name mongodb --rm -d -p 27017:27017  mongo

BACKEND
PS C:\Users\kizek\Desktop\docker_my_web_page\my_web_page\backend> 

docker build -t goals-node .
docker run --name goals-backend --rm -p 5000:5000 goals-node

FRONTEND
PS C:\Users\kizek\Desktop\docker_my_web_page\my_web_page>

docker build -t goals-react .
docker run -p 3000:3000 -d --rm -it --name goals-frontend goals-react

