# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación
COPY package*.json ./
COPY . .

# Instala las dependencias de Node.js
RUN npm install

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD [ "npm", "start" ]
