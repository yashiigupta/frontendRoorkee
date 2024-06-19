FROM node:22-alpine3.19
WORKDIR /app

ARG ENV=staging
COPY .env.${ENV} .env

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]