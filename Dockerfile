# Stage 1: Build the application
FROM node:18-alpine3.18 as build

WORKDIR /var/www/999111

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build 

# Stage 2: Create the final runtime image
FROM node:18-alpine

WORKDIR /var/www/999111

COPY --from=build /var/www/999111 .

EXPOSE 3000

ENV NEXT_HOST=0.0.0.0
ENV NEXT_PORT=3000

CMD [ "npm", "run", "start" ]