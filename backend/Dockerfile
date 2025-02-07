FROM node:18

# Nastavíme pracovný adresár
WORKDIR /app

# Skopírujeme package.json a package-lock.json
COPY package.json .

# Inštalujeme devDependencies, aby sme mali nodemon
RUN npm install 

# Skopírujeme zvyšok projektu
COPY . .

# Exponujeme port 5000
EXPOSE 5000

# Štartujeme aplikáciu pomocou skriptu devStart
CMD [ "npm", "start" ]

