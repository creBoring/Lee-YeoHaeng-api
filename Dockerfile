FROM node:14

WORKDIR /app
COPY . /app

# install production libraries
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
