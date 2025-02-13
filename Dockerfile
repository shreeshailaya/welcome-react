# Use Node.js as the base image
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Use nginx to serve the build files
FROM nginx:alpine

# Copy the build output to nginx’s html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000
EXPOSE 3002

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
