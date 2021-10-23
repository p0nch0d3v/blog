FROM node:lts as build
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run docs:build
COPY ./src/robots.txt /app/src/.vuepress/dist

FROM nginx:alpine
COPY --from=build /app/src/.vuepress/dist /usr/share/nginx/html
