# ==========================================
# Stage 1: Build the React Application
# ==========================================
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your portfolio code
COPY . .

# Build the React app for production
# NOTE: This usually creates a /dist folder (Vite) or /build folder (Create React App)
RUN npm run build


# ==========================================
# Stage 2: Serve the Application
# ==========================================
FROM node:20-alpine

WORKDIR /app

# Install 'serve', a lightweight static file server
RUN npm install -g serve

# Copy ONLY the optimized production files from the builder stage
# IMPORTANT: If you are using Create React App instead of Vite, change "dist" to "build" here!
COPY --from=builder /app/dist ./dist

# Expose your requested port
EXPOSE 5174

# Start the server explicitly on port 5174
CMD ["serve", "-s", "dist", "-l", "5174"]