# Usa una imagen base de Node.js
FROM ubuntu:jammy

RUN apt update -y

RUN apt install nginx -y

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias de Node.js
RUN apt install nodejs npm -y

# Compila la aplicación (asume que tienes un script "build" en package.json)
#RUN npm run build

# Expone el puerto en el que la aplicación escuchará (por ejemplo, un servidor estático)
EXPOSE 80

# Define el comando para iniciar la aplicación
# Especifica el comando predeterminado para ejecutar cuando se inicia el contenedor
CMD ["nginx", "-g", "daemon off;"]

