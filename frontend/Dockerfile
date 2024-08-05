
FROM node:latest AS build

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

COPY . .

ARG REACT_APP_API_KEY
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

RUN npm run build

FROM nginx:latest

COPY --from=build /app/frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
