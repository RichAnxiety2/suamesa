# Changelog - Sua Mesa

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [0.0.1] - 2026-08-04

### ✨ Adicionado (Etapa 2: Schema do Banco de Dados)

#### Schema Prisma 7 Completo
- Criadas 10 tabelas principais: `tenants`, `staff`, `tenant_colors`, `categories`, `menu_items`, `tables`, `orders`, `order_items`, `audit_logs`, `waiter_interaction_log`
- Definidos 7 enums: `TableStatus`, `OrderStatus`, `ItemStatus`, `StaffProfile`, `InteractionType`, `TenantStatus`, `TenantPlan`
- Configurados relacionamentos multitenant com isolamento de dados via `tenant_id`
- Implementado soft delete em `tenants` com campos `deleted_at` e `deleted_by`

#### Dados Iniciais (Seed)
- Superadministrador: `admin@suamesa.app.br` / `Admin@2026`
- Tenant de exemplo: "Restaurante do Zé" (subdomínio: `restaurante-do-ze`)
- Gerente do tenant: `gerente@restaurantedoze.com` / `Manager@2026`
- Paleta de cores padrão: "Olive Garden Feast"
- 4 categorias de cardápio: Entradas, Pratos Principais, Bebidas, Sobremesas
- 9 itens de cardápio com preços e tempos de preparo
- 3 mesas com capacidades variadas (2, 4 e 6 pessoas)

#### Configurações Técnicas
- Prisma 7 com adapter PostgreSQL (`@prisma/adapter-pg`)
- Script de seed com `tsx` para suporte a TypeScript
- Índices otimizados para consultas multitenant
- Campos UUID como chaves primárias
- Suporte a JSONB para dados flexíveis (opções de menu, configurações)

### 🔧 Modificado
- Atualizado `prisma/schema.prisma` com schema completo
- Criado `prisma/seed.ts` com dados iniciais
- Configurado `package.json` com script `prisma:seed`
- Atualizado `prisma.config.ts` para usar adapter PG

### 📋 Notas
- Migration `init` criada e executada com sucesso
- Seed executado sem erros
- Todos os dados verificados no banco PostgreSQL
- Pronto para desenvolvimento da Etapa 3 (APIs)

---

## Versionamento

Seguindo o padrão **N.E.C** (Nova funcionalidade, Evolução, Correção):
- **N** = Nova funcionalidade
- **E** = Evolução de funcionalidade existente
- **C** = Correção de bug
