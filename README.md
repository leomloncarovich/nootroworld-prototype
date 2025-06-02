# NootroWorld Prototype - Setup Completo
Uma aplicação moderna Next.js para descobrir e aprender sobre suplementos premium, com banco PostgreSQL e API completa.

## 🚀 Características
- 🏠 Homepage com suplementos em destaque
- 📋 Página de listagem com todos os produtos disponíveis
- 📄 Páginas individuais de suplementos com informações detalhadas
- 🎨 UI moderna com Tailwind CSS e componentes shadcn/ui
- 📱 Design responsivo para todos os dispositivos
- ⚡ Performance rápida com Next.js 14
- 🗄️ Banco PostgreSQL com Prisma ORM
- 🐳 Ambiente completamente dockerizado
- 🚀 API routes para operações CRUD

## 📋 Pré-requisitos
- Docker e Docker Compose (versão mais recente)
- Node.js 18.0.0 ou superior (se executar localmente)
- npm 8.0.0 ou superior (se executar localmente)

## 🐳 Setup com Docker (Recomendado)

### 1. Clone o repositório
```bash
git clone https://github.com/leomloncarovich/nootroworld-prototype.git
cd nootroworld-prototype
```

### 2. Configure as variáveis de ambiente
O projeto já vem com um arquivo `.env.local` configurado. Se necessário, você pode editá-lo:

```env
# Database
DATABASE_URL="postgresql://nootrouser:nootropass@postgres:5432/nootrodb"
POSTGRES_USER=nootrouser
POSTGRES_PASSWORD=nootropass
POSTGRES_DB=nootrodb

# Next.js
NEXTAUTH_SECRET=sua-chave-secreta-aqui
NEXTAUTH_URL=http://localhost:3000

# API
API_BASE_URL=http://localhost:3000/api
```

### 3. Inicie toda a aplicação com Docker
**⚠️ Importante**: Use `docker compose` (não `docker-compose`):

```bash
# Construir e iniciar todos os serviços
docker compose up --build -d

# Verificar status dos containers
docker compose ps

# Ver logs
docker compose logs -f
```

### 4. Configurar o banco de dados
```bash
# Executar migrações
docker compose exec app npx prisma migrate dev

# Gerar o cliente Prisma
docker compose exec app npx prisma generate

# (Opcional) Popular o banco com dados de exemplo
docker compose exec app npx prisma db seed
```

### 5. Acessar a aplicação
- **Aplicação**: http://localhost:3000
- **API**: http://localhost:3000/api/supplements
- **Banco de dados**: localhost:5432

## 🛠️ Setup Manual (Desenvolvimento Local)

### 1. Clone e instale dependências
```bash
git clone https://github.com/leomloncarovich/nootroworld-prototype.git
cd nootroworld-prototype
npm install
```

### 2. Configure apenas o banco com Docker
```bash
# Iniciar apenas o PostgreSQL
docker compose up postgres -d
```

### 3. Configure o banco de dados
```bash
# Execute as migrações
npx prisma migrate dev
npx prisma generate

# (Opcional) Popular com dados de exemplo
npx prisma db seed
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

📚 Comandos Úteis
Docker
bash
# Parar todos os serviços
docker-compose down

# Parar e remover volumes (CUIDADO: apaga dados do banco)
docker-compose down -v

# Rebuildar containers
docker-compose up --build

# Ver logs de um serviço específico
docker-compose logs -f app
docker-compose logs -f postgres

# Executar comandos dentro do container
docker-compose exec app bash
docker-compose exec postgres psql -U nootrouser -d nootrodb
Development
bash
npm run dev          # Iniciar servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Iniciar servidor de produção
npm run lint         # Executar ESLint
npm run type-check   # Verificação de tipos TypeScript
Prisma
bash
# Ver dados no Prisma Studio
npx prisma studio

# Reset do banco de dados
npx prisma migrate reset

# Aplicar mudanças no schema
npx prisma db push

# Gerar cliente após mudanças
npx prisma generate
🗂️ Estrutura do Projeto
nootroworld-prototype/
├── app/                    # Diretório do Next.js App Router
│   ├── api/               # Rotas da API
│   │   └── supplements/   # CRUD API para suplementos
│   ├── supplements/       # Páginas de suplementos
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx          # Homepage
│   └── globals.css       # Estilos globais
├── components/            # Componentes reutilizáveis
│   └── ui/               # Componentes shadcn/ui
├── lib/                  # Funções utilitárias
│   ├── prisma.ts         # Configuração do cliente Prisma
│   └── utils.ts          # Utilitários gerais
├── prisma/               # Configuração do banco
│   ├── schema.prisma     # Schema do banco
│   ├── migrations/       # Migrações
│   └── seed.ts          # Script de dados de exemplo
├── public/               # Assets estáticos
├── docker-compose.yml    # Configuração Docker
├── Dockerfile           # Imagem da aplicação
├── .env.example         # Exemplo de variáveis de ambiente
└── ...arquivos de config
🔌 API Endpoints
Suplementos
GET /api/supplements - Listar todos os suplementos
POST /api/supplements - Criar novo suplemento
GET /api/supplements/[id] - Obter suplemento específico
PUT /api/supplements/[id] - Atualizar suplemento
DELETE /api/supplements/[id] - Remover suplemento
Exemplo de uso
bash
# Listar suplementos
curl http://localhost:3000/api/supplements

# Criar novo suplemento
curl -X POST http://localhost:3000/api/supplements \
  -H "Content-Type: application/json" \
  -d '{"name":"Novo Suplemento","description":"Descrição..."}'
🧪 Testes
bash
# Executar testes
npm test

# Executar testes com coverage
npm run test:coverage

# Executar testes em modo watch
npm run test:watch
🚀 Deploy
Produção com Docker
bash
# Build para produção
docker-compose -f docker-compose.prod.yml up --build -d
Deploy em plataformas
Vercel: Conecte seu repositório GitHub
Railway: Use o arquivo railway.toml
Docker Registry: docker-compose push
🔧 Troubleshooting
Problemas Comuns
Erro de conexão com banco
bash
# Verificar se o PostgreSQL está rodando
docker-compose ps postgres

# Verificar logs do banco
docker-compose logs postgres
Erro de migração Prisma
bash
# Reset e recriar migrações
npx prisma migrate reset
npx prisma migrate dev
Porta já em uso
bash
# Verificar processos usando a porta
lsof -i :3000
lsof -i :5432

# Parar containers se necessário
docker-compose down
Problemas de permissão Docker
bash
# Linux: adicionar usuário ao grupo docker
sudo usermod -aG docker $USER
# Reiniciar sessão após comando acima
🛡️ Segurança
✅ Use variáveis de ambiente para credenciais sensíveis
✅ Configure CORS adequadamente para produção
✅ Use HTTPS em produção
✅ Mantenha dependências atualizadas
✅ Configure rate limiting na API
🔄 Atualizações
bash
# Atualizar dependências
npm update

# Verificar dependências desatualizadas
npm outdated

# Atualizar containers Docker
docker-compose pull
docker-compose up -d
📝 Contribuição
Faça fork do projeto
Crie uma branch para sua feature (git checkout -b feature/nova-feature)
Commit suas mudanças (git commit -am 'Adiciona nova feature')
Push para a branch (git push origin feature/nova-feature)
Abra um Pull Request
📄 Licença
Este projeto é privado e proprietário.

🆘 Suporte
Para problemas ou dúvidas:

Verifique a seção de Troubleshooting acima
Abra uma issue no GitHub
Consulte a documentação do Next.js e Prisma
Última atualização: Junho 2025

