# Use a specific version of Node that is compatible with Angular CLI 12
FROM node:12.22.12

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install project dependencies
# Installs Angular CLI 12.2.18 globally within the container.
RUN npm install -g @angular/cli@12.2.18
# Installs project dependencies as specified in package.json.
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port Angular runs on (default is 4200)
EXPOSE 4200

# Run the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0"]