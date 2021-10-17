FROM python:3 as build
ARG SITE_URL=http://localhost/
WORKDIR /app
COPY . /app

RUN pip install --requirement requirements.txt
ENV SITE_URL=${SITE_URL}
RUN mkdocs build
COPY ./robots.txt /app/site/

FROM nginx:alpine
COPY --from=build /app/site /usr/share/nginx/html
