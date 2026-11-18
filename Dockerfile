# Lightweight official Node.js base image
FROM node:24-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files first (better layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Run as non-root user for security
USER node

EXPOSE 3000

CMD ["node", "server.js"]