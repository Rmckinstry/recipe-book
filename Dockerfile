# Start your image with a node base image
FROM node:22-alpine

WORKDIR /app

# installing here since docker builds layers top down
# if combined with the npm run build, it would reinstall server every code change
RUN npm install -g serve@latest

COPY package*.json ./

# Install project dependencies using npm ci (ensures a clean, reproducible install)
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

#builds  to /app/dist
RUN npm run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "dist" ]