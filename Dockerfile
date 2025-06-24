# Stage 1: Build
FROM node:22-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci && npm cache clean --force

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

ENV GMAIL_USER=test@gmail.com
ENV GMAIL_APP_PASSWORD=dummy
ENV FIREBASE_API_KEY=dummy
ENV FIREBASE_AUTH_DOMAIN=dummy
ENV FIREBASE_PROJECT_ID=dummy
ENV FIREBASE_STORAGE_BUCKET=dummy
ENV FIREBASE_MESSAGING_SENDER_ID=dummy
ENV FIREBASE_APP_ID=dummy
ENV FIREBASE_MEASUREMENT_ID=dummy

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the built application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Add debugging and use node directly instead of npm
CMD ["node", "--max-old-space-size=4096", "node_modules/.bin/next", "start"]
