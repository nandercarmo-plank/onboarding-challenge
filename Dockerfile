FROM node:17-alpine
WORKDIR /api
COPY . .
RUN npm install
EXPOSE 3333
CMD ["npm", "run", "server:dev"]