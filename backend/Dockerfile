# Use a lightweight Node.js image for the build stage
FROM node:18-alpine as builder

# Set environment to build mode
ENV NODE_ENV build

# Set working directory
WORKDIR /home/node

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application and remove dev dependencies
RUN npm run build && npm prune --production

# Use a new lightweight image for the final app
FROM node:16-alpine

# Set environment to production mode
ENV NODE_ENV production

# Set working directory
WORKDIR /home/node

# Copy production files from builder
COPY --from=builder /home/node/package*.json ./
COPY --from=builder /home/node/node_modules/ ./node_modules/
COPY --from=builder /home/node/build/ ./build/

# Set non-root user
USER node

# Expose the port your app uses
EXPOSE 3000

# Run the application
CMD ["node", "build/index.js"]
