
# Use official Node.js image
FROM node:latest

# Set working directory inside container
WORKDIR /myapp

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy all project files
COPY . ./

# Start the server
CMD ["npm", "run", "backend"]

# Expose backend port
EXPOSE 6200