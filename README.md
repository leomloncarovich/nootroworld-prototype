# NootroWorld - Premium Supplements

A modern Next.js application for discovering and learning about premium supplements with PostgreSQL database and API.

## Features

- 🏠 **Homepage** with featured supplements
- 📋 **Supplements listing** page with all available products
- 📄 **Individual supplement pages** with detailed information
- 🎨 **Modern UI** with Tailwind CSS and shadcn/ui components
- 📱 **Responsive design** for all devices
- ⚡ **Fast performance** with Next.js 14
- 🗄️ **PostgreSQL database** with Prisma ORM
- 🐳 **Docker containerized** database
- 🚀 **API routes** for CRUD operations

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Docker and Docker Compose

### Quick Setup

**Para setup completo do banco de dados, consulte: [`SETUP.md`](./SETUP.md)**

1. Clone o repositório e instale dependências:
\`\`\`bash
git clone <repository-url>
cd nootroworld-prototype
npm install
\`\`\`

2. Configure o banco de dados:
\`\`\`bash
# Criar arquivo .env.local
echo 'DATABASE_URL="postgresql://nootrouser:nootropass@localhost:5432/nootrodb"' > .env.local

# Iniciar PostgreSQL
docker compose up -d

# Configurar banco
npx prisma migrate dev
npx prisma generate
\`\`\`

3. Iniciar o servidor:
\`\`\`bash
npm run dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Database API

- **GET** `/api/supplements` - Lista todos os supplements
- **POST** `/api/supplements` - Cria um novo supplement

Exemplo de uso:
\`\`\`bash
curl http://localhost:3000/api/supplements
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── supplements/   # Supplements CRUD API
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── supplements/       # Supplements pages
├── components/            # Reusable components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
│   ├── prisma.ts         # Prisma client configuration
│   └── generated/        # Generated Prisma client
├── prisma/               # Database schema and migrations
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migrations
├── public/               # Static assets
├── docker-compose.yml    # PostgreSQL container
└── ...config files
\`\`\`

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **PostgreSQL** - Database
- **Prisma** - ORM
- **Docker** - Containerization

## Documentation

- [`SETUP.md`](./SETUP.md) - Guia rápido de setup
- [`DATABASE_SETUP.md`](./DATABASE_SETUP.md) - Documentação completa do banco de dados

## License

This project is private and proprietary.
