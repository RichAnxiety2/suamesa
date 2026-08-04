# Changelog - Sua Mesa

Todos os cambios notáveis neste projeto serão documentados neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao versionamento N.E.C (Nova funcionalidade, Evolução, Correção).

## [1.0.0] - 2026-08-04

### 🎉 Primeira versão do MVP

#### ✨ Novas Funcionalidades (N)
- Configuração inicial do ambiente de desenvolvimento
- Docker Compose com PostgreSQL 15 e Redis 7
- Estrutura de pastas do projeto (backend, frontend, scripts, docs)
- Configuração Git com SSH (chave ED25519)
- Arquivo `.env.example` com todas as variáveis necessárias
- Arquivo `.gitignore` com exclusões apropriadas
- Arquivo `README.md` com instruções completas
- Prisma 7 como ORM padrão
- Suporte a multitenant via hosts locais (restaurante.localhost)
- Regra de negócio: múltiplos pedidos por comanda implementada no design

#### 🔧 Evoluções (E)
- Nenhuma

#### 🐛 Correções (C)
- Nenhuma

---

## Notas de Versionamento

### N (Nova Funcionalidade)
Quando uma nova funcionalidade é adicionada, incrementa-se o primeiro dígito (N) e reseta-se E e C.

**Exemplo:** 1.0.0 → 2.0.0

### E (Evolução/Melhoria)
Quando algo existente é aprimorado, incrementa-se o segundo dígito (E) e reseta-se C.

**Exemplo:** 1.0.0 → 1.1.0

### C (Correção)
Quando um bug é corrigido, incrementa-se o terceiro dígito (C).

**Exemplo:** 1.0.0 → 1.0.1

---

## Pacotes de Release

- **Incremental:** `Sua Mesa X.X.X-inc (X.XX)` — apenas arquivos modificados
- **Completo:** `Sua Mesa X.X.X-full` — instalação fresca, do zero
