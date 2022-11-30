FROM node:lts-alpine
WORKDIR /app/frontend
COPY ./frontend/package.json /app/frontend
RUN npm install
EXPOSE 8081
CMD [ "npm", "run", "serve" ]
