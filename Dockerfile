# Using a compact OS
FROM daocloud.io/node:8.4.0-onbuild

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

EXPOSE 3000

ENTRYPOINT ["node", "bin/www"]