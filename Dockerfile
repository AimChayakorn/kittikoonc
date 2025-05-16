FROM node:23-alpine AS builder

WORKDIR /app

# 3. Copy dependencies and install
COPY package.json package-lock.json ./
RUN npm ci

# 4. Copy the rest of the code and build
COPY . .
RUN npm run build

FROM node:23-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "run", "start"]