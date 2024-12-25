# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.20.4
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package-lock.json package.json ./
RUN npm ci

# Copy application code (including TypeScript files)
COPY . .

# Run build step (e.g., TypeScript compilation)
RUN npm run build

# Final stage for app image
FROM base

# Copy only the compiled code from the build stage
# This assumes compiled JavaScript files are in /app/backend/build/backend/
COPY --from=build /app/backend/build /app/backend/build

# Expose port 3000
EXPOSE 3000

# Run the app from the compiled index.js file
CMD ["node", "backend/build/backend/index.js"]
