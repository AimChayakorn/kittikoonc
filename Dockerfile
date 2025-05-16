FROM node:24-slim

WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PATH="/app/node_modules/.bin:$PATH"
EXPOSE 3000

CMD ["next", "start"]