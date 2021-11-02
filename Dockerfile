FROM node:lts as build
ARG SITE_URL=''
ENV SITE_URL=${SITE_URL}
WORKDIR /app
COPY . /app
RUN npm install && npm run clear && npm run build
COPY ./src/robots.txt /app/build/

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
