
FROM node:latest

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

ARG API_KEY
ENV API_KEY=$API_KEY

EXPOSE 3000

CMD ["npm", "start"]
