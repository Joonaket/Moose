# Use a base image that includes Node.js
FROM node:14.18.1-alpine

# Create a non-root user
RUN addgroup -g 1001 -S nodejs \
    && adduser -S nodejs -u 1001

# Set up a working directory in the container for your application
WORKDIR /app

# Copy the application code into the container
COPY . /app

# Set the ownership of the app directory to the non-root user
RUN chown -R nodejs:nodejs /app

# Switch to the non-root user
USER nodejs

# Install dependencies for production
RUN npm ci --only=production

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Healthcheck to monitor the application's health
HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:3000 || exit 1

# Set the command to run your application
CMD ["npm", "start"]
