# CHANGELOG - Sua Mesa

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [0.0.1] - 2026-08-04

### Nova Funcionalidade (N)

- **Backend NestJS**: Estrutura base do backend com NestJS 10.4.5
- **Prisma 7**: Configuração do ORM com PostgreSQL e Driver Adapter
- **Multitenant**: Middleware para extração de tenant via subdomínio
- **Autenticação**: Estrutura preparada para JWT e autenticação
- **Documentação API**: Swagger configurado em `/api/docs`
- **Validação**: Class-validator e class-transformer globalmente configurados
- **CORS**: Configuração de CORS com origens permitidas via variáveis de ambiente
- **Variáveis de Ambiente**: `.env.example` com todas as configurações necessárias

### Evolução (E)

- Configuração de scripts npm para build, start, test e Prisma
- Estrutura de pastas seguindo padrões NestJS
- Pipeline de build com cópia automática de assets Prisma

### Correção (C)

- N/A (Primeira versão)

### Removido

- N/A

### Segurança

- Variáveis sensíveis em `.env` (não versionadas)
- CORS restrito a origens permitidas
- Validação global de payloads com whitelist

---

## Notas de Desenvolvimento

### Stack Utilizado

- **Runtime**: Node.js 20+ (LTS)
- **Framework**: NestJS 10.4.5
- **ORM**: Prisma 7.9.1 com PostgreSQL
- **Validação**: class-validator 0.14.1 + class-transformer 0.5.1
- **Documentação**: Swagger/OpenAPI
- **Autenticação**: JWT (preparado)
- **Banco de Dados**: PostgreSQL com schema `public`

### Ambiente

- **Desenvolvimento**: http://192.168.101.15:3001
- **Swagger**: http://192.168.101.15:3001/api/docs
- **Prefixo API**: `/api`

### Próximas Etapas

- [ ] Etapa 2: Modelos de Dados (Prisma Schema)
- [ ] Etapa 3: Autenticação e Autorização
- [ ] Etapa 4: Módulos de Negócio (Tenants, Comandas, Pedidos, etc.)
- [ ] Etapa 5: Frontend Next.js
- [ ] Etapa 6: Integração e Testes
- [ ] Etapa 7: Deploy e CI/CD

---

**Versionamento**: N.E.C (Nova funcionalidade, Evolução, Correção)
