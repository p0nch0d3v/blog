FROM node:lts as build
RUN mkdir /app
WORKDIR /app
COPY . /app
COPY ./src/.vuepress/components/Posts.vue /app/src/.vuepress/public/components
COPY ./src/.vuepress/components/Tags.vue /app/src/.vuepress/public/components
RUN npm install
RUN npm run docs:build
COPY ./src/robots.txt /app/src/.vuepress/dist

FROM nginx:alpine
COPY --from=build /app/src/.vuepress/dist /usr/share/nginx/html
