# 🚀create an image in docker🚀

### 1 ) command used to create image:

```javascript
docker build -t imageName .
```

Note: -t is an tag which is used to give an image its name . is an destination folder you can change according to your directory structure

### 2 ) Run image to create container

```
docker run imageName
```

### 3 ) docker file basic code

```javascript
FROM node:latest
COPY . .
RUN npm i
EXPOSE 8000
CMD ["node","server.js"]
```

Note: node is an parent image or base image for our project
