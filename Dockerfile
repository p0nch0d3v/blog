FROM node:lts as build
ARG SITE_URL=''
ARG USERNAME=''

ENV SITE_URL=${SITE_URL}
ENV USERNAME=${USERNAME}

WORKDIR /app

RUN echo "SITE_URL=${SITE_URL}" >> /app/.env
RUN echo "USERNAME=${USERNAME}" >> /app/.env

COPY . /app
RUN npm install && npm run clear && npm run build
COPY ./src/robots.txt /app/build/

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
