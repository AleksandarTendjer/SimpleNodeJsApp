 FROM node:latest

 RUN mkdir -p /app
 WORKDIR /app
 #/usr/src/app
 COPY package*.json ./
 RUN npm install

 COPY . .
# Declare port 
ENV PORT=8080

# Expose port mapped by the docker daemon
EXPOSE 8080 

 ENTRYPOINT ["node"]

 CMD ["src/server.js"]