# Sua Mesa - PDV Digital para Bares e Restaurantes

Um sistema de ponto de venda (PDV) moderno, multitenant e escalável para bares e restaurantes, com suporte a múltiplos pedidos por comanda, QR Code nas mesas, e dashboards em tempo real.

## 🚀 Stack Tecnológico

- **Backend:** NestJS + Prisma 7 + PostgreSQL
- **Frontend:** Next.js + React
- **Cache & Sessions:** Redis
- **Autenticação:** JWT + MFA
- **Deploy:** OCI (Ubuntu 24.04)
- **Versionamento:** N.E.C (Nova funcionalidade, Evolução, Correção)

## 📋 Pré-requisitos

- Node.js 20+ (LTS)
- Docker e Docker Compose
- Git
- Conta no GitHub

## 🏃 Como Rodar Localmente

### 1. Clone o repositório

````bash
git clone git@github.com:RichAnxiety2/suamesa.git
cd suamesa
````

### 2. Suba os containers (PostgreSQL + Redis)

````bash
docker-compose up -d
````

Verifique se os containers estão rodando:

````bash
docker ps
````

### 3. Configure as variáveis de ambiente

````bash
cp .env.example .env
# Edite o .env se necessário (geralmente não precisa no desenvolvimento)
````

### 4. Backend (NestJS + Prisma 7)

````bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
````

O backend estará disponível em: `http://192.168.101.15:3001`

Swagger (documentação da API): `http://192.168.101.15:3001/api/docs`

### 5. Frontend (Next.js)

````bash
cd frontend
npm install
npm run dev
````

O frontend estará disponível em: `http://192.168.101.15:3000`

## 🏗️ Estrutura do Projeto

````
suamesa/
├── backend/              # NestJS API (Prisma 7)
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── ...
├── frontend/             # Next.js App
│   ├── app/
│   ├── components/
│   ├── package.json
│   └── ...
├── scripts/              # Scripts úteis
├── docs/                 # Documentação
├── docker-compose.yml    # Configuração Docker
├── .env.example          # Exemplo de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Este arquivo
└── CHANGELOG.md          # Histórico de versões
````

## 🔑 Variáveis de Ambiente

Copie `.env.example` para `.env` e configure conforme necessário:

````bash
cp .env.example .env
````

**Principais variáveis:**
- `DATABASE_URL`: Conexão com PostgreSQL
- `REDIS_URL`: Conexão com Redis
- `JWT_SECRET`: Chave secreta para JWT
- `API_URL`: URL da API (http://192.168.101.15:3001)
- `FRONTEND_URL`: URL do frontend (http://192.168.101.15:3000)

## 📊 Regras de Negócio

### Multitenant
- Cada tenant é identificado por um subdomínio (ex: `restaurante.localhost:3000`)
- Dados isolados por `tenant_id`

### Múltiplos Pedidos por Comanda
- Uma comanda pode receber vários pedidos ao longo do tempo
- Cada pedido é um conjunto de itens enviados de uma só vez
- A comanda permanece aberta entre os pedidos

### Perfis de Usuário
- **Superadministrador:** Gerencia todos os tenants
- **Gerente:** Administra o estabelecimento
- **Caixa:** Fecha comandas e recebe pagamentos
- **Garçom:** Atende mesas (via código de acesso)
- **Cozinha:** Prepara pedidos (via código de acesso)

## 🔄 Versionamento (N.E.C)

- **N (Nova funcionalidade):** Novo recurso adicionado (zera E e C)
- **E (Evolução/Melhoria):** Algo existente aprimorado (zera C)
- **C (Correção):** Bugfix pontual

**Exemplos:**
- `1.0.0` → Versão inicial
- `1.1.0` → Nova funcionalidade
- `1.1.1` → Correção
- `1.2.0` → Evolução/Melhoria

## 📚 Documentação

- **Swagger:** http://192.168.101.15:3001/api/docs
- **Changelog:** `CHANGELOG.md`
- **Docs:** `docs/`

## 🐛 Solução de Problemas

### PostgreSQL não conecta
````bash
docker-compose up -d
docker logs suamesa-postgres
````

### Prisma error
````bash
cd backend
npx prisma generate
npx prisma migrate dev
````

### Redis não conecta
````bash
docker-compose restart suamesa-redis
````

## 📞 Contato

- **Repositório:** https://github.com/RichAnxiety2/suamesa.git
- **Desenvolvedor:** RichAnxiety2

---

**Desenvolvido com ❤️ para bares e restaurantes**
