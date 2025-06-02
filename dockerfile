# Multi-stage Dockerfile para NootroWorld

# Estágio base com Node.js
FROM node:18-alpine AS base
WORKDIR /app

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat openssl

# Estágio de dependências
FROM base AS deps
# Copiar arquivos de dependências
COPY package.json package-lock.json ./
COPY prisma ./prisma/

# Instalar dependências
RUN npm ci --only=production && npm cache clean --force

# Estágio de desenvolvimento
FROM base AS development
# Copiar node_modules do estágio deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Instalar todas as dependências (incluindo dev)
RUN npm ci

# Gerar cliente Prisma
RUN npx prisma generate

# Expor porta
EXPOSE 3000

# Comando para desenvolvimento
CMD ["npm", "run", "dev"]

# Estágio de build
FROM base AS builder
# Copiar node_modules e código fonte
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Gerar cliente Prisma
RUN npx prisma generate

# Build da aplicação
RUN npm run build

# Estágio de produção
FROM base AS production
ENV NODE_ENV=production

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

# Copiar build da aplicação
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copiar node_modules de produção
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# Gerar cliente Prisma
RUN npx prisma generate

# Mudar para usuário não-root
USER nextjs

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Comando para produção
CMD ["node", "server.js"]

