FROM node:24-slim AS builder

WORKDIR /app

# 3. Copy dependencies and install
COPY package.json package-lock.json ./
RUN npm ci

# 4. Copy the rest of the code and build
COPY . .
RUN npm run build

FROM node:24-slim AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules

ENV NODE_ENV=production
ENV PATH="/app/node_modules/.bin:$PATH"
EXPOSE 3000

CMD ["next", "start"]