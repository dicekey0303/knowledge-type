# Use the official Node.js 20 image as the base
FROM node:20.11.0

# Set the working directory in the container
WORKDIR /app

RUN apt-get update && apt-get install -y \
  locales \
  && rm -rf /var/lib/apt/lists/* \
  && sed -i -e 's/# ja_JP.UTF-8 UTF-8/ja_JP.UTF-8 UTF-8/' /etc/locale.gen \
  && locale-gen \
  && update-locale LANG=ja_JP.UTF-8

ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
# RUN npm run build

# Expose the port on which the frontend server will listen
EXPOSE 3000

# Run the frontend server
# CMD ["npm", "start"]
