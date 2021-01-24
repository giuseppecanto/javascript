FROM node:12-slim

# Create and change to the app directory.
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Copy local code to the container image.
COPY . ./

# Install serve
RUN npm install -g serve

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Expose the port
EXPOSE 8080

# Run the web service on container startup.
CMD ["serve", "-s", "-l", "8080", "./build"]