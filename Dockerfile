# Build stage
FROM node:18-alpine as build

ARG COMMIT_SHA

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .
# COPY public ./public

# Build the application
RUN npm run build

# Development stage
FROM node:18-alpine as development

WORKDIR /app

# Copy built files from build stage
COPY --from=build /app/build ./build

# Install serve to serve the built application
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]