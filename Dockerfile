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
FROM nginx:alpine

# Copy the built React app from the previous stage to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html




# Start Nginx server when the container launches
CMD ["nginx", "-g", "daemon off;"]
