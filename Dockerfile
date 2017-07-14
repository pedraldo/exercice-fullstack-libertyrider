FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get install git -y

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN git rev-parse HEAD > views/commit.ejs

EXPOSE 3000
CMD [ "npm", "start" ]