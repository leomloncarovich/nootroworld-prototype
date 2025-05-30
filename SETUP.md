# Setup Rápido 🚀

Comandos para rodar após clonar o repositório:

```bash
# 1. Instalar dependências
npm install

# 2. Configurar .env.local
echo 'DATABASE_URL="postgresql://nootrouser:nootropass@localhost:5432/nootrodb"' > .env.local

# 3. Iniciar PostgreSQL
docker compose up -d

# 4. Configurar banco
npx prisma migrate dev
npx prisma generate

# 5. Iniciar servidor
npm run dev
```

## Testar
```bash
curl http://localhost:3000/api/supplements
# Deve retornar: []
```

## Criar um supplement
```bash
curl -X POST http://localhost:3000/api/supplements \
  -H "Content-Type: application/json" \
  -d '{"name": "Vitamina D3", "description": "Suplemento", "price": 29.99}'
```

**✅ Pronto!** 

Para mais detalhes, consulte `DATABASE_SETUP.md` 