FROM node:12.7-buster
WORKDIR /var/www
RUN npm install @vue/cli@3.10.0 -g

