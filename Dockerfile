FROM python:3 as build
WORKDIR /app
COPY . /app

RUN pip install --requirement requirements.txt
RUN mkdocs build

FROM nginx:alpine
COPY --from=build /app/site /usr/share/nginx/html
