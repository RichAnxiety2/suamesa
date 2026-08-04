import { PrismaClient } from '../src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Iniciando seed...');

  // ============================================
  // 1. SUPERADMINISTRADOR
  // ============================================
  console.log('📝 Criando superadministrador...');
  const adminPassword = await bcrypt.hash('Admin@2026', 10);
  const superadmin = await prisma.staff.create({
    data: {
      name: 'Super Administrador',
      profile: 'SUPERADMIN',
      email: 'admin@suamesa.app.br',
      password_hash: adminPassword,
      active: true,
      first_access_completed: true,
    },
  });
  console.log(`✅ Superadmin criado: ${superadmin.email}`);

  // ============================================
  // 2. TENANT DE EXEMPLO
  // ============================================
  console.log('📝 Criando tenant de exemplo...');
  const tenant = await prisma.tenant.create({
    data: {
      name: 'Restaurante do Zé',
      subdomain: 'restaurante-do-ze',
      plan: 'FOUNDER',
      status: 'ACTIVE',
    },
  });
  console.log(`✅ Tenant criado: ${tenant.name}`);

  // ============================================
  // 3. GERENTE DO TENANT
  // ============================================
  console.log('📝 Criando gerente do tenant...');
  const managerPassword = await bcrypt.hash('Manager@2026', 10);
  const manager = await prisma.staff.create({
    data: {
      tenant_id: tenant.id,
      name: 'Gerente do Zé',
      profile: 'MANAGER',
      email: 'gerente@restaurantedoze.com',
      password_hash: managerPassword,
      active: true,
      first_access_completed: true,
    },
  });
  console.log(`✅ Gerente criado: ${manager.email}`);

  // ============================================
  // 4. CORES PADRÃO
  // ============================================
  console.log('📝 Criando cores padrão...');
  const colors = await prisma.tenantColors.create({
    data: {
      tenant_id: tenant.id,
      primary_color: '#606c38',
      primary_light: '#dda15e',
      primary_dark: '#283618',
      secondary_color: '#fefae0',
      secondary_light: '#e9edc9',
      secondary_dark: '#bc6c25',
      background_color: '#fefae0',
      text_primary: '#283618',
      text_secondary: '#606c38',
      accent_color: '#dda15e',
      active_palette: 'olive-garden',
    },
  });
  console.log(`✅ Cores criadas para tenant ${tenant.id}`);

  // ============================================
  // 5. CATEGORIAS PADRÃO
  // ============================================
  console.log('📝 Criando categorias...');
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        tenant_id: tenant.id,
        name: 'Entradas',
        sort_order: 1,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        tenant_id: tenant.id,
        name: 'Pratos Principais',
        sort_order: 2,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        tenant_id: tenant.id,
        name: 'Bebidas',
        sort_order: 3,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        tenant_id: tenant.id,
        name: 'Sobremesas',
        sort_order: 4,
        active: true,
      },
    }),
  ]);
  console.log(`✅ ${categories.length} categorias criadas`);

  // ============================================
  // 6. ITENS DO CARDÁPIO
  // ============================================
  console.log('📝 Criando itens do cardápio...');
  const menuItems = await Promise.all([
    // Entradas
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[0].id,
        name: 'Carpaccio',
        description: 'Carpaccio de carne com azeite e limão',
        price: 28.0,
        available: true,
        preparation_time: 5,
      },
    }),
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[0].id,
        name: 'Bruschetta',
        description: 'Bruschetta com tomate e manjericão',
        price: 22.0,
        available: true,
        preparation_time: 10,
      },
    }),
    // Pratos Principais
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[1].id,
        name: 'Picanha Grelhada',
        description: 'Picanha grelhada com batata e salada',
        price: 45.0,
        available: true,
        preparation_time: 20,
        options: {
          ponto: ['Mal Passado', 'Ao Ponto', 'Bem Passado'],
        },
      },
    }),
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[1].id,
        name: 'Frango à Parmegiana',
        description: 'Frango à parmegiana com arroz e feijão',
        price: 35.0,
        available: true,
        preparation_time: 25,
      },
    }),
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[1].id,
        name: 'Salmão Grelhado',
        description: 'Salmão grelhado com limão e ervas',
        price: 55.0,
        available: true,
        preparation_time: 20,
      },
    }),
    // Bebidas
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[2].id,
        name: 'Coca-Cola',
        description: 'Refrigerante Coca-Cola 350ml',
        price: 8.0,
        available: true,
        preparation_time: 1,
      },
    }),
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[2].id,
        name: 'Suco Natural',
        description: 'Suco natural de frutas frescas',
        price: 12.0,
        available: true,
        preparation_time: 5,
      },
    }),
    // Sobremesas
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[3].id,
        name: 'Pudim de Leite',
        description: 'Pudim de leite condensado com calda de caramelo',
        price: 12.0,
        available: true,
        preparation_time: 2,
      },
    }),
    prisma.menuItem.create({
      data: {
        tenant_id: tenant.id,
        category_id: categories[3].id,
        name: 'Mousse de Chocolate',
        description: 'Mousse de chocolate belga',
        price: 14.0,
        available: true,
        preparation_time: 2,
      },
    }),
  ]);
  console.log(`✅ ${menuItems.length} itens de cardápio criados`);

  // ============================================
  // 7. MESAS
  // ============================================
  console.log('📝 Criando mesas...');
  const tables = await Promise.all([
    prisma.table.create({
      data: {
        tenant_id: tenant.id,
        number: 1,
        capacity: 2,
        location: 'Próximo à janela',
        status: 'FREE',
        qr_code: 'https://qr.suamesa.app/table/1',
      },
    }),
    prisma.table.create({
      data: {
        tenant_id: tenant.id,
        number: 2,
        capacity: 4,
        location: 'Centro do salão',
        status: 'FREE',
        qr_code: 'https://qr.suamesa.app/table/2',
      },
    }),
    prisma.table.create({
      data: {
        tenant_id: tenant.id,
        number: 3,
        capacity: 6,
        location: 'Fundo do salão',
        status: 'FREE',
        qr_code: 'https://qr.suamesa.app/table/3',
      },
    }),
  ]);
  console.log(`✅ ${tables.length} mesas criadas`);

  console.log('✨ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
