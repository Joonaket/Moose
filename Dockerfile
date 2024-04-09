# Use an official Node runtime as the base image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as a lightweight HTTP server
FROM nginx:1.25.4

# Copy the built React app from the previous stage to the Nginx directory

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html

CMD ["npm", "start"]


