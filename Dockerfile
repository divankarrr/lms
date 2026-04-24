# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for caching)
COPY LMS-main/backend/package*.json ./backend/
COPY LMS-main/Frontend/package*.json ./Frontend/

# Install dependencies
WORKDIR /app/backend
RUN npm install

WORKDIR /app/Frontend
RUN npm install

# Now copy full project
WORKDIR /app
COPY LMS-main/backend ./backend
COPY LMS-main/Frontend ./Frontend

# Build frontend
WORKDIR /app/Frontend
RUN npm run build

# Move frontend build to backend (IMPORTANT)
RUN cp -r dist ../backend/public

# Run backend
WORKDIR /app/backend

EXPOSE 5000

CMD ["npm", "start"]