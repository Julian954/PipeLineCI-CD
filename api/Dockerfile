# Usa una imagen base de Node.js
FROM node:16

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias de Node.js
RUN npm install

# Compila la aplicación (asume que tienes un script "build" en package.json)
RUN npm run build

# Expone el puerto en el que la aplicación escuchará (por ejemplo, un servidor estático)
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD [ "npm", "start" ]
