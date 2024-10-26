# bas image
FROM node:current-alpine3.20

WORKDIR /home/app/
COPY package*.json .
RUN npm install

# copying the source code to image
COPY index.js /home/app/index.js

EXPOSE 8000

CMD ["npm","start"]