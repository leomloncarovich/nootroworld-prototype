# Configuração do Banco de Dados PostgreSQL com Prisma

Este projeto está configurado para usar PostgreSQL com Docker e Prisma ORM.

## 🚀 Setup Completo (Para quem clonou o repositório)

Execute os comandos na sequência para ter tudo funcionando:

### 1. Instalar dependências
```bash
npm install
# ou
pnpm install
```

### 2. Configurar variáveis de ambiente
```bash
# Criar arquivo .env.local na raiz do projeto
echo 'DATABASE_URL="postgresql://nootrouser:nootropass@localhost:5432/nootrodb"' > .env.local
```

### 3. Iniciar o PostgreSQL com Docker
```bash
# Iniciar container PostgreSQL
docker compose up -d

# Verificar se está rodando (opcional)
docker compose ps
```

### 4. Configurar banco de dados
```bash
# Executar migrações para criar as tabelas
npx prisma migrate dev

# Gerar o Prisma Client
npx prisma generate
```

### 5. Iniciar o servidor de desenvolvimento
```bash
npm run dev
# ou
pnpm dev
```

### 6. Testar se está funcionando
```bash
# Em outro terminal, testar a API
curl http://localhost:3000/api/supplements

# Deve retornar: []
```

**🎉 Pronto! O projeto está configurado e funcionando.**

---

## 📋 Pré-requisitos

- Docker e Docker Compose instalados
- Node.js e npm/pnpm instalados

## 🚀 Configuração Inicial

### 1. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
DATABASE_URL="postgresql://nootrouser:nootropass@localhost:5432/nootrodb"
```

### 2. Iniciar o PostgreSQL

```bash
# Iniciar o container PostgreSQL em background
docker compose up -d

# Verificar se está rodando
docker compose ps
```

### 3. Executar Migrações

```bash
# Criar e aplicar migrações
npx prisma migrate dev --name init

# Gerar o Prisma Client
npx prisma generate
```

## 🗄️ Estrutura do Banco

### Modelo Supplement

```prisma
model Supplement {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("supplements")
}
```

## 🔧 Comandos Úteis

### Docker
```bash
# Iniciar PostgreSQL
docker compose up -d

# Parar PostgreSQL
docker compose down

# Parar e remover volumes (limpar dados)
docker compose down -v

# Ver logs do PostgreSQL
docker compose logs postgres
```

### Prisma
```bash
# Gerar Prisma Client
npx prisma generate

# Criar nova migração
npx prisma migrate dev --name nome_da_migracao

# Aplicar migrações em produção
npx prisma migrate deploy

# Abrir Prisma Studio (interface visual)
npx prisma studio

# Reset do banco (cuidado!)
npx prisma migrate reset
```

## 📡 API Routes

### GET /api/supplements
Retorna todos os supplements

### POST /api/supplements
Cria um novo supplement

**Body:**
```json
{
  "name": "Vitamina D3",
  "description": "Suplemento de vitamina D3",
  "price": 29.99
}
```

## 🔗 Uso no Código

```typescript
import { prisma } from '@/lib/prisma'

// Buscar todos os supplements
const supplements = await prisma.supplement.findMany()

// Criar um supplement
const supplement = await prisma.supplement.create({
  data: {
    name: "Vitamina C",
    description: "Suplemento de vitamina C",
    price: 19.99
  }
})

// Buscar por ID
const supplement = await prisma.supplement.findUnique({
  where: { id: 1 }
})

// Atualizar
const updated = await prisma.supplement.update({
  where: { id: 1 },
  data: { price: 25.99 }
})

// Deletar
await prisma.supplement.delete({
  where: { id: 1 }
})
```

## 🔍 Credenciais do Banco

- **Usuário:** nootrouser
- **Senha:** nootropass
- **Banco:** nootrodb
- **Porta:** 5432
- **Host:** localhost

## 📝 Notas Importantes

1. O arquivo `.env.local` não deve ser commitado no Git
2. Use `.env.example` como template para outros desenvolvedores
3. Em produção, use variáveis de ambiente seguras
4. O Prisma Client é gerado em `lib/generated/prisma/`
5. As migrações ficam em `prisma/migrations/` 